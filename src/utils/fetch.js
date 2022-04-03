import { getProfile, getEvents } from '../routes/backend'
import { colors } from "../styles/utils/colors"

export const pull = ({ token }, setLoader, setToken) => {

    setToken(token)

    const config = {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    
    const fetched = fetch(getProfile, config).then(res => res.json())

    sessionStorage.setItem("tokenizer", token)

    return fetched.then(({ user }) => ({
        user
    })).catch(error => {
        console.log({
            error: error.message,
            status: "fail"
        })

        setLoader({
            description: `${error.message}`,
            icon: "error",
            bg: colors.sky
        })
    })
}

export const registerPlayer = ({ token }, setLoader) => {

    const config = {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    
    const fetched = fetch(getProfile, config).then(res => res.json())

    return fetched.then(({ user }) => ({
        user
    })).catch(error => {
        console.log({
            error: error.message,
            status: "fail"
        })

        setLoader({
            description: `${error.message}`,
            icon: "error",
            bg: colors.sky
        })
    })
}

export const pullEvents = ({ token }) => {

    const config = {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    
    const fetched = fetch(getEvents, config).then(res => {
        console.log({ res })
        return res.json()
    })

    return fetched.then(({ collection }) => ({
        collection
    })).catch(error => {

        console.log({
            error: error.message,
            status: "fail"
        })
        
    })
}