import { getAllPosts } from '../../routes/backend'


export const events = [{
    eventUrl: "mamgomountain.com/events/38368937299/03924948770233920",
    imgUrl: "/img/carousel/9.jpg",
    eventName: "EVO CHAMPIONSIP SERIES",
    eventId: "38368937299",
    eventType: "offline",
    eventLocation: ["Massachussets, USA"],
    eventVenue: "Oxygen Arena Grand Place",
    eventDate: "16/08/2025 - 20/08/2025",
    contactMail: ["evo@supportmail.com"],
    contactPhone: ["+(555) - 231-460"]
},
{
    eventUrl: "mamgomountain.com/events/38368937299/03924948770233920",
    imgUrl: "/img/carousel/6.jpg",
    eventName: "DREAMHACK GLOBAL CUP",
    eventId: "38368937299",
    eventType: "online",
    eventLocation: ["Europe", "Asia", "North America"],
    eventVenue: "Oxygen Arena Grand Place",
    eventDate: "16/08/2025 - 20/08/2025",
    contactMail: ['dreamhack@supportmail.com'],
    contactPhone: ["+(555) - 555-315"]
},
{
    eventUrl: "mamgomountain.com/events/38368937299/03924948770233920",
    imgUrl: "/img/carousel/6.jpg",
    eventName: "DREAMHACK GLOBAL CUP",
    eventId: "38368937299",
    eventType: "online",
    eventLocation: ["Europe", "Asia", "North America"],
    eventVenue: "Oxygen Arena Grand Place",
    eventDate: "16/08/2025 - 20/08/2025",
    contactMail: ['dreamhack@supportmail.com'],
    contactPhone: ["+(555) - 555-315"]
}]

export const pullEvents = ({ token="" }) => {

    const config = {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    
    const fetched = fetch(getAllPosts, config).then(res => {
        return res.json()
    })

    return fetched && fetched.then(({ collection }) => ({
        collection: !collection ? events : collection
    })).catch(error => {

        console.log({
            error: error.message,
            status: "fail"
        })
    })
}

