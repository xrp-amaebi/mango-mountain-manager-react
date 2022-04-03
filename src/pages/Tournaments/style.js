import styled from "styled-components"
import media from "../../styles/utils/media"
import { colors } from "../../styles/utils/colors"
import { font } from "../../styles/utils/font"


export const CardContainer = styled.div`
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: ${font.small};

    ${ 
        media.mobile`
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    }
` 
export const Cards = styled.div`
    background: white;
    width: 250px;
    max-height: 580px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: ${font.small};
    margin: ${font.small};
    border: 1px solid ${colors.light};
    cursor: pointer;
    overflow: hidden;
    box-shadow: inset 2px 2px 1px rgba(255, 255, 255, .3),
    inset -1px -1px 2px rgba(0, 0, 0, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.1),
    
`
export const CardImg = styled.div`
 
    position: relative;
    border-radius: 3px;
    background-size: auto;
    border: none;

    img
    {
        position: relative;
        border-radius: 4px;
        min-height: 5%;
        height: 120px;
        max-height: 10%;
        width: 100%;  
    }
`
export const CardBody = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    // border: .2px solid ${colors.light};


    div 
    {
        box-sizing: border-box;
        border: .3px solid ${colors.light};
        border: .3px solid ${colors.gBlue};
        border-radius: 1px;
        padding: 6px;
        margin: 5px;
        background: ${colors.light};
        background-color: ${colors.offWhite};
        color: ${colors.gBlue};
        font-size: xx-small;
        text-align: center;
        transition: 1s ease-in-out;
        display: flex;
        justify-content: space-between;

        :nth-child(1)
        {
            background-color: ${colors.gBlue};
            color: ${colors.offWhite};
        }

        :hover
        {
            background-color: ${colors.gBlue};
            backdrop-filter: blur("10px");
            border: 1px solid ${colors.gBlue};
            color: ${colors.offWhite};
        }
    }

    a
    {
        font-size: xx-small;
        background: whitesmoke;
        text-decoration: none;
        padding: ${font.small};
        transition: .5s ease;
        text-align: center;
        border: .3px solid ${colors.light};
        margin: ${font.small};
        color: black;
        border-radius: 4px;
        align-self: center;
        width: 20px;
    }

    a:hover
    {
        background: ${colors.sky};
        color: black;
    }

    .button 
    {
        text-decoration: none;
        color: ${colors.offWhite};
        padding: 6px ;
        display: inline-block;
        border-radius: 1px;
        background: ${colors.gBlue};
        text-align: center;
        border: 1px solid ${colors.gBlue};
        font-size: x-small;
        transition: 0.3s ease-in-out;
        display: flex;
        justify-content: space-between;



        svg
        {
            margin-right: 0.5rem;
            align-self: center;
            fill: ${colors.offWhite};
            stroke: ${colors.offWhite};
            height: 10px;
            width: 10px;
        }

        :hover 
        {
            background: ${colors.offWhite};
            border: 1px solid ${colors.light}
            backdrop-filter: blur(10px);
            color: ${colors.gBlue};
            font-weight: 400;

            svg
            {
                fill: ${colors.gBlue};
                stroke: ${colors.offWhite};
                height: 10px;
                width: 10px;
            }
        }
    }
`
export const TournamentHome = styled.div`
    background: #fff;
    font-family: Poppins;
    width: 100%;
    display: flex;
    flex-direction: column;

    .currentLink {
        height: 20px;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: xx-small;
        font-family: Poppins;
        letter-spacing: 1px;
    }

    .currentLink a {
        padding: 4px;
        margin: 10px;
        border-radius: 2px;
        border: 1px solid ${colors.gBlue};
        cursor: pointer;
        display: block;
        min-width: 20px;
        text-align: center;
        color: ${colors.gBlue}
    }

    .currentLink a:hover {
        color: white;
        background-color: ${colors.gBlue};
        border-radius: 2px;
        border: 1px solid ${colors.gBlue};
        cursor: pointer;
    }

    .paginateActive a {
        color: white;
        background-color: ${colors.gBlue};
    }
`

export const Header = styled.div`

    padding: ${font.small};
    margin: ${font.small};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .material-icons
    {
        font-size: small;
    } 

`