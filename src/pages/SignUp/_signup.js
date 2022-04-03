import styled from "styled-components"
import { colors } from "../../styles/utils/colors"
import { font } from "../../styles/utils/font"
import media from "../../styles/utils/media"


export const SignPage = styled.section`
    background: ${colors.offWhite};
    font-family: poppins;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("img/bg1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    min-height: 100vh;
`

export const SignContainer = styled.div`
    border: 1px solid ${colors.light};
    border-radius: 12px;
    min-height: 600px;
    height: auto;
    padding: ${font.extra};
    display: flex;
    font-size: 24px;

    h1{
        padding: 16px 0 0;
        color: #202124;
        font-family: 'Google Sans','Noto Sans Myanmar UI',arial,sans-serif;
    }

    ${
        media.mobile`
            padding: ${font.large};
            border: none;
        `
    }

`

export const Languages = styled.div`
    width: 890px;
    padding: 2.1rem 0 0;

    .privacy
    {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;

        ${
            media.mobile`
                width: auto;
                display: inline-block;
            `
        }
    }

    form
    {
        background: none;
    }

    .language-form
    {
        padding: 8px;
        background: whitesmoke;
        border: none;
        outline: none;

        ${
            media.mobile`
                font-size: small;
                width: 200px;
            `
        }
    }

    .language-form > option
    {
        background: transparentize($color: $sky, $amount: .65);
        padding: 6px;
    }

    #privacy
    {
        position: relative;
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 8px;
    }

    span > a
    {
        text-decoration: none;
        color: grey;
        font-size: small;
        font-weight: lighter;

        ${
            media.mobile`
            font-size: xx-small;
            `
        }
    }

    ${
        media.mobile`
            display: inline-block;
            width: auto;
        `
    }
`

export const FieldContainer = styled.div`
    font-size: 14px;
    padding: 24px 0 0;
    white-space: normal;
    border-left-width: 40px;
    border-right-width: 40px;
    width: 100%;

    .react-tel-input
    {
        letter-spacing: 1px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        

        input
        {
            width: 100%;
            height: 100%;
            display: flex;
            border: 1px solid rgb(196, 196, 196);
            border-radius: 5px;
            margin: none;
            color: #fcaf01;
        }

        input.form-control
        {
            position: relative;
            background: none;
            font-family: poppins;
            background: transparentize($color: ${colors.sky}, $amount: 0.3);
            border: 2px solid ${colors.light};
            border-radius: 6px;
            padding: 10px;
            font-size: 12px;
            transition: ease-in-out, width .35s ease-in-out;
            width: 100%;
            text-align: left;
            cursor: pointer;
            margin: none;
            

            :focus
            {
                outline: none;
                border: 2.5px solid #1a73e8;
                color: ${colors.gold};
            }
        }
        
        ${
            media.mobile`
                width: 100%;
            `
        }
        
        .special-label
        {
            display: none;
        }
    }
    
    ${
        media.mobile`
            flex-direction: column;
        `
    }
    }
    div
    {
        padding-top: ${font.small};
    }

    .next-input
    {
        text-decoration: none;
        color: #1a73e8;
        padding: 16px 0 16px;
        display: inline-block;
    }

    .next-input:hover
    {   
        background: transparentize($color: ${colors.light}, $amount: 0.7);
        border-radius: 10px;
    }
`

export const CreateAccount = styled.h1`
    span {
        font-family: poppins;
        font-size: large;
        font-weight: 400;
    }
`

export const Logo = styled.div`
    font-size: small;
`

export const Wrapper1 = styled.div`
    justify-content: center;
    align-items: center;
`

export const Wrapper2 = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 48px;
    width: 300px;

    ${
        media.mobile`
            display: none;
        `
    }

`

export const Figure = styled.figure`
    font-size: 14px;
    line-height: 1.4286;

    figcaption
    {
        padding: ${font.small};
        color: ${colors.gold};
    }
`

export const Redirect = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 0 0;
    font-size: 16px;

    .next-input
    {
        text-decoration: none;
        color: #1a73e8;
        padding: 16px 0 16px;
        display: inline-block;
    }

    .next-input:hover
    {   
        background: transparentize($color: ${colors.light}, $amount: 0.7);
        border-radius: 10px;
    }

    .next-field
    {
        text-decoration: none;
        background: #1a73e8;
        padding: 10px;
        color: ${colors.offWhite};
        border-radius: 4px;
        border: 1px solid ${colors.light};
        display: inline-block;
        width: 70px;
        text-align: center;
    }
`