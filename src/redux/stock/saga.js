import { all, takeEvery, fork, put } from "redux-saga/effects";
import actions from "./actions";
import { get } from "../../helpers/apiRequestor";

export function* fetchStockPrice() {
  yield takeEvery("FETCH_STOCK_PRICE", function* ({ payload }) {
    try {
      yield put({
        type: actions.FETCHING_STOCK_PRICE,
        loading: true,
      });
      const apiResult = yield fetchStockPriceAPI(
        payload,
        process.env.REACT_APP_FINHUB_API_KEY
      );

      const result = apiResult.data;
      if (
        apiResult.status === 200 &&
        result &&
        result.d !== null &&
        result.dp !== null
      ) {
        yield put({
          type: actions.FETCH_STOCK_PRICE_SUCCESS,
          loading: false,
          result: {
            ...apiResult.data,
            payload,
          },
          message: 'Successfully fetched stock price for "' + payload + '"',
        });
      } else {
        yield put({
          type: actions.FETCH_STOCK_PRICE_FAILED,
          loading: false,
          message: 'No stock price found for "' + payload + '"',
        });
      }
    } catch (error) {
      yield put({
        type: actions.FETCH_STOCK_PRICE_FAILED,
        loading: false,
        message: 'Something went wrong for "' + payload + '"',
      });
    }
  });
}

function fetchStockPriceAPI(payload, token) {
  return get(`quote`, payload, null, token, "FINNHUB");
}

export default function* rootSaga() {
  yield all([fork(fetchStockPrice)]);
}
