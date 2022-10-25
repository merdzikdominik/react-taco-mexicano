import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { 
    MainPageContainer, 
    CartContainer, 
    OrdersContainer, 
    MakeOrderContainer, 
    TotalPriceContainer, 
    PaymentHeader, 
    Payment, 
    Button, 
    Mariachis, 
    NoOrdersInCartH1 
} from './Cart.styles';



export default function Cart() {
    const dishes = useSelector(state => state.dishesReducer.dishes);
    const totalPrice = useSelector(state => state.dishesReducer.totalPrice);
    const [dishesExist, setDishesExist] = useState(false); 

    const formattedTotalPrice = totalPrice.toFixed(2);

    useEffect(() => {
        window.scrollTo(0, 0);

        if(dishes.length > 0) {
            setDishesExist(true);
        }
        else {
            setDishesExist(false);
        }

    }, [dishes])

    return (
        <MainPageContainer  initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <CartContainer showCartContainer={dishesExist}>
                <OrdersContainer ordersExist={dishesExist}>
                    {dishes.map(item => <CartItem   key={item.id} 
                                                    id={item.id} 
                                                    dish={item.dish} 
                                                    price={item.price} 
                                                    amount={item.amount}>
                                        </CartItem>)}
                </OrdersContainer>
                <MakeOrderContainer showOrdersContainer={dishesExist}>
                    <TotalPriceContainer>
                        <PaymentHeader>Do zapłaty:</PaymentHeader>
                        <Payment>{formattedTotalPrice} zł</Payment>
                    </TotalPriceContainer>
                    {dishesExist &&
                        <Link to={'podsumowanie'}>
                            <Button>Realizuj zamówienie</Button>
                        </Link>}
                </MakeOrderContainer>
            </CartContainer>
            <Mariachis showMariachi={dishesExist}/>
            {dishes.length === 0 && <NoOrdersInCartH1>Twój koszyk jest pusty... Masz na coś ochotę?</NoOrdersInCartH1>}
        </MainPageContainer>
    );
}