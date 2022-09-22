import styled from "styled-components";
// import mexicanPatternBlue from '../../assets/mexican-pattern__blue.jpg';
// import mexicanPatternYellow from '../../assets/mexican-pattern.jpg';
import mexicanPatternRed from '../../assets/mexican-pattern__red.jpg';
// import mexicanPatternInstagram from '../../assets/mexican-pattern__instagram.jpg';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
    width: 100%;
    padding: 50px 20px;
    color: #fff;
    background-image: url(${mexicanPatternRed});
    // background-color: #BBBABA;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    font-size: 1.2rem;
    animation: bounce 1s linear;
    animation-delay: ${props => props.delay}s;
    animation-fill-mode: backwards;

    // &::after {
    //   content: '';
    //   position: absolute;
    //   width: 200%;
    //   height: 100%;
    //   top: 30px;
    //   left: -10px;
    //   background-color: #fff;
    //   transform: rotateZ(-10deg);
    //   overflow: hidden;
    // }

    // &:nth-child(odd) {
    //   color: #000;
    //   background-color: #fff;
    // }

    @keyframes bounce {
        0% { top: -120px; left: -500px; }
        10% { top: 0; left: 0; }
        20% { top: 20px; left: 20px; }
        30% { top: 5px; left: 30px; }
        40% { top: 15px; left: 40px; }
        50% { top: 10px; left: 50px; }
        60% { top: 15px; left: 40px; }
        70% { top: 5px; left: 30px; }
        80% { top: 10px; left: 20px; }
        90% { top: 5px; left: 10px; }
        100% { top: 0; left: 0; }
    }
`;

// const Day = styled.span`
//     position: relative;
//     color: #fff;
//     z-index: 10;
// `;

// const Time = styled(Day)`
//     color: #000;
// `;

export default function OpenHoursOption({ day, time, delay }) {
    
    return (
        <MainContainer delay={delay}>
          <span>{day}</span>
          <span>{time}</span>
        </MainContainer>
    );
}