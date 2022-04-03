// const url = `http://mangomountain.herokuapp.com/`
const url = `http://localhost:6100/`
const anchor = `api/`

export const signup = `${url}${anchor}origin.create`
export const getProfile = `${url}${anchor}users/`
// export const login = `${url}${anchor}origin.login`
export const login = `${url}${anchor}sessions`
export const registerPlayer = `${url}${anchor}origin/event/addplayer`
export const getEvents = `${url}${anchor}event/getEvents`
export const getAllEvents = `${url}${anchor}events`
export const getAllPosts = `${url}${anchor}posts`
export const getEvent = `${url}${anchor}event/findEvent`

//Authentication route
export const byAuth = `${url}${anchor}authcheck`

// ooooh scary territory dial-up the event id 
export const getParticipants = `${url}${anchor}origin/event/D0XRPV85HI8-13208135646/getPlayers` //!important