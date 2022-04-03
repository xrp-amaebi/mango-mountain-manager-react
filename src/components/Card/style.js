import styled from "styled-components"

import { colors } from "../../styles/utils/colors"

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const Body = styled.div`
    width: 45%;
    border: none;
`
export const Image = styled.div`
    border: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: .3rem;
    backdrop-filter: blur(15px);

    div
    {
        border: 1px solid rgba(255, 255, 255, 0,3);
    }
`
export const Desc = styled.div`
    margin: .3rem;
    backdrop-filter: blur(15px);
    background: navy;

    svg
    {
        margin-right: 0.5rem;
        fill: ${colors.offWhite};
        stroke: ${colors.offWhite};
        height: 10px;
        width: 10px;
    }

`