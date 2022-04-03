import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'


import { HomePage } from '../pages/Home'
import { About } from '../pages/About/About'
import { NotFound } from '../pages/404'
import { SignUp } from '../pages/SignUp'
import { Register } from '../pages/Register/props/_index'
import { CreateTourney } from '../pages/CreateTournament'
import { Tournaments } from '../pages/Tournaments/'
import { EventCard } from '../pages/EventCard'

import Login from '../pages/Login'
import { DashBoard as DASHPAGE } from '../pages/Event/index'

import {
    HOME, TOURNAMENT, CREATE, 
    SIGNUP, ABOUT, LOGIN,
   REGISTER,
} from '../routes/frontend'

import {
    PAGE, EVENT
} from '../routes/frontend'

export const history = createBrowserHistory()

export const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={HOME} component={HomePage} exact={true} />
            <Route path={ABOUT} component={About} />
            <Route path={SIGNUP} component={SignUp} />
            <Route path={REGISTER} component={Register} />
            <Route path={LOGIN} component={Login} />
            <Route path={CREATE} component={CreateTourney} />
            <Route path={TOURNAMENT} component={Tournaments} />
            <Route path={PAGE} component={DASHPAGE} />
            <Route path={EVENT} component={EventCard} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)