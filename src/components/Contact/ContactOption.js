import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-color: purple;
    display: flex;
    flex-direction: column;
`;

export default function ContactOption({ title, description }) {
    
    return (
        <MainContainer>
            <span>{title}</span>
            <span>{description}</span>
        </MainContainer>
    );
}