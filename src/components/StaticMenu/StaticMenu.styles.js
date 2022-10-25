import { motion } from 'framer-motion';
import styled from "styled-components";
import mexicanStuff from '../../assets/mexican-sfuff.png';

export const MainPageContainer = styled(motion.section)`
    width: 100%;
    margin-top: 60px;
    background-image: url(${mexicanStuff});

    @media (min-width: 1200px) {
        min-height: 100vh;
        padding: 20px 0;
    }
`;

export const DishesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: auto;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        overflow: auto;
        padding: 0 15px;
    }
`;