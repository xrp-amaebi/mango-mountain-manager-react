import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"

import { SideBar } from "../../components/Event/Layout/SideBar"

import { dashboardRoutes } from "./utility/routes"

import { Container, Main, Body } from "./style"

export const DashBoard = () => {
    const  [open, setOpen] = useState(false)

    return (
        <Container>
            <SideBar open={open} setOpen={setOpen} />
            <Main>
                <Body>
                    <Switch>
                        {
                            dashboardRoutes.map(({ exact, path, component, protect }, index) => {
                                return (
                                    <Route key={index} path={path} component={component} protect={protect} exact={exact} open={open} setOpen={setOpen} />
                                )
                            })
                        }
                    </Switch>
                </Body>
            </Main>
        </Container>
    )
}
