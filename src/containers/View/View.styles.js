import styled from "styled-components";
import WithDirection from "../../helpers/rtl";

const StyledWrapper = styled.div`
  .view {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export default WithDirection(StyledWrapper);
