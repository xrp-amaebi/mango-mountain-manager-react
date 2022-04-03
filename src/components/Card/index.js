import React from 'react'

import { fields } from "./Fields/data"

import { Field } from "./Fields"

import { Container, Body, Image, Desc } from "./style"


export const Card = (props) => (
    <Container>
        <Body>
            <Image>
                <div>
                    {
                        <img src="img/sfv.png" alt="firewood" width="150px" /> 
                    }
                </div>
                <Desc>
                    <div>
                        STREET FIGHTER V
                    </div>
                    <div>
                        <div>1 VS 1</div>
                        <svg xmlns="http://www.w3.org/2000/svg"width="10"height="10"viewBox="0 0 20 20" fill="none">
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
                    </div>
                </Desc>
            </Image>
            {
                fields.map(({ name, link }, key) => {
                    return (
                        <Field
                            name={name}
                            link={link}
                            key={key}
                        /> 
                    )
                })
            }
        </Body>
    </Container> 
)