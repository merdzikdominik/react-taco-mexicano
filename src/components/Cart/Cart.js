import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: red;
    padding-top: 60px;
`;

const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    margin-top: 200px;
`;

export default function Cart() {
    const dishes = useSelector(state => state.dishes);
    const totalPrice = useSelector(state => state.totalPrice);
    const [dishesExist, setDishesExist] = useState(false); 


    useEffect(() => {
        if(dishes.length > 0) setDishesExist(true);
        else setDishesExist(false);
    }, [dishes])

    return (
        <CartContainer>
            {dishes.map(item => <CartItem   key={item.id} 
                                            id={item.id} 
                                            dish={item.dish} 
                                            price={item.price} 
                                            amount={item.amount}>
                                </CartItem>)}
            <TotalPriceContainer>
                <span>Suma</span>
                <span>{totalPrice}</span>
            </TotalPriceContainer>
            {dishesExist && 
                <Link to={`podsumowanie`}>
                    <Button>Realizuj zamówienie</Button>
                </Link>}
        </CartContainer>
    );
}