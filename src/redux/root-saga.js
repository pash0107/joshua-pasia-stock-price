import { all } from "redux-saga/effects";
import StockSaga from "../redux/stock/saga";

export default function* rootSaga(getState) {
  yield all([StockSaga()]);
}
