import styled from "styled-components";
import { CONTACT_POSITIONS } from "../../constants";
import ContactOption from "./ContactOption";

const ContactContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 500px;
    height: 800px;
    background-color: green;
`;

// const ContactOption = styled.div`
//     width: 100%;
//     padding: 20px;
//     background-color: purple;
// `;

export default function Contact() {
    return (
        <ContactContainer>
            <Container>
                {CONTACT_POSITIONS.map(contact => <ContactOption key={contact.id} title={contact.title} description={contact.description} />)}
            </Container>
        </ContactContainer>
    );
}