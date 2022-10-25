import styled from 'styled-components';
import mexicanStuff from '../../assets/mexican-sfuff.png';

export const MainPageContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-image: url(${mexicanStuff});
`;

export const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 500px;
    background-color: green;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    animation: slam 0.5s ease-in;
    -webkit-box-shadow: -2px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: -2px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: -2px 8px 24px 0px rgba(66, 68, 90, 1);

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
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 15px;
`;

export const PersonalDataHeader = styled.h3`
    color: #fff;
    text-align: center;
`;