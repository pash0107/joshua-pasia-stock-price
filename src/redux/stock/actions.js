const actions = {
  CLEAR_ERROR: "CLEAR_ERROR",
  FETCH_STOCK_PRICE: "FETCH_STOCK_PRICE",
  FETCHING_STOCK_PRICE: "FETCHING_STOCK_PRICE",
  FETCH_STOCK_PRICE_SUCCESS: "FETCH_STOCK_PRICE_SUCCESS",
  FETCH_STOCK_PRICE_FAILED: "FETCH_STOCK_PRICE_FAILED",

  fetchStockPrice: (payload) => ({
    type: actions.FETCH_STOCK_PRICE,
    payload,
  }),
  clearError: () => ({
    type: actions.CLEAR_ERROR,
  }),
};
export default actions;
