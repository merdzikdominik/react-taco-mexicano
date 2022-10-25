import styled from "styled-components";
import tacoLoader from '../../assets/loading_taco.png';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Taco = styled.div`
    width: 316px;
    height: 205px;
    background-image: url(${tacoLoader});
    animation: pulsing 0.5s linear infinite;
    
    @keyframes pulsing {
        0% { transform: scale(1); }
        50% { transform: scale(0.6); }
        100% { transform: scale(1); }
    }
`;

export const LoadingText = styled.span`
    font-size: 25px;
    font-family: 'League Spartan', sans-serif;
`;
