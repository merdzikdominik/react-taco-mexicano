import { motion } from 'framer-motion';
import styled from 'styled-components';
import mexicanPattern from '../../assets/mexican-pattern.jpg';
import mariaczips from '../../assets/mariaczi_the_fastest.gif';
import mexicanStuff from '../../assets/mexican-sfuff.png';

export const MainPageContainer = styled(motion.section)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${mexicanStuff});
`;

export const CartContainer = styled.div`
    padding: 60px 0;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 1200px) {
        flex-direction: row-reverse;
        padding: 30px;
        align-items: initial;
        justify-content: initial;
        border-radius: 15px;
        gap: 0;
        display: ${props => props.showCartContainer ? 'flex' : 'none'};
    }
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 20px;
    background-image: url(${props => props.ordersExist ? mexicanPattern : ''});
    border-radius: 20px;
    -webkit-box-shadow: ${props => props.ordersExist ? '-7px 8px 17px -9px rgba(66, 68, 90, 1);' : ''}
    -moz-box-shadow: ${props => props.ordersExist ? '-7px 8px 17px -9px rgba(66, 68, 90, 1);' : ''}
    box-shadow: ${props => props.ordersExist ? '-7px 8px 17px -9px rgba(66, 68, 90, 1);' : ''}
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const MakeOrderContainer = styled.div`
    width: 90%;
    display: ${props => props.showOrdersContainer ? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #eee;
    border-radius: 15px;
    font-family: 'League Spartan', sans-serif;

    @media (min-width: 1200px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }
`;

export const PaymentHeader = styled.span`
    font-size: 1.6rem;
`;

export const Payment = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
`;

export const Mariachis = styled.div`
    background-image: url(${mariaczips});
    width: 600px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;
    display: none;

    @media (min-width: 1200px) {
        display: ${props => props.showMariachi ? 'block' : 'none'};
        animation-name: bump;
        animation-duration: 0.3s;

        @keyframes bump {
            0% { transform: scale(0.9); }
            25% { transform: scale(1.2); }
            50% { transform: scale(1.5); }
            75% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    }
`;

export const Button = styled.button`
    width: 120px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: #FAB200;
    font-size: 1.2rem;
    color: #fff;

    &:hover {
        animation-name: shake;
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
`;

export const NoOrdersInCartH1 = styled.h1`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 30px;
`;