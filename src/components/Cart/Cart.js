import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import mexicanPattern from '../../assets/mexican-pattern.jpg';
// import mariaczips from '../../assets/mariaczips.gif';
// import mariachi from '../../assets/mariachis.png';

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
    -webkit-box-shadow: -7px 8px 17px -9px rgba(66, 68, 90, 1);
    -moz-box-shadow: -7px 8px 17px -9px rgba(66, 68, 90, 1);
    box-shadow: -7px 8px 17px -9px rgba(66, 68, 90, 1);
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
    background-color: #eee;
    border-radius: 15px;
    font-family: 'League Spartan', sans-serif;

`;

const PaymentHeader = styled.span`
    font-size: 1.6rem;
`;

const Payment = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
`;

// const Mariachis = styled.div`
//     background-image: url(${mariaczips});
//     width: 600px;
//     height: 400px;
//     object-fit: cover;
// `;

const Button = styled.button`
    width: 100px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    background-color: #FAB200;
    color: #fff;

    &:hover {
        animation-name: shake;
        animation-duration: 0.5s;
    }

    @keyframes shake {
        from { transform: rotate(0); }
        to { transform: rotate(360deg); }
    }
`;


export default function Cart() {
    const dishes = useSelector(state => state.dishes);
    const totalPrice = useSelector(state => state.totalPrice);
    const [dishesExist, setDishesExist] = useState(false); 

    const formattedTotalPrice = totalPrice.toFixed(2);

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
                {/* <Mariachis/> */}
                <TotalPriceContainer>
                    <PaymentHeader>Do zapłaty:</PaymentHeader>
                    <Payment>{formattedTotalPrice} zł</Payment>
                </TotalPriceContainer>
                {dishesExist && 
                    <Link to={`podsumowanie`}>
                        <Button>Realizuj zamówienie</Button>
                    </Link>}
            </MakeOrderContainer>
        </CartContainer>
    );
}