import styled from "styled-components";
import WithDirection from "../../helpers/rtl";

const StyledWrapper = styled.div`
  .stock {
    &--title {
      font-weight: 600;
    }
    &--container {
      text-align: center !important;
      margin-top: 50px !important;
      .MuiGrid-container {
        justify-content: center !important;
      }
    }

    &--subtitle {
      margin-bottom: 20px;
    }

    &--badge {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`;

export default WithDirection(StyledWrapper);
