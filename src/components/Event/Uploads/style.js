import styled from "styled-components/macro"
import colors from "../../../styles/utils/colors"

export const Label = styled.label`
  /* border-radius: 5px; */
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: all 0.5s linear;

  label {
    background-color: #e4e5e8;
    border-radius: 5px;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 0.5rem;
    display: block;
    width: 40%;
    margin: auto;
  }

  .file {
    opacity: 0;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 25px;
    height: 25px;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 8px;
    border: 2px solid ${colors.black};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.black} transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const FileContainer = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: flex;
  background-color: #f1f1f1;
  padding: 0.5rem;
  display: flex;
`

export const DottedLine = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed ${colors.grey};
  border-radius: 5px;

  .uploadBox {
    text-align: center;
    position: relative;
  }
`

export const FileName = styled.p`
  /* position: absolute; */
  font-size: 0.85rem;
  color: #555;
  bottom: -35px;
  left: 10px;
  bottom: 0;
`
