import React from "react";
import ViewStyles from "./View.styles";
import Stock from "../Stock/Stock";
import { Box } from "@material-ui/core";

export default function View() {
  return (
    <ViewStyles>
      <Box className="view">
        <Stock />
      </Box>
    </ViewStyles>
  );
}
