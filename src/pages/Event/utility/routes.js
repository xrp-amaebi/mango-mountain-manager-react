import {
    CREATE_EVENT, ADD_PARTICIPANTS, PROFILE, PAGE
} from "../../../routes/frontend"

import HomePage from "../../../components/Event/Page"
import { Profile } from "../../../components/Event/Settings"
import { Participants } from "../../../components/Event/Settings/Participants"
import { Events } from "../../../components/Event/Events"


export const dashboardRoutes = [
    {
        path: PAGE,
        component: HomePage,
        exact: true,
        protect: true
    },
    {
        path: PROFILE,
        component: Profile,
        exact: true,
        protect: true,
    },
    {
        path: CREATE_EVENT,
        component: Events,
        exact: true,
        protect: true,
    },
    {
        path: ADD_PARTICIPANTS,
        component: Participants,
        exact: true,
        protect: true
    }
]