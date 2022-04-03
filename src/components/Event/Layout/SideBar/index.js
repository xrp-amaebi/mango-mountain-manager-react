import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { LOGIN } from "../../../../routes/frontend"
import {
    CREATE_EVENT, ADD_PARTICIPANTS,
    ADD_MODERATOR,  PROFILE, PAGE
} from "../../../../routes/frontend"

import {
    Container, LogoHead, LogoName,
    NavContainer, NavItem, SubBlock,
    NavWrapper, SubLink, SubNav,
    LogoutContainer, NavItems,
} from "./style"

export const SideBar = ({ open, setOpen }) => {
    const [nav, setNav] = useState(false)

    // const history = useHistory()
    const logout = () => {

        <Redirect to={LOGIN} />
        // history.push(LOGIN)
    }
    
    return (
        <Container open={open}>
            { console.log("sidebar", { open })}
            <LogoHead>
                <LogoName></LogoName>
            </LogoHead>
            
            <NavContainer exact to={PAGE}onClick={() => setOpen(false)} activeClassName="active">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"fill="none">
                    <path d="M8.125 0.9375H1.25C1.07719 0.9375 0.9375 1.07719 0.9375 1.25V8.125C0.9375 8.29781 1.07719 8.4375 1.25 8.4375H8.125C8.29781 8.4375 8.4375 8.29781 8.4375 8.125V1.25C8.4375 1.07719 8.29781 0.9375 8.125 0.9375Z" />
                    <path d="M18.75 0.9375H11.875C11.7022 0.9375 11.5625 1.07719 11.5625 1.25V8.125C11.5625 8.29781 11.7022 8.4375 11.875 8.4375H18.75C18.9228 8.4375 19.0625 8.29781 19.0625 8.125V1.25C19.0625 1.07719 18.9228 0.9375 18.75 0.9375Z" />
                    <path d="M8.125 11.5625H1.25C1.07719 11.5625 0.9375 11.7022 0.9375 11.875V18.75C0.9375 18.9228 1.07719 19.0625 1.25 19.0625H8.125C8.29781 19.0625 8.4375 18.9228 8.4375 18.75V11.875C8.4375 11.7022 8.29781 11.5625 8.125 11.5625Z" />
                    <path d="M18.75 11.5625H11.875C11.7022 11.5625 11.5625 11.7022 11.5625 11.875V18.75C11.5625 18.9228 11.7022 19.0625 11.875 19.0625H18.75C18.9228 19.0625 19.0625 18.9228 19.0625 18.75V11.875C19.0625 11.7022 18.9228 11.5625 18.75 11.5625Z" />
                </svg>
                <NavItem>Overview</NavItem>
            </NavContainer>

            <NavContainer to={ADD_MODERATOR} onClick={() => setOpen(false)} activeClassName="active" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M9 6.09375C8.22556 6.18982 7.47432 6.42259 6.78125 6.78125C4.3125 8.09375 3.90625 10.2187 3.90625 11.875C3.90625 13.5313 4.625 15.9687 7.28125 18.125H9.5625V16.875L12.3438 17.0312C12.5446 17.4199 12.7855 17.7864 13.0625 18.125H15.1562V16.25C15.8227 15.7811 16.4498 15.2585 17.0312 14.6875C17.9375 14.7813 18.875 14.0625 19.2188 11.9687C19.2188 11.6562 19.0625 11.5625 18.9062 11.5625C18.5735 11.5335 18.2524 11.4264 17.9688 11.25C17.8437 11.0938 17.4688 9.78125 16.7813 8.75C17.0429 8.09625 17.4878 7.53198 18.0625 7.125C17.1875 6.6875 16.2813 6.375 14.5 6.5625C14.0313 6.46875 13.25 6.28125 12.5 6.15625"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.7812 6.875C12.162 6.875 13.2812 5.75571 13.2812 4.375C13.2812 2.99429 12.162 1.875 10.7812 1.875C9.40054 1.875 8.28125 2.99429 8.28125 4.375C8.28125 5.75571 9.40054 6.875 10.7812 6.875Z"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.8125 7.84362C10.0973 7.40455 11.4897 7.39358 12.7812 7.81237M3.90625 11.8749C3 11.7811 0.78125 11.4374 0.78125 12.4999C0.78125 13.5624 1.375 13.5624 1.96875 13.3124C2.5625 13.0624 3.3125 11.5936 0.78125 10.6249L3.90625 11.8749Z"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.1562 10.9375C15.3288 10.9375 15.4688 10.7976 15.4688 10.625C15.4688 10.4524 15.3288 10.3125 15.1562 10.3125C14.9837 10.3125 14.8438 10.4524 14.8438 10.625C14.8438 10.7976 14.9837 10.9375 15.1562 10.9375Z"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <NavItem>Admins</NavItem>
            </NavContainer>

            <NavContainer to={CREATE_EVENT} onClick={() => setOpen(false)} activeClassName="active">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0)">
                        <path d="M9.99876 6.25L9.99695 10.6226C9.99695 10.7886 10.0628 10.9473 10.1801 11.0645L13.3081 14.1919L14.1919 13.3081L11.2469 10.3638L11.2487 6.25H9.99876Z" />
                        <path d="M11.25 1.24998C6.85069 1.24998 3.2097 4.5172 2.59989 8.74999H0L3.125 11.875L6.25 8.74999H3.8629C4.46083 5.20858 7.54098 2.5 11.25 2.5C15.3857 2.5 18.75 5.86425 18.75 10C18.75 14.1358 15.3858 17.5 11.25 17.5C8.92519 17.5 6.76944 16.4478 5.33569 14.613L4.35059 15.3821C6.02293 17.522 8.53759 18.75 11.25 18.75C16.0748 18.75 20 14.8242 20 10C20 5.17581 16.0748 1.25002 11.25 1.24998Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <NavItem>My Events</NavItem>
            </NavContainer>

            <NavContainer to={ADD_PARTICIPANTS} onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0)">
                        <path
                            d="M0.625 7.1875V15C0.625 15.2486 0.723772 15.4871 0.899587 15.6629C1.0754 15.8387 1.31386 15.9375 1.5625 15.9375H18.4375C18.6861 15.9375 18.9246 15.8387 19.1004 15.6629C19.2762 15.4871 19.375 15.2486 19.375 15V7.1875M19.375 5C19.375 4.75136 19.2762 4.5129 19.1004 4.33709C18.9246 4.16127 18.6861 4.0625 18.4375 4.0625H1.5625C1.31386 4.0625 1.0754 4.16127 0.899587 4.33709C0.723772 4.5129 0.625 4.75136 0.625 5V7.1875H19.375V5Z"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.125 12.1875H5.625M3.125 9.6875H9.375H3.125ZM15 9.6875H16.875H15Z"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                        <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <NavItem>Entries</NavItem>
            </NavContainer>

            <NavWrapper onClick={() => setNav(!nav)} open={nav}>
                <div className="subLinks">
                    <svg xmlns="http://www.w3.org/2000/svg"width="20"height="20"viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0)">
                        <path
                            d="M18.75 16.6169C18.75 15.5647 18.0966 14.6247 17.1069 14.2669C15.6525 13.7409 13.2541 13.125 10 13.125C6.74594 13.125 4.3475 13.7409 2.89313 14.2669C1.90344 14.6247 1.25 15.5644 1.25 16.6169V19.375H18.75V16.6169Z"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 10.625C7.58375 10.625 5.625 8.66625 5.625 6.25V5C5.625 2.58375 7.58375 0.625 10 0.625C12.4162 0.625 14.375 2.58375 14.375 5V6.25C14.375 8.66625 12.4162 10.625 10 10.625Z"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <NavItem>Settings</NavItem>
                    <span className="arrow">{">"}</span>
                </div>

                <SubNav open={nav}>
                    <SubBlock>
                        <SubLink exact to={PROFILE} onClick={() => setOpen(false)}>
                            <NavItems>Profile Settings</NavItems>
                        </SubLink>
                    </SubBlock>
                    
                    <SubBlock>
                        <SubLink exact to={PROFILE} onClick={() => setOpen(false)}>
                            <NavItems>Color Themes</NavItems>
                        </SubLink>
                    </SubBlock>
                </SubNav>
            </NavWrapper>
            <LogoutContainer onClick={logout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M18.7879 9.33697L15.2524 5.80146C15.1653 5.7144 15.062 5.64534 14.9482 5.59822C14.8345 5.55111 14.7126 5.52686 14.5895 5.52686C14.4663 5.52686 14.3444 5.55111 14.2307 5.59822C14.1169 5.64534 14.0136 5.7144 13.9265 5.80146C13.7507 5.97727 13.6519 6.21573 13.6519 6.46437C13.6519 6.71301 13.7507 6.95146 13.9265 7.12728L15.8617 9.0624H5.625C5.37636 9.0624 5.1379 9.16117 4.96209 9.33698C4.78627 9.5128 4.6875 9.75126 4.6875 9.9999C4.6875 10.2485 4.78627 10.487 4.96209 10.6628C5.1379 10.8386 5.37636 10.9374 5.625 10.9374H15.8617L13.9265 12.8725C13.7507 13.0483 13.6519 13.2868 13.6519 13.5354C13.6519 13.7841 13.7507 14.0225 13.9265 14.1983C14.1024 14.3742 14.3408 14.4729 14.5895 14.4729C14.8381 14.4729 15.0766 14.3742 15.2524 14.1983L18.7879 10.6628C18.9637 10.487 19.0625 10.2485 19.0625 9.99988C19.0625 9.75124 18.9637 9.51278 18.7879 9.33697Z"
                        fill="#C4C4C4"
                    />
                    <path
                        d="M11.875 15.3125C11.6264 15.3125 11.3879 15.4113 11.2121 15.5871C11.0363 15.7629 10.9375 16.0014 10.9375 16.25V17.1875H2.8125V2.8125H10.9375V3.75C10.9375 3.99864 11.0363 4.2371 11.2121 4.41291C11.3879 4.58873 11.6264 4.6875 11.875 4.6875C12.1236 4.6875 12.3621 4.58873 12.5379 4.41291C12.7137 4.2371 12.8125 3.99864 12.8125 3.75V2.5C12.8125 2.29481 12.7721 2.09163 12.6936 1.90206C12.615 1.71249 12.4999 1.54024 12.3549 1.39515C12.2098 1.25005 12.0375 1.13496 11.8479 1.05644C11.6584 0.977915 11.4552 0.9375 11.25 0.9375H2.5C2.0856 0.9375 1.68817 1.10212 1.39515 1.39515C1.10212 1.68817 0.9375 2.0856 0.9375 2.5V17.5C0.9375 17.9144 1.10212 18.3118 1.39515 18.6049C1.68817 18.8979 2.0856 19.0625 2.5 19.0625H11.25C11.4552 19.0625 11.6584 19.0221 11.8479 18.9436C12.0375 18.865 12.2098 18.7499 12.3549 18.6049C12.4999 18.4598 12.615 18.2875 12.6936 18.0979C12.7721 17.9084 12.8125 17.7052 12.8125 17.5V16.25C12.8125 16.0014 12.7137 15.7629 12.5379 15.5871C12.3621 15.4113 12.1236 15.3125 11.875 15.3125Z"
                        fill="#C4C4C4"
                    />
                </svg>
                <NavItem>Logout</NavItem>
            </LogoutContainer>
        </Container>

    )
}