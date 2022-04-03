// import React, { useState } from "react
import React from "react"

import { 
    NavHead, NavBody, NavWrapper,
    Profile, NavItem, SearchBar
} from "./style"


export const NavBar = ({ open, setOpen }) => {

    const hideMenu = (open) => {

        setOpen(!open)
    }

    return (
        <NavWrapper>
            <NavHead onClick={() => hideMenu(open)}>
                <NavItem>MM</NavItem>
            </NavHead>
            <NavBody> 
                <SearchBar>
                    <div>Search Here</div>
                </SearchBar>
                <Profile>
                    <NavItem>Profile</NavItem>
                </Profile>
            </NavBody>
        </NavWrapper>
    )
}