import { motion } from 'framer-motion';
import styled from "styled-components";
import mexicanStuff from '../../assets/mexican-sfuff.png';

export const MainPageContainer = styled(motion.section)`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    padding: 30px 20px;
    background-image: url(${mexicanStuff});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) { padding: 30px 0; }
`;

export const DayContainer = styled.div`
    max-width: 500px;
    width: 100%;
    border-radius: 15px;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        display: block;
        width: 30px;
        height: 100%;
        position: absolute;
        top: -220px;
        left: 0;
        background-color: #FFF;
        opacity: 0;
        transform: rotate(45deg);
        animation: reflect 2s ease-in-out;
        animation-delay: 1s !important;
        -webkit-transform: rotate(45deg);
        -webkit-animation: reflect 2s ease-in-out;
      }

      @keyframes reflect {
        0% { transform: scale(0) rotate(45deg); opacity: 0; }
        80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
        81% { transform: scale(4) rotate(45deg); opacity: 1; }
        100% { transform: scale(50) rotate(45deg); opacity: 0; }
      }
      @-webkit-keyframes reflect {
        0% { transform: scale(0) rotate(45deg); opacity: 0; }
        80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
        81% { transform: scale(4) rotate(45deg); opacity: 1; }
        100% { transform: scale(50) rotate(45deg); opacity: 0; }
      }

    &::-webkit-scrollbar { display: none !important; }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 200px;
        grid-gap: 20px;
        max-width: 1200px; 
        animation: none;
        overflow: initial;

        &::after { animation: none; display: none; }
    }
`;

export const H1 = styled.h1`
    font-size: 1.7rem;
    text-align: center;
`;