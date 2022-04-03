import React, { useState }  from "react"

// import { useTokenContext } from "../../../Global/Token/TokenContext"
import { NavBar } from "../Layout/NavBar"
import { Container, EventContainer } from './style'

export const Events = ({ history }) => {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <NavBar open={open} setOpen={setOpen} />
            <EventContainer>
                {[{}].map((cell) => <div></div>)}
            </EventContainer>
        </Container>
    )
}