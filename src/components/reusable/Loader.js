import styled from "styled-components";
import tacoLoader from '../../assets/loading_taco.png';

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Taco = styled.div`
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

const LoadingText = styled.span`
    font-size: 25px;
    font-family: 'League Spartan', sans-serif;
`;

export default function Loader() {
    return (
        <LoaderContainer>
            <Taco/>
            <LoadingText>Ładowanie... Proszę czekać</LoadingText>
        </LoaderContainer>
    );
}