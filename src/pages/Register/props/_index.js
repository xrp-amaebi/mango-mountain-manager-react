import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Axios from "axios"

import RuleToast from '../../../components/Rules'

import { useModalContext } from '../../../Global/Modal/ModalContext'

import { registerPlayer } from "../../../routes/backend"

import { 
    Container, Body, Footer, Wrapper, Div,
    ALink, RegisterHeader, AcceptDiv,
    Paragragh, Accept, NumberBox, Circles,
    TitleBody, BLink, Title, Rules, CountDown
} from "./_style"

export const Register = ({ user, token }) => {
    const check = !!(JSON.parse(sessionStorage.getItem("event")))
    const ticketCheck = !!((JSON.parse(sessionStorage.getItem("ticket"))))

    const terra = check ? [{}] : (JSON.parse(sessionStorage.getItem("event")))['titles']

    const [events, setEvents] = useState([]) //the event titles say "Tekken 7 | Naruto

    const [event, setEvent] = useState({})
    const [eventTitle, setEventTitle] = useState(undefined)
    const [time, setTime] = useState({ day: "0", hour: "0", minute: "0", second: "0" })

    const [ticket, setTicket] = useState({
        tickets: ticketCheck ? [...(JSON.parse(sessionStorage.getItem("ticket")))] : [{}],
    })

    const [rules, setRules] = useState({
        description: "",
        icon: "",
        bg: ""
    })

    useEffect(() => {

        // token.length > 5 ? onLoadScreen() : null
        onLoadScreen()

        // setInterval(() => {
        //     console.log("cleared")
        // }, 100000)

        return () => {
            console.log("cleared")
        }
        
    
    }, [token, ticket])
 
    const [accept, setAccept] = useState(undefined)
    const [display, setDisplay] = useState({
        rules: true,
        accept: true,
        link: true,
    })

    const { setShowModal } = useModalContext()

    const onLoadScreen = () => {
        const event = JSON.parse(sessionStorage.getItem("event"))
        const { eventTitle="Register" } = !event ? {} : event 

        const checkTickets = JSON.parse(sessionStorage.getItem("ticket"))

        const _tickets = !checkTickets ? [] : checkTickets.filter((val) => val !== null)

        setEvent(event)
        setEventTitle(eventTitle)
        setEvents(_tickets)
    }
    
    const setLoader = ({ description, icon, bg="" }) => {
        
        setRules({
            description,
            icon,
            bg
        })

        setShowModal(true)
    }

    const ruleHandler = () => {
        setLoader({
            description: "Rules Baby",
            icon: "success",
            bg: "#ff00ff"
        })
    }

    const onAccept = (_event) => {

        const { eventTitle, titles, eventID } = _event
        const { tickets } = ticket 

        setAccept(`Your account is now linked to this event ${eventTitle}: ${("user.tag").toUpperCase()}`)
        setDisplay({
            rules: false,
            accept: true,
            link: false
        })


        const ticketCase = tickets.map((item, key) => {
            if(item){
                const { mud, _id } = titles[key]
                return titles[key].mud = mud.concat({ _id, ticketNumber: "00".concat(mud.length+1), regNumber: `000${_id}@`.concat(eventTitle)})
            } else {
                return [{}]
            }
        })

        setEventTitle(eventTitle)
        console.log({ ticketCase })

        Axios.patch(registerPlayer, { eventID, user, ticketCase }).then(response => {
            console.log({ response })
            const { status } = response

            if(status === 201){

                // registerPlayer({ token, user }, setLoader).then(response => {

                //     // const token = sessionStorage.getItem("tokenizer")
                //     // tokenize({ token, profile: _data["profile"] })
                //     // sessionStorage.setItem("tokenizer", null)

                //     return response
                // })

                // setLoader({
                //     description: `${_data.message}`,
                //     icon: "error",
                //     bg: colors.gold
                // })

            }

        }).catch(error => {

            const { message } = error.response ? error.response.data : error
            console.log({ message })

            // setLoader({
            //     description: `${message}`,
            //     icon: "error",
            //     bg: "#ff0000"
            // })
        })

    }

    const onDeny = (event) => {
        setAccept("Thank you for your patience...")
        setDisplay({
            rules: false,
            accept: false,
            link: false
        })
    }

    const radioChange = ({ key, fee }, { target }) => {

        const { checked, value } = target

        checked === true ? 
            ticket.tickets[key] = { titleName: value, fee }
        : 
            ticket.tickets[key] = undefined
        ;


        setTicket({ ...ticket })
        const { tickets } = ticket
        sessionStorage.setItem("ticket", JSON.stringify(tickets))
    }

    const countDown = () => {
        const gap = (new Date("August 28, 2021 00:00:00").getTime()) - (new Date().getTime())


        const _second = 1000
        const _minute = _second * 60
        const _hour = _minute * 60
        const _day = _hour * 24

        const day_ = Math.floor(gap / _day)
        const hour_ = Math.floor(((gap % day_) / _hour))
        const minute_ = Math.floor(((gap % _hour) / _minute))
        const second_ = Math.floor(((gap % _minute) / _second))
        
        const array = [day_, hour_, minute_, second_].map((item) => !(item.toString().length < 2)  ? item : '0'.repeat(1).concat(item))
        const [ day, hour, minute, second ] = array

        setTime({ day, hour, minute, second })

    }
       
    if(user){
        const { firstName="Trevor", lastName="Belmont" } = !user ? {} : user
        return(
            
            <Container>
                <RuleToast description={rules.description.toString()} icon={rules.icon} bg={rules.bg} />
                <Circles>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                </Circles>
                <RegisterHeader>
                    <span>
                        <h2>{!eventTitle ? "Register" : `@${eventTitle.toLowerCase().split(" ").reduce((a, b) => a+b)}`}</h2>
                        <p>Bayelsa, Nigeria.<br /> Offline</p>
                    </span>
                
                    <CountDown onClick={() => setInterval(countDown, 1000)}>
                    <div>
                        <h3 className="time">{`${time.day}:${time.hour}:${time.minute}:${time.second}`}</h3>
                    </div>
                </CountDown>
                </RegisterHeader>
                <Body>
                    <Wrapper>
                        <Paragragh>
                            <h4>{!accept ? "To enter this event, you must agree to the tournament regulations and fees": accept}</h4>
                        </Paragragh>
                        <Rules display={display.rules.toString()} onClick={ ruleHandler }>
                            <ALink to={"/register"} className="link">Tournament Rules</ALink>
                        </Rules>
                        <Accept display={display.accept.toString()}>
                            <AcceptDiv display={display.link.toString()}>
                                <ALink  onClick={onDeny}> Do Not accept</ALink>
                            </AcceptDiv>
                            <ALink onClick={() => onAccept(event)}>{ display.link ? "Accept" : "OK"}</ALink>
                        </Accept>
                        <TitleBody display={display.link.toString()}>
                            <h3>Select title</h3>
                            <div  className="register">
                                {
                                    terra.map (
                                        ({ titleName="Yooo", url, fee="0.00" }, key) => {

                                            const valid = ticket.tickets.find((item) => !item ? false : item.titleName === titleName)
                                            
                                            return (
                                                <div key={key} onChange={(e) => radioChange({ key, fee }, e)}>
                                                    <span>
                                                        <input type={"checkbox"} value={titleName} name={"title"} checked={!!valid} onChange={() => console.log("beta-test")}/>{(titleName).toUpperCase()}
                                                    </span>
                                                    {/* <img src={url} className="bitmap"/> */}
                                                </div>
                                            ) 
                                        }
                                    )   
                                }
                            </div>
                        </TitleBody>
                    </Wrapper>
                </Body>
                <Footer>
                    <Div>
                        <a href={"/tournaments"}>{'< TOURNAMENTS '}</a>
                    </Div>
                    <Div>
                        <div className="registerBox">
                            <div>
                                <Title>Ticket(s)</Title>
                            </div>
                            <div>
                                <NumberBox>{events ? events.length : 0 }</NumberBox>
                            </div>
                            <div>
                                <Title>
                                    ${ 
                                        (String(events ? 
                                            events.length > 1 ?
                                                events.reduce((a, b) => 
                                                    (isNaN(a)) ?
                                                        +a.fee + +b.fee
                                                    :
                                                        +a + +b.fee
                                                )
                                            :
                                                events.map(({ fee }) => (+fee || 0))
                                        : 0
                                        ))
                                    }.00
                                </Title>
                            </div>
                        </div>
                    </Div>
                    <Div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"fill="none">
                                <path d="M8.125 0.9375H1.25C1.07719 0.9375 0.9375 1.07719 0.9375 1.25V8.125C0.9375 8.29781 1.07719 8.4375 1.25 8.4375H8.125C8.29781 8.4375 8.4375 8.29781 8.4375 8.125V1.25C8.4375 1.07719 8.29781 0.9375 8.125 0.9375Z" />
                                <path d="M18.75 0.9375H11.875C11.7022 0.9375 11.5625 1.07719 11.5625 1.25V8.125C11.5625 8.29781 11.7022 8.4375 11.875 8.4375H18.75C18.9228 8.4375 19.0625 8.29781 19.0625 8.125V1.25C19.0625 1.07719 18.9228 0.9375 18.75 0.9375Z" />
                                <path d="M8.125 11.5625H1.25C1.07719 11.5625 0.9375 11.7022 0.9375 11.875V18.75C0.9375 18.9228 1.07719 19.0625 1.25 19.0625H8.125C8.29781 19.0625 8.4375 18.9228 8.4375 18.75V11.875C8.4375 11.7022 8.29781 11.5625 8.125 11.5625Z" />
                                <path d="M18.75 11.5625H11.875C11.7022 11.5625 11.5625 11.7022 11.5625 11.875V18.75C11.5625 18.9228 11.7022 19.0625 11.875 19.0625H18.75C18.9228 19.0625 19.0625 18.9228 19.0625 18.75V11.875C19.0625 11.7022 18.9228 11.5625 18.75 11.5625Z" />
                            </svg>
                        <Paragragh>{`${firstName} ${lastName}`}</Paragragh>
                    </Div>
                </Footer>
            </Container>
        )
    } else {
        return(
            <Container>
                <Circles>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </Circles>
                <RegisterHeader>
                    <h2>Register</h2>
                </RegisterHeader>
                
                <Body>
                    <Wrapper>
                        <Paragragh>
                            <h4>To register for your event please always try to maintain the same login session...</h4>
                        </Paragragh>
                        <Rules display={(display.rules).toString()}>
                            <BLink to={"/login"} className="link">Login</BLink>
                        </Rules>
                    </Wrapper>
                </Body>
                <Footer>
                    <Div>
                        <a href={"/tournaments"}>{'<TOURNAMENTS'}</a>
                    </Div>
                    <Div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"fill="none">
                            <path d="M8.125 0.9375H1.25C1.07719 0.9375 0.9375 1.07719 0.9375 1.25V8.125C0.9375 8.29781 1.07719 8.4375 1.25 8.4375H8.125C8.29781 8.4375 8.4375 8.29781 8.4375 8.125V1.25C8.4375 1.07719 8.29781 0.9375 8.125 0.9375Z" />
                            <path d="M18.75 0.9375H11.875C11.7022 0.9375 11.5625 1.07719 11.5625 1.25V8.125C11.5625 8.29781 11.7022 8.4375 11.875 8.4375H18.75C18.9228 8.4375 19.0625 8.29781 19.0625 8.125V1.25C19.0625 1.07719 18.9228 0.9375 18.75 0.9375Z" />
                            <path d="M8.125 11.5625H1.25C1.07719 11.5625 0.9375 11.7022 0.9375 11.875V18.75C0.9375 18.9228 1.07719 19.0625 1.25 19.0625H8.125C8.29781 19.0625 8.4375 18.9228 8.4375 18.75V11.875C8.4375 11.7022 8.29781 11.5625 8.125 11.5625Z" />
                            <path d="M18.75 11.5625H11.875C11.7022 11.5625 11.5625 11.7022 11.5625 11.875V18.75C11.5625 18.9228 11.7022 19.0625 11.875 19.0625H18.75C18.9228 19.0625 19.0625 18.9228 19.0625 18.75V11.875C19.0625 11.7022 18.9228 11.5625 18.75 11.5625Z" />
                        </svg>
                    </Div>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.platform
})

export default connect(mapStateToProps)(Register)