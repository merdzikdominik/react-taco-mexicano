import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = styled.div`
    width: 90%;
    height: 500px;
    background-color: #fff;
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
    const state = useSelector(state => state.dishes);

    console.log(state)
    return (
        <CartContainer>
            {state.map(item => <CartItem key={item.id} dish={item.dish} price={item.price} amount={item.amount}></CartItem>)}
        </CartContainer>
    );
}