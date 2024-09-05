import actions from "./actions";

const initState = {
  stockPriceData: null,
  stockPriceLoading: false,
  stockPriceIsError: false,
  message: null,
};

export default function stockReducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCHING_STOCK_PRICE:
      return {
        ...state,
        stockPriceData: null,
        stockPriceLoading: action.loading,
      };

    case actions.FETCH_STOCK_PRICE_SUCCESS:
      return {
        ...state,
        stockPriceData: action.result,
        stockPriceLoading: false,
        stockPriceIsError: false,
        message: action.message,
      };

    case actions.FETCH_STOCK_PRICE_FAILED:
      return {
        ...state,
        stockPriceLoading: action.loading,
        stockPriceData: action.result ? action.result : null,
        stockPriceIsError: true,
        message: action.message,
      };

    case actions.CLEAR_ERROR:
      return {
        ...state,
        message: null,
      };

    default:
      return state;
  }
}
