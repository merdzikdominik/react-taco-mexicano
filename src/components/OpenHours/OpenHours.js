import styled from "styled-components";
import { OPEN_HOURS_POSITIONS } from "../../constants";
import OpenHoursOption from "./OpenHoursOption";
import mexicanStuff from '../../assets/mexican-sfuff.png';
// import { motion } from 'framer-motion';

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    // padding-top: 60px;
    // background-color: red;
    background-image: url(${mexicanStuff});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DayContainer = styled.div`
    max-width: 500px;
    width: 100%;
    // background-color: green;
    border-radius: 15px;
    overflow: auto;
`;

const H1 = styled.h1`
    font-size: 1.7rem;
    text-align: center;
`;

export default function OpenHours() {
    return (
        <MainContainer>
            <H1>Kiedy jesteśmy otwarci?</H1>
            <DayContainer>
                {OPEN_HOURS_POSITIONS.map(day => <OpenHoursOption key={day.id} day={day.day} time={day.time} delay={day.delay}/>)}
            </DayContainer>
        </MainContainer>
    );
}