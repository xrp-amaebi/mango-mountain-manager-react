import styled from "styled-components"
import { NavLink } from "react-router-dom"

import { colors } from "../../../../styles/utils/colors"
import media from "../../../../styles/utils/media"

export const Container = styled.div`
  min-width: 140px;
  max-width: 20%;
  height: 100%;
  border-right: 1px solid rgba(229, 229, 229, 0.5);
  background: ${colors.darkBlue};
  border: ${colors.darkBlue};
  backdrop-filter: blur(15px);
  overflow-y: auto;
  font-family: poppins;
  font-size: 12px;
  // display: ${({ open }) => (open ? "flex" : "none")};

  ${
    media.mobile`
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
      position: fixed;
      top: 3.8rem;
      z-index: 100;
      transition: all 0.3s linear;
      width: 100%;
    `
  }
`
export const NavContainer = styled(NavLink)`
  display: flex;
  text-decoration: none;
  outline: none;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;

  padding: 0.5rem 1rem;
  text-align: center;

  &.active {
    background-color: ${colors.offWhite};
    color: black;

    p {
      color: ${colors.black || "#000000"};
    }

    svg {
      fill: ${colors.black || "#000000"};
      stroke: ${colors.black || "#000000"};
    }
  }

  svg {
    margin-right: 0.5rem;
    fill: ${colors.offWhite};
    stroke: ${colors.offWhite};
    height: 20px;
    width: 20px;
  }

  ${
    media.mobile`
      width: 60%;
      margin: 1rem auto;

      :focus{
        outline: none
      }
    `
  }
`;

export const LogoHead = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  img {
    height: 20px;
    width: 20px;
  }

  ${
    media.mobile`
      margin-bottom: 0 
    `
  }
`
export const LogoName = styled.h4`
  color: ${colors.offWhite};
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-family: poppins;

  ${
    media.mobile`
      font-size: 1.2rem
    `
  }
`;

export const NavItem = styled.p`
  color: ${colors.offWhite};
  font-weight: 600;
`;

export const Line = styled.hr`
  background-color: #e5e2e2;
  width: 90%;
  margin: 1rem auto;
`;

export const NavWrapper = styled.div`
  display:flex;
  flex-direction: column;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  padding: 0.5rem 1rem;
  
  .subLinks {
    display: flex;
    align-items: center;

    .arrow {
      transition: transform 0.3s linear;
      transform: ${({ open }) => (open ? `rotate(90deg)` : `rotate(0)`)};
      color: ${colors.offWhite};
      font-size: 1rem;
    }
  }

  svg {
    margin-right: 0.5rem;
    fill: ${colors.offWhite};
    stroke: ${colors.offWhite};
    height: 20px;
    width: 20px;
  }

  ${
    media.mobile`
      margin: auto !important;
      width: 60% 
    `
  }
`;

export const SubNav = styled.div`
  text-decoration: none;
  max-height: ${({ open }) => (open ? `400px` : `0`)};
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  border-radius: 3px;
  background-color: ${colors.offWhite}; 
  background-color: transparent;
  text-align: left;
`;

export const NavItems = styled.p`
  font-size: 8px;
  color: ${colors.offWhite};
  font-weight: 400;
`;

export const SubBlock = styled.div`
  border-bottom: 1px solid ${colors.darkBlue};
`;

export const SubLink = styled(NavLink)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  font-family: poppins;
  padding-left: 10px;

  p {
    margin: .5rem 0;
    transition: all 0.3s linear;
    color: ${colors.darkBlue};
    color: ${colors.offWhite};
  }

  :hover {
    background-color: ${colors.offWhite};

    p {
      color: ${colors.gold};
    }
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  text-decoration: none;
  outline: none;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;

  padding: 0.5rem 1rem;
  text-align: center;
  cursor: pointer;

  p {
    color: ${colors.offWhite};
  }
  
  svg {
    fill: ${colors.offWhite};
    stroke: ${colors.offWhite};
  }

  svg {
    margin-right: 0.5rem;
    fill: ${colors.offWhite};
    stroke: ${colors.offWhite};
    height: 20px;
    width: 20px;
  }

  ${
      media.mobile`
        width: 60%;
        margin: 1rem auto;

        :focus{
            outline: none
        }
  `}
`;