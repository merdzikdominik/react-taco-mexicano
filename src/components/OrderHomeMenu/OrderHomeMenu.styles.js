import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mexicanPatternGreen from '../../assets/mexican-pattern__green.jpg';
import mexicanStuff from '../../assets/mexican-sfuff.png';
import styled from 'styled-components';

export const MainPageContainer = styled(motion.section)`
    background-image: url(${mexicanStuff});
    width: 100%;
    padding: 0 10px;
    min-height: 100vh !important; 
    overflow: auto;

    @media (min-width: 1200px) { padding: 0; }
`;

export const MenuContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    margin: 140px auto;
    gap: 2px;
    border-radius: 20px;
    background-image: url(${mexicanPatternGreen});
    position: relative;
    z-index: 3;
    -webkit-box-shadow: -7px 4px 24px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: -7px 4px 24px -12px rgba(66, 68, 90, 1);
    box-shadow: -7px 4px 24px -12px rgba(66, 68, 90, 1);

    @media (min-width: 1200px) { max-width: 800px; }
`;

export const MenuHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media (min-width: 1200px) {
        justify-content: space-between;
        flex-direction: row-reverse;
    }
`;

export const H1 = styled.h1`
    font-family: 'League Spartan', sans-serif;
    font-size: 30px;
    text-align: center;
    padding: 0 50px;
    margin: 0;
    color: #fff;
    
    @media (min-width: 1200px) { text-align: right; }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
    color: #000;
    background-color: #fff;
    align-items: center;
    padding: 9px;
`;

export const Filter = styled.div`
    display: flex;
    padding: 0 50px;
`;