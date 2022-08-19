import styled from 'styled-components';
// import { useSelector } from 'react-redux';

const CartContainer = styled.div`
    width: 90%;
    height: 500px;
    background-color: red;
    position: absolute;
    left: 0;
    right: 0;
    top: 150px;
    margin: 0 auto;

    @media (min-width: 1200px) {
        top: 80px;
        width: 700px;
    }
`;

export default function Cart() {

    return (
        <CartContainer>
            asd
        </CartContainer>
    );
}