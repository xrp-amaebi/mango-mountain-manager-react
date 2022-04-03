import styled from "styled-components"
import media from "../../styles/utils/media"
import { colors } from "../../styles/utils/colors"
import PhoneInput from "react-phone-input-2"


export const FieldName = styled.div`
    letter-spacing: 1px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    ${
        media.mobile`
            flex-direction: column;
        `
    }

    input
    {
        position: relative;
        background: none;
        font-family: poppins;
        background: rgba(255,255,255,0.1);
        border: ${colors.light};
        backdrop-filter: blur(15px);
        border-radius: 6px;
        padding: 10px;
        font-size: 11px;
        font-weight: 400;
        transition: ease-in-out, width .35s ease-in-out;
        width: 100%;
        text-align: left;
        margin: .5rem;
        cursor: pointer;
        color: ${colors.darkBlue};

        :focus
        {
            outline: none;
            background: ${colors.sky};
        }

        ${
            media.mobile`
                width: 100%
            `
        }
    }
`

export const PhoneField = styled(PhoneInput)`
    
`