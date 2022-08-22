import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    padding: 20px;
    background-color: purple;
    display: flex;
    // flex-direction: column;
`;

export default function OpenHoursOption({ day, time }) {
    
    return (
        <MainContainer>
            <span>{day}</span>
            <span>{time}</span>
        </MainContainer>
    );
}