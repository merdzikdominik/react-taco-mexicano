import styled from "styled-components";
import mexicanPatternRed from '../../assets/mexican-pattern__red.jpg';

const MainContainer = styled.div`
    width: 100%;
    padding: 50px 20px;
    color: #fff;
    background-image: url(${mexicanPatternRed});
    overflow: hidden !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    font-size: 1.2rem;
    animation: bounce 1s linear;
    animation-delay: ${props => props.delay}s;
    animation-fill-mode: backwards;

    @keyframes bounce {
        0% { top: -120px; left: -550px; }
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

    @media (min-width: 1200px) {
        border-radius: 15px;
        -webkit-animation: fly .8s ease-in-out forwards;
        animation: drop .8s ease-in-out forwards;
        animation-delay: ${props => props.delay}s;
        animation-fill-mode: backwards;

        &:last-child:nth-child(3n - 2) { grid-column-end: 3; }

        @keyframes drop {
            0% {transform: translateY(-200px) scaleY(0.9); opacity: 0;}
            5% {opacity: .7;}
            50% {transform: translateY(0px) scaleY(1); opacity: 1;}
            65% {transform: translateY(-17px) scaleY(.9); opacity: 1;}
            75% {transform: translateY(-22px) scaleY(.9); opacity: 1;}
            100% {transform: translateY(0px) scaleY(1); opacity: 1;}
          }
    }
`;

export default function OpenHoursOption({ day, time, delay }) {
    
    return (
        <MainContainer delay={delay}>
          <span>{day}</span>
          <span>{time}</span>
        </MainContainer>
    );
}