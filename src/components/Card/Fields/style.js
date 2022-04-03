import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors } from "../../../styles/utils/colors"

export const Fields = styled.div`
    margin: .1rem;
    padding: 1.2rem;
    border: 2px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    letter-spacing: 1px;
    color: white;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
`
export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background: transparent;
`
export const Links = styled(Link)`
    display: flex;
    flex-direction: column;
    background: transparent;
    text-decoration: none;
    color: ${colors.offWhite}
`