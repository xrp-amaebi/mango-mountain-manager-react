import { createContext, useContext, useState, useEffect } from "react"
import { pullEvents } from "./event"


const EventContext = createContext()

export default function EventContextProvider({ children }) {
  const [showEvent, setShowEvent] = useState(false)
  
  const [events, setEvents] = useState([])

  const onLoadScreen = () => {

    const profile = pullEvents({})

    profile.then(response => {
      const { collection } = !response ? {} : response

      setEvents(collection) //!important
    })
  }

  useEffect(() => {

    onLoadScreen()

    return () => {
      console.log("cleared")
    }
  })

  return (
    <EventContext.Provider value={{ showEvent, setShowEvent, events }}>
      {children}
    </EventContext.Provider>
  )
}

export const useEventContext = () => useContext(EventContext)