import styled from "styled-components";
import { motion } from 'framer-motion';

const MainContainer = styled.div`
    width: 100%;
    padding: 50px 20px;
    background-color: purple;
    display: flex;
    justify-content: space-between;
    position: relative;
    animation-name: appear;
    animation-delay: ${props => props.delay}s;
    animation-duration: 1s;
    animation-fill-mode: backwards;
    // overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }

    @keyframes appear {
        &::-webkit-scrollbar-corner {
            display: none;
        }

        0% {
            // transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
            left: -500px;
            right: 0;
        }

        100% {
            // transform: rotateZ(-2deg) translateY(-14rem) translateX(-2rem);
            left: 0;
            right: 0;
        }
    }

    //bouncing element animation
    // @keyframes anim {
    //     0% {
    //       top: -20px;
    //       left: -20px;
    //       /* transform: rotate3d(1, 0, 0, 75deg); */
    //     }
        
    //     10% {
    //       top: 0;
    //       left: 0;
    //     }
        
    //     20% {
    //       top: 20px;
    //       left: 20px;
    //       /* transform: rotate3d(1, 0, 0, 35deg); */
    //     }
        
    //     30% {
    //       top: 5px;
    //       left: 30px;
    //     }
        
    //     40% {
    //       top: 15px;
    //       left: 40px;
    //     }
        
    //     50% {
    //       top: 10px;
    //       left: 50px;
    //       /* transform: rotate3d(1, 0, 0, 55deg); */
    //     }
        
    //     60% {
    //       top: 20px;
    //       left: 60px;
    //     }
        
    //     70% {
    //       top: 15px;
    //       left: 70px;
    //       /* transform: rotate3d(1, 0, 0, 35deg); */
    //     }
        
    //     80% {
    //       top: 25px;
    //       left: 80px;
    //     }
        
    //     90% {
    //       top: 30px;
    //       left: 90px;
    //     }
        
    //     100% {
    //       top: 25px;
    //       left: 100px;
    //       /* transform: rotate3d(0, 0, 0, 0); */
    //     }
    //   }
`;

export default function OpenHoursOption({ day, time, delay }) {
    
    return (
        <MainContainer delay={delay}>
            <span>{day}</span>
            <span>{time}</span>
        </MainContainer>
    );
}