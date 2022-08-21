import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    height: 100vh;
    background-color: red;
    // margin-top: 60px;
    
    padding-top: 60px;

    .total-price__container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;

export default function Cart() {
    const dishes = useSelector(state => state.dishes);
    const totalPrice = useSelector(state => state.totalPrice);
    return (
        <CartContainer>
            {dishes.map(item => <CartItem key={item.id} id={item.id} dish={item.dish} price={item.price} amount={item.amount}></CartItem>)}
            <div className='total-price__container'>
                <span>Suma</span>
                <span>{totalPrice}</span>
            </div>
            {/* TODO: implement payments */}
        </CartContainer>
    );
}