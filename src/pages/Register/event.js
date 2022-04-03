import { getEvent, getEvents } from '../../routes/backend'

export const pullEvent = ({ token }, data) => {
    console.log({ json: JSON.stringify(data) })

    const config = {
        headers: {
            method: "POST",
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`,
            body: JSON.stringify(data) 
        }
    }
    
    const fetched = fetch(getEvents, config).then(res => {
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

export const eventTitles = [
    {
        value: "Street Fighter",
        checked: false,
        url: `/img/sfv.png`,
        fee: "2000.00",
    }, {
        value: "TEKKEN 7",
        checked: false,
        url: `img/tekken.png`,
        fee: "1500.00"
    },
    {
        value: "Call Of Duty Mobile",
        checked: false,
        url: `img/codm.png`,
        fee: "1000.00"
    }
]
