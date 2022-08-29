import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import mexicanPattern from '../../assets/mexican-pattern.jpg';

const CartContainer = styled.section`
    width: 100%;
    // height: 100vh;
    padding-top: 60px;
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const OrdersContainer = styled.div`
    width: 90%;
    padding: 20px;
    // background-color: blue;
    background-image: url(${mexicanPattern});
    border-radius: 20px;
`;

const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const MakeOrderContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: green;
`;

const Button = styled.button`
    border: none;
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
            <OrdersContainer>
                {dishes.map(item => <CartItem   key={item.id} 
                                                id={item.id} 
                                                dish={item.dish} 
                                                price={item.price} 
                                                amount={item.amount}>
                                    </CartItem>)}
            </OrdersContainer>
            <MakeOrderContainer>
                <TotalPriceContainer>
                    <span>Suma</span>
                    <span>{totalPrice}</span>
                </TotalPriceContainer>
                {dishesExist && 
                    <Link to={`podsumowanie`}>
                        <Button>Realizuj zamówienie</Button>
                    </Link>}
            </MakeOrderContainer>
        </CartContainer>
    );
}