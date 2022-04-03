import React from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { FaMoneyBill, FaUser, FaLocationArrow, 
    FaBookmark, FaCalendarDay
} from "react-icons/fa"
import { CardBody, CardImg, Cards } from "./style"

export const Card = (props) => {
    
    const { 
        title: eventName, prize: eventPot,
        location: eventLocation,
        date: eventDate, impressions,
        _id: id, eventBody
    } = props 

    const history = useHistory()

    // const eventProps = [
    //     eventName, eventPot, eventType, eventLocation,
    //     eventVenue, eventDate, contactMail, contactPhone,
    // ]

    const _eventProps = [
        {value: eventName, icon: <FaBookmark /> },  
        {value: eventPot, icon: <FaMoneyBill /> }, 
        {value: eventLocation, icon: <FaLocationArrow />},
        {value: eventDate, icon: <FaCalendarDay /> },
    ]


    const clickHandler = () => {
        sessionStorage.setItem("event", JSON.stringify({ ...eventBody, id }))
        history.push("/register")                                                                                        
    }
    
    return(
        <Cards>
            <CardImg className="image">
                { /* <img src={Img} alt="event__card"/> */ }
            </CardImg>
            <CardBody>
                {
                    _eventProps.map((prop, key) =>
                        (!!prop.value) ?
                            <div key={key}>
                                <>{prop.icon}</>
                                {(new Date(prop).toString().toLowerCase().split('').includes('invalid')) ? 
                                    prop.value
                                : 
                                    key !== 5 ? prop.value : ((date) => new Date(date).toDateString())(prop.value) 
                                }
                        
                            </div> 
                        :  ""
                    )
                }
                <button className="button" onClick={clickHandler}>
                    <span>
                        <FaUser />
                        {impressions}
                    </span>
                    {"Explore Event"}
                </button>
            </CardBody>
        </ Cards>
    )
}

const mapStateToProps = (state) => ({
    ...state.platform
})

export default connect(mapStateToProps)(Card)