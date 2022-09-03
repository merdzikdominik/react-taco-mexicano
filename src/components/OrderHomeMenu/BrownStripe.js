import styled from 'styled-components';

const Stripe = styled.div`
    width: 140%;
    height: 40vh;
    background-color: brown;
    transform: rotateZ(-3deg) translateY(-15rem) translateX(0);
    position: absolute;
    z-index: 1;
    top: -10px;
    left: -30px;
`;

export default function BrownStripe() {
    return (
        <Stripe/>
    );
}