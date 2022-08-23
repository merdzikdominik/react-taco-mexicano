import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { isFillignForm } from '../../store/actions/action-creators';

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

const Button = styled.button`
    margin-top: 200px;
`;

export default function Cart() {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishesReducer.dishes);
    const totalPrice = useSelector(state => state.dishesReducer.totalPrice);
    const [dishesExist, setDishesExist] = useState(false); 

    // const dishesLength = dishes.length > 0;

    console.log(useSelector((state) => state))

    useEffect(() => {
        if(dishes.length > 0) setDishesExist(true);
        else setDishesExist(false);
    }, [dishes])

    const handleCheckout = () => {
        dispatch(isFillignForm(true));
    }

    return (
        <CartContainer>
            {dishes.map(item => <CartItem key={item.id} id={item.id} dish={item.dish} price={item.price} amount={item.amount}></CartItem>)}
            <div className='total-price__container'>
                <span>Suma</span>
                <span>{totalPrice}</span>
            </div>
            {dishesExist && 
                <Link to={`podsumowanie`}>
                    <Button onClick={handleCheckout}>Realizuj zamówienie</Button>
                </Link>}
            {/* TODO: implement payments */}
        </CartContainer>
    );
}