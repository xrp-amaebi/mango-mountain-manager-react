import { signup, getParticipants } from '../routes/backend'


export const patch = ({ token, data }) => {

    const headers = new Headers()
    headers.append("Authorization", token)
    headers.append("Content-Type", "application/json")

    const config = {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers 
    }

    fetch(signup, config)
        .then(response => response.json())
        .then( result =>  console.log({
            line: "line 19, patch.js",
            result,
            data
        })).catch( error => console.log({ 
            error,
            data
        }))

    ;
}

// export const pullParticipants = () => {

//     const config = {
//         headers: {
//             "Content-Type": 'application/json',
//             method: "GET",
//             body: JSON.stringify({
//                 title: 0
//             })
//         }
//     }

//     const fetched = fetch(getParticipants, config).then(res => {
//         return res.json()
//     })
//     console.log({ fetched })

//     return fetched.then(({ collection }) => ({

//         collection

//     })).catch(error => {
//         console.log({
//             error: error.message,
//             status: "fail"
//         })
//     })
// }

export const pullParticipants = ({ token="" }) => {

    const config = {
        body: JSON.stringify({data: "I am data" }),
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    
    const fetched = fetch(getParticipants, config).then(res => {
        console.log({res})
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