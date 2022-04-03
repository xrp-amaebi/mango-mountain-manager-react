import styled from "styled-components"

import { colors } from "../../../styles/utils/colors"
// import media from "../../../styles/utils/media"


export const Container = styled.div`
    font-family: poppins;
    background: ${colors.darkBlue};
    color: ${colors.offWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
`
export const SubContainer = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    border: 2px dashed ${colors.offWhite};

    div
    {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
        padding: 1rem;
        // justify-content: center;
        // align-items: center;
       
    }
` 

export const View = styled.button`
    color: ${colors.offWhite};
    background: ${colors.darkBlue};
    min-width: 150px;
    padding: .4rem;
    border: 1px solid ${colors.offWhite};
    transition: 1s ease-in-out;
    font-weight: 600;

    :hover
    {
        color: ${colors.darkBlue};
        background: ${colors.offWhite};
        border: 1px solid ${colors.darkBlue};
    }

`