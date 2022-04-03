import React, { useState } from "react"

import {
    Container, Grid, Paragraph, 
    Title, EditContainer
} from "./style"

export const Overview = ({ setEdit }) => {

    const {
        eventID, eventTitle
    } = event

    return(
        <Container>
            <EditContainer>
            </EditContainer>
            <Grid>
                <Paragraph>Event ID</Paragraph>
                <Title>{ eventID || "null" }</Title>
            </Grid>
            <Grid>
                <Paragraph>Event Description</Paragraph>
                <Title>{ eventDescription || "null" }</Title>
            </Grid>
            <Grid>
                <Paragraph>Event Title</Paragraph>
                <Title>{ eventTitle || "null" }</Title>
            </Grid>
            <Grid>
                <Paragraph>Event Pot</Paragraph>
                <Title>{ eventPot || "null" }</Title>
            </Grid>
            <Grid>
                <Paragraph>Event Sponsors</Paragraph>
                <Title>{ eventSponsors || "null" }</Title>
            </Grid>
        </Container>
    )
}