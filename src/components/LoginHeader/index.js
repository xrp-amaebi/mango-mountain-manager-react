import React from "react"
import { FaHamburger, FaUser } from "react-icons/fa"
import { useUserContext } from "../../Global/User"

import { 
    Container, Header, QLink, 
    DivLogin, DivRegister
} from "./style"


export const LoginHeader = () => {
    const { user } = useUserContext()

    return (
        !user ? (<Container>
            <Header>
                <div><FaHamburger />{"{ Logo Goes Here... }"}</div>
                <DivRegister><QLink to="/signup">Register</QLink></DivRegister>
                <DivLogin><QLink to="/login">Log In</QLink></DivLogin>
            </Header>
        </Container>
        ) : (
            <Header>
                <div>{"{ Logo Goes Here... }"} </div>
                <DivLogin><FaUser /> { user.accessTag }</DivLogin>
            </Header>
        )

    )
}