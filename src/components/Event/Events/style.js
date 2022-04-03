import styled from "styled-components"
import { colors } from "../../../styles/utils/colors"
// import media from "../../../styles/utils/media"


export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  border-right: 1px solid rgba(229, 229, 229, 0.5);
  background-color: ${colors.darkBlue};
  overflow-y: auto;
  font-family: poppins;
  color: ${colors.offWhite};
`;

export const EventContainer = styled.section`
  color: ${colors.offWhite};
`