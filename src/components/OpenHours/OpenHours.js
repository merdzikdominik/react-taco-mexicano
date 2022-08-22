import styled from "styled-components";
import { OPEN_HOURS_POSITIONS } from "../../constants";
import OpenHoursOption from "./OpenHoursOption";

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    background-color: red;
    display: flex;
    flex-direction: column;
`;

export default function OpenHours() {
    return (
        <MainContainer>
            {OPEN_HOURS_POSITIONS.map(day => <OpenHoursOption key={day.id} day={day.day} time={day.time}/>)}
        </MainContainer>
    );
}