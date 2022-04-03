import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { useTokenContext } from "../../../Global/Token/TokenContext"
// import { DashBoard } from "../../../pages/Event"

import { pullEvents } from "../../../utils/fetch"
// import { NavBar } from "../Layout/NavBar"

import { Container, View, SubContainer } from "./style"


export const HomePage = (props) => {
    const { token: itoken } = props
    const [events, setEvents] = useState([])
    const { token } = useTokenContext(itoken)

    useEffect(() => {
        
        console.log({ token })

        return () => {
            console.log("cleared")
        }
    
    }, [token, events])

    const onLoadScreen = (event) => {

        const profile = pullEvents({ token })

        profile.then(response => {
            const { collection } = response || {}

            !collection ? setEvents(events) : setEvents(collection) //!important

        })

    }

    return(
        <Container>
            <SubContainer>
                <div onClick={onLoadScreen} >
                    {/* @Oddyssey */}
                    <h5>Event Tracking Number 76OP5IF5657-7493GHD</h5>
                    <h5>Status Pending</h5>
                    <h5>Type Offline</h5>
                    <h5>Event Booking Number AAA235IG7</h5>
                    <h5>Booking Type Ticket</h5>
                </div>
                <div onClick={onLoadScreen} >
                    <h5>Buyer Jeremy Fremont</h5>
                    <h5>Title(s) Multiple Injustice2; M11K</h5>
                    <h5>Registered Player(s) Phederal; Tek</h5>
                    <h5>Event Booking Number AAA235IG7</h5>
                    <h5>Payment Method Bank Transfer</h5>
                </div>
            </SubContainer>
            <View onClick={onLoadScreen} >
                Confirm Enrollment
            </View>
            {/* <div>
                {
                    events ? events.map((event, key) => {
                        sessionStorage.setItem(`event${key}`, JSON.stringify(event))
                        return <div key={key}> {event.eventID} {console.log(event)}</div>
                    }) : <div></div>
                }
            </div> */}
        </Container>
    )
}

const mapStateToProps = (state) => ({
    ...state.platform
})

export default connect(mapStateToProps)(HomePage)