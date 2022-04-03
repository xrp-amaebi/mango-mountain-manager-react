import styled from "styled-components"
import { Link } from "react-router-dom"
import PhoneInput from "react-phone-input-2"

import media from "../../styles/utils/media"

// import Background from "../../assets/icons/valueDiamond.svg"
import { colors } from "../../styles/utils/colors"
 


export const ContainerWrapper = styled.div`
  /* width: 100%; */
  min-height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;

  ${
    media.mobile`
      grid-template-columns: 100%;
      height: 100%;
      padding: 2rem 0
    `
  }
`;

export const Item = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("${"Background"}");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: grid;
  place-items: center;

  .content {
    width: 80%;
    margin: auto;
    position: relative;
    z-index: 3;
  }

  ${
    media.mobile`
      display: none
    `
  }
`;

export const Heading = styled.h3`
  font-size: 2rem;
  color: ${colors.offWhite};
`;

export const InputGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
`;

export const RegisterContainer = styled.div`
  height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 10vh; */

  ${
    media.mobile`
      /* padding: 5px; */
      height: 100%
    `
  }
`;

export const RegForm = styled.form`
  /* width: 80%; */
  display: grid;
  width: 70%;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;

  // .react-tel-input {
  //   margin: 20px 0;

  //   .form-control {
  //     padding: 15px 0 15px 48px;
  //   }
  // }

  ${
    media.mobile`
      width: 80%;
      grid-template-columns:100%;
      display: block;
      margin : auto
    `
  }
`;

export const RegButton = styled.button`
  width: 100%;
  background: #cfb53b;
  border-radius: 10px;
  padding: 15px;
  color: white;
  border: none;
  cursor: pointer;
`;

export const CheckDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 10px 0;
  position: relative;

  p {
    /* margin-top: -19px; */
    font-size: 0.8rem;
    color: gray;
    margin-left: 35px;
  }
  .checkbox {
    cursor: pointer;
  }
  .checkbox input {
    position: absolute;
    opacity: 0;
  }

  .checkbox .overlay {
    position: absolute;
    top: 40%;
    left: 0px;
    height: 22px;
    width: 22px;
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid #f39c12;
    transform: rotate(-90deg);
    transition: all 0.3s;

    ${
      media.mobile`
        top: 0.5rem
      `
    }
  }

  .checkbox .icon {
    color: white;
    display: none;
  }

  .checkbox input:checked ~ .overlay {
    background-color: #f39c12;
    border-radius: 8px;
    transform: rotate(0deg);
    opacity: 1;
    border: 2px solid #f39c12;
  }

  .checkbox input:checked ~ .overlay .icon {
    display: block;
  }
`;

export const CheckButton = styled.input`
  margin-top: -19px;
  margin-right: 10px;

  &:checked {
  }
`;

export const ErrorMessage = styled.small`
  color: ${({ color }) => color};
`;

export const TermsLink = styled(Link)`
  text-decoration: none;
`;

export const WarningContainer = styled.div`
  /* width: 100vw; */
  display: flex;
  justify-content: center;
`;

export const WarningDiv = styled.div``;

export const PhoneField = styled(PhoneInput)`
  border: 3px solid red;
  width: 100%;
  padding: 0.5rem;
`;

export const FormTitle = styled.h3`
  color: ${colors.black};
  font-size: 1.5rem;
`;

export const FormDesc = styled.p`
  color: ${colors.grey};
  font-size: 0.8rem;
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${colors.gold};
  text-decoration: none;
  color: #1a73e8;
  padding: 16px 0 16px;
  display: inline-block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  /* z-index: -1; */
`;