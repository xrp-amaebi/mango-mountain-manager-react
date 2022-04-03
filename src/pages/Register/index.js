import  { Container } from "./style"
import { useEventContext } from "../../Global/Event"


export const Register = () => {
    const { events } = useEventContext()

    return(
        <Container>
            Do Nothing...{ console.log({ events })}
        </Container>
    )
}