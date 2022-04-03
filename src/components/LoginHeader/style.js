import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "../../styles/utils/colors"
// import { font } from "../../styles/utils/font"


export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: rgba(0,0,0,0.1);
    width: inherit;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px;
    margin-left: 1rem;
    margin-right: 1rem;

`

export const DivLogin = styled.div`
    border: 2px solid ${colors.gBlue};
    padding: 4px;
    border-radius: 6px;
`

export const DivRegister = styled.div`
    padding: 4px;
    border-radius: 6px;
    color: ${colors.gold};
    font-size: 14px;
`

export const QLink = styled(Link)`
    color: ${colors.gBlue};
    text-decoration: none;
    font-size: 11px;
    font-weight: 400;
`