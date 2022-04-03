import React, { createContext, useContext, useEffect, useState } from "react"
import { getProfile, byAuth } from "../../routes/backend"
import axios from 'axios'
import { useTokenContext } from "../Token/TokenContext"

const UserContext = createContext()

export default function UserContextProvider({ children }) {

  const { token } = useTokenContext()

  const [user, setUser] = useState({})
  // const [isStorage, setIsStorage] = useState(false)

  async function fetchProfile(email){

    const result = axios.create({
      baseURL: `${getProfile}${email}`
    })

    console.log({ token })

    result.defaults.headers.common["Authorization"] = token

    await result.get().then(response => {
      const { data } = response // { status, data } = response
      return data
    }).catch(error => console.log("error caught in fetching profile", error.message))
    
    if(!result){
      return
    }

    sessionStorage.setItem("session", JSON.stringify(result))
    return result

  }


  useEffect(() => {
    (async function(){
      const getSession = sessionStorage.getItem("session")
      if(!getSession){
        return 
      }
      const valid = JSON.parse(getSession)

      const instance = axios.create({
        baseURL: byAuth
      })

      instance.defaults.headers.common["Authorization"] = token

      await instance.get().then(response => {
        const { status } = response
        
        if(status === 200){
          setUser(valid)
          return
        }
        setUser({})
      })    
    })()

  })

  return (
    <UserContext.Provider value={{ user, setUser, fetchProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)