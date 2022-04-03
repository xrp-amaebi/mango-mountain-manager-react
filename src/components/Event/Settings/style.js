import styled from "styled-components"
import { colors } from "../../../styles/utils/colors"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(229, 229, 229, 0.5);
  background-color: ${colors.darkBlue};
  overflow-y: auto;
  color: ${colors.offWhite};
  font-family: poppins;


  @media only screen and (max-width: 600px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    position: fixed;
    top: 3.8rem;
    z-index: 100;
    transition: all 0.3s linear;
    width: 100%;
  }
`