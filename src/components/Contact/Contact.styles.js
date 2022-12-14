import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import mexicanStuff from '../../assets/mexican-sfuff.png';
import mexicanPatternBlue from '../../assets/mexican-pattern__blue.jpg';
import mexicanPatternYellow from '../../assets/mexican-pattern.jpg';
import mexicanPatternPurple from '../../assets/mexican-pattern__purple.jpg';
import mexicanPatternInstagram from '../../assets/mexican-pattern__instagram.jpg';

export const MainPageContainer = styled(motion.section)`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    margin-top: 60px;
    padding: 0 20px;
    background-image: url(${mexicanStuff});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'League Spartan', sans-serif;

    @media (min-width: 1200px) { padding: 0; }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    background-color: rgba(255,255,255,0.6);
    border-radius: 15px;
    -webkit-box-shadow: -8px 9px 20px -11px rgba(66, 68, 90, 1);
    -moz-box-shadow: -8px 9px 20px -11px rgba(66, 68, 90, 1);
    box-shadow: -8px 9px 20px -11px rgba(66, 68, 90, 1);
    animation: wiggle 2s linear;
    overflow: hidden;
    
    @keyframes wiggle {
        0%, 7% { transform: rotateZ(0); }
        15% { transform: rotateZ(-15deg); }
        20% { transform: rotateZ(10deg); }
        25% { transform: rotateZ(-10deg); }
        30% { transform: rotateZ(6deg); }
        35% { transform: rotateZ(-4deg); }
        40%, 100% { transform: rotateZ(0); }
      }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 200px;
        grid-column-gap: 20px;
        max-width: 1200px; 
        box-shadow: none;
        animation: none;
        overflow: initial;
    }
`;

export const ContactOptionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;
    border-left: none;
    border-right: none;
    
    a {
        text-decoration: none;
        color: #000;
    }

    &:nth-child(3)::before {
        content: '';
        position: absolute;
        margin-left: 1px;
        border-radius: 50%;
        background-color: #fff;
        width: 2.8rem;
        height: 2.8rem;
    }

    &:nth-child(1), &:nth-child(4) {
        border-top: none;
        border-bottom: none;
    }

    &:nth-child(2) { border-bottom: none; }

    &:nth-child(1) { background-image: url(${mexicanPatternPurple}); }
    &:nth-child(2) { background-image: url(${mexicanPatternBlue}); }
    &:nth-child(3) { background-image: url(${mexicanPatternYellow}); }
    &:nth-child(4) { background-image: url(${mexicanPatternInstagram}); }

    @media (min-width: 1200px) {
        justify-content: space-evenly;
        border: none;
        border: 1px solid #c4c4c4;
        transition: all 0.5s ease;
        animation-name: slam;
        animation-duration: 0.5s;

        &:hover {
            transform: scale(1.1);
            background-color: #fff;
        }

        &:nth-child(1), &:nth-child(4) {
            border-top: 1px solid #c4c4c4;
            border-bottom: 1px solid #c4c4c4;
        }

        &:nth-child(3)::before { display: none; }
    
        &:nth-child(2) { border-bottom: 1px solid #c4c4c4; }

        &:nth-child(1) { background-image: none; }
        &:nth-child(2) { background-image: none; }
        &:nth-child(3) { background-image: none; }
        &:nth-child(4) { background-image: none; }

        @keyframes slam {
            10% { transform: scale(4); }
            20% { transform: scale(3.5); }
            30% { transform: scale(3);}
            40% { transform: scale(2.5); }
            50% { transform: scale(2); }
            60% { transform: scale(1.5); }
            70% { transform: scale(1); }
            80% { transform: scale(1.2); }
            90% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    }
`;

export const H1 = styled.h1`
    font-size: 1.7rem;
    text-align: center;
`;

export const FacebookIcon = styled(FontAwesomeIcon)`
    color: 	#4267B2;
    font-size: 3rem;
    position: relative;
    font-weight: 300;
`;

export const InstagramIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 3rem;

    @media (min-width: 1200px) { color: #000; }
`;

export const MobileIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 2.7rem;

    @media (min-width: 1200px) { color: #000; }
`;

export const EmailIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 2.7rem;

    @media (min-width: 1200px) { color: #000; }
`;

export const Text = styled.span`
    font-size: 1.3rem;
    text-align: right;
    color: #fff;

    a { color: #fff; }

    @media (min-width: 1200px) {
        color: #000;

        a { color: #000; }
    }
`;