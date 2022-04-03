import styled from "styled-components"
import { SlideDown } from "../../styles/utils/animation"
// import { colors } from "../../styles/utils/colors"
import media from "../../styles/utils/media"


export const Container = styled.div`
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  position: fixed;
  top: 2rem;
  margin: auto;
  background-color: ${({ bg }) => (bg ? bg : "#1a73e8")};
  width: auto;
  z-index: 10;
  left: 35%;
  text-align: center;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0.5px solid ${({ bg }) => (bg ? bg : "#1a73e8")};
  transition: all 0.5s;
  opacity: .8;


  .cancel {
    height: 10px;
    cursor: pointer;
  }

  img {
    height: 20px;
  }

  ${SlideDown};

  ${
    media.mobile`
      width: 80%;
      left: 7.5%;
    `
  }
`

export const Paragraph = styled.p`
  color: ${"#1a73e8"};
  font-weight: 600;
`

export const GlassToast = styled.div`

  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  position: fixed;
  top: 2rem;
  margin: auto;
  padding: 0.5rem;
  border-radius: 3px;
  background: rgba(255,255,255,0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(25px);
  width: auto;
  z-index: 10;
  align-items: center;
  justify-content: center;

  ${SlideDown};

  div
  {
    margin-left: 3px
  }

  ${
    media.mobile`
      width: 80%;
      left: 7.5%;
    `
  }
`