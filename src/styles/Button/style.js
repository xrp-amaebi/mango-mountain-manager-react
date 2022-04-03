import styled from "styled-components"
import { colors } from "../utils/colors"


export const Button = styled.button`
  background-color: ${({ dashboard }) => dashboard ? `${dashboard}` : `${colors.mud}`};
  width: ${({ width }) => (width ? width : null)};
  padding: ${({ padding }) => (padding ? padding : "1rem")};
  border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => (color ? color : `${colors.black}`)};
  margin: ${({ margin }) => (margin ? margin : null)};
  height: ${({ height }) => (height ? height : null)};
  font-size: 12px;
  font-weight: 600;

  :disabled {
    background-color: #7f7f7f;
    cursor: not-allowed;
  }
`
