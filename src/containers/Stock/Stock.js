import React, { useEffect, useState } from "react";
import StockStyles from "./Stock.styles";
import { useDispatch, useSelector } from "react-redux";
import stockAction from "../../redux/stock/actions";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
  Chip,
  Badge,
} from "@material-ui/core";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

import { Stack, Alert, Autocomplete } from "@mui/material";
import { BarChart } from "@mui/x-charts";

const { fetchStockPrice, clearError } = stockAction;
export default function Stock(props) {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState("");
  const [open, setOpen] = useState(false);
  const [symbolError, setSymbolError] = useState(false);
  const data = useSelector((state) => state.Stock.stockPriceData);
  const loading = useSelector((state) => state.Stock.stockPriceLoading);
  const isError = useSelector((state) => state.Stock.stockPriceIsError);
  const message = useSelector((state) => state.Stock.message);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message, isError, dispatch]);

  const submitForm = (event) => {
    event.preventDefault();

    setSymbolError(false);
    // setList([...list, symbol]);
    if (symbol === "") {
      setSymbolError(true);
    } else {
      dispatch(fetchStockPrice(symbol));
    }
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearError());
  };

  const dataset = [
    [data ? data.c : 0, data && data.c < 0 ? data.c : 0, "CP"],
    [data ? data.d : 0, data && data.d < 0 ? data.d : 0, "C"],
    [data ? data.dp : 0, data && data.dp < 0 ? data.dp : 0, "PC"],
    [data ? data.h : 0, data && data.h < 0 ? data.h : 0, "HPD"],
    [data ? data.l : 0, data && data.l < 0 ? data.l : 0, "LPD"],
    [data ? data.o : 0, data && data.o < 0 ? data.o : 0, "OPD"],
    [data ? data.pc : 0, data && data.pc < 0 ? data.pc : 0, "PPD"],
  ].map(([high, low, order]) => ({
    high,
    order,
  }));

  const chartSetting = {
    dataset,
    height: 300,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: "translateX(-10px)",
      },
    },
    xAxis: [{ scaleType: "band", dataKey: "order" }],
    yAxis: undefined,
  };

  return (
    <StockStyles>
      <Container className="stock--container">
        <Grid container>
          <Grid lg={24} item>
            <Typography variant="h2" component="h2" className="stock--title">
              {symbol
                ? `${data && data.payload ? data.payload : ""} Stock Price`
                : "Stock Price"}
            </Typography>
            <Typography variant="subtitle1" className="stock--subtitle">
              Get real-time quote data for US stocks. Constant polling is not
              recommended. Use websocket if you need real-time updates.
            </Typography>
            <form autoComplete="off" onSubmit={submitForm}>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  options={[
                    "AAPL",
                    "MSFT",
                    "GOOGL",
                    "AMZN",
                    "TSLA",
                    "FB",
                    "NVDA",
                    "JPM",
                    "BAC",
                    "WMT",
                  ]}
                  value={symbol}
                  onChange={(e, value) => setSymbol(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Symbol"
                      onChange={(e) => setSymbol(e.target.value)}
                      variant="outlined"
                      color="primary"
                      type="text"
                      name="symbol"
                      fullWidth
                      disabled={loading}
                      value={symbol}
                      error={symbolError}
                      helperText={
                        symbolError ? "Symbol is required to proceed" : ""
                      }
                    />
                  )}
                />
                <Button
                  ref={null}
                  disabled={loading}
                  variant="outlined"
                  color="primary"
                  type="submit"
                >
                  Search
                </Button>
              </Stack>
            </form>
          </Grid>
          <Grid lg={6} item>
            <BarChart
              series={[
                {
                  dataKey: "high",
                  label: "Count",
                  layout: "vertical",
                  stack: "stack",
                },
              ]}
              borderRadius={10}
              tooltip={{ trigger: "axis" }}
              {...chartSetting}
              loading={loading}
            />
            <div>
              <Badge
                badgeContent={"CP"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="Current Price" />
              </Badge>
              <Badge
                badgeContent={"C"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="Change" />
              </Badge>
              <Badge
                badgeContent={"PC"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="Percent Change" />
              </Badge>
              <Badge
                badgeContent={"HPD"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="High price of the day" />
              </Badge>
              <Badge
                badgeContent={"LPD"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="Low price of the day" />
              </Badge>
              <Badge
                badgeContent={"OPD"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="Open price of the day" />
              </Badge>
              <Badge
                badgeContent={"PPD"}
                color="primary"
                className="stock--badge"
              >
                <Chip label="Previous price of the day" />
              </Badge>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isError ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </StockStyles>
  );
}
