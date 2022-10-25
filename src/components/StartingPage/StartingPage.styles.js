import { motion } from 'framer-motion';
import styled from 'styled-components'

export const MainPageContainer = styled(motion.section)`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #F3F3F3;
    font-family: 'League Spartan', sans-serif;
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    line-height: 30px;

    @media (min-width: 1200px) { flex-direction: row; }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) { flex-direction: row; }
`;

export const StyledImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    background-size: cover !important;

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
    }
`;

export const Text = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.4rem;

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
        font-size: 1.6rem;
    }
`;

export const H1 = styled.h1`
    text-align: center;
    padding: 20px 0;
`