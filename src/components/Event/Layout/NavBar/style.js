import styled from "styled-components/macro"
// import { NavLink } from "react-router-dom"

import { colors } from "../../../../styles/utils/colors"
// import media from "../../../../styles/utils/media"

export const NavWrapper = styled.section`
    width: 100%;
    display: "flex";
    justify-content: space-between;
    align-items: center;
    background: ${colors.darkGrey};
`
export const NavHead = styled.div`
    cursor: pointer;
`

export const NavBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
`

export const NavItem = styled.div`
`
export const SearchBar = styled.div`
    min-height: 40px;
    background: ${colors.offWhite};
    width: 12rem;
    min-width: 8rem;
    
    div
    {
        border: 1px solid ${colors.darkGrey};
        color: ${colors.darkGrey};
        padding: 1rem;
        margin: 0.2rem;
        font-size: 10px;
        text-align: left;
        border-radius: 10px;
    }
`
export const Profile = styled.div`
`

