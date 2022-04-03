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
  top: 10rem;
  margin: auto;
  padding: 0.5rem;
  background-color: ${({ bg }) => (bg ? bg : "#1a73e8")};
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
  height: 40rem;
  overflow-y: scroll;

  width: 60%;
  left: 20.5%;


  ::-webkit-scrollbar {
    width: 0.2rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
  }

  ::-webkit-scrollbar-thumb {
    background: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 2px;
  }


  ${SlideDown};

  div
  {
    margin-left: 3px
  }

  ${
    media.mobile`
      width: 80%;
      left: 10.1%;
      height: 50rem
    `
  }
`