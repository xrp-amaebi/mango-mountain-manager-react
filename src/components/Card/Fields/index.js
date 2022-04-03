import React from 'react'

import { Fields, Container, Links } from "./style"

export const Field = ({ name, link }) => (
    <Container>
        <Fields>
            <Links to={link}>{name}</Links>
        </Fields>
    </Container>
)