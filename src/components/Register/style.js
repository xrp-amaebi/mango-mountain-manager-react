import styled from "styled-components";
import media from "../../styles/utils/media";

export const RegisterInputContainer = styled.div`
  display: flex;
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 20px 0;

  input 
  {
    border: none;
    width: 100%;
    padding: 15px;
    color: gray;

    :focus {
      outline: none;
    }
  }

  img {
    width: 13px;
  }

  ${
    media.mobile`
      padding: 0 1rem;
      margin: 20px 0
    `
  }
`
