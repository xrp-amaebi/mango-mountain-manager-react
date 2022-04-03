import React, { useState, useEffect } from "react"

import {
    Container, Grid, Paragraph, ProfileList
} from "./style"

// import { pullParticipants } from "../../../../utils/patch"

export const Participants = () => {
    
    const [participants, setParticipants] = useState()

    const pullParticipants = () => {

        const item = sessionStorage.getItem("event0")
        console.log({ item })
        return [item]

    }

    const onLoadScreen = (event) => {


        const profile = pullParticipants()
        const collection = JSON.parse(profile)
        console.log({ collection })
        !profile ? setParticipants([]) : setParticipants(collection)

        // profile.then(response => {
        //     const { collection } = response || {}

        //     !collection ? setParticipants([]) : setParticipants(collection) //!important
        // })
    }
    
    useEffect(() => {

        onLoadScreen()

        return () => {
            console.log("cleared")
        }
    
    })

    return(
        <Container>
            <Paragraph>{`Participants: ${participants ? participants.length : "<Loading>" }`}</Paragraph>
            <Grid>           
                {
                    participants ? participants.map(({ tag, sponsor, id, firstName, lastName }, key) => (
                            <ProfileList key={key}>
                                <section>
                                    { id ? key += 1 : "N/A" }
                                </section>
                                <section>
                                    <div className="circle">
                                        <img src={"/img-prop/passports/sonicFox.WEBP"} alt={'participant'} width="50px"/>
                                    </div>
                                </section>
                                <section>
                                    <Paragraph>{` ${firstName}  ${tag.toUpperCase()}  ${lastName}`}</Paragraph>
                                </section>
                                <section>
                                    <Paragraph>{sponsor ? sponsor : "free"}</Paragraph>
                                </section>
                                <section>
                                    {/* <Title>{participants ? participants: "null"}</Title> */}
                                </section>
                            </ProfileList>
                        )
                    ) : ""
                }
            </Grid>
        </Container>
    )
}