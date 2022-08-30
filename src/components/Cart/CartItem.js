import { useDispatch } from 'react-redux';
import { decrement, addToCart } from '../../store/actions/action-creators';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.3);
    border-radius: 10px;
    font-family: 'League Spartan', sans-serif;
`;

const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Dish = styled.span`
    font-size: 20px;
`;

const Price = styled(Dish)`
    font-weight: 700;
`;

const QuantityContainer = styled(OrderInfo)`
    width: 90px;
    justify-content: center;
    align-items: center;
`;

const QuantityInfo = styled.div`
    width: 90px;
    display: flex;
    justify-content: space-between;
`;

const QuantityHeader = styled(Dish)``;
const QuantityNumber = styled(Price)``;

const MinusButton = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    color: #000;

    &:hover {
        font-size: 1.3rem;
        transition: all 0.2s ease-in; 
        color: #fff;
    }

    // &:not( :hover ) {
    //     font-size: 1.5rem;
    //     transition: all 0.3s ease-in-out;
    //     color: #000;
    // }
`;

const PlusButton = styled(MinusButton)``;


export default function CartItem({ id, dish, price, amount }) {
    const formattedPrice = Number(price * amount).toFixed(2);

    const dispatch = useDispatch();

    const incrementItemHandler = (id) => {
        dispatch(addToCart({ id, amount: 1}));
    }

    const decrementItemHandler = (id) => {
        dispatch(decrement(id));
    }

    return (
        <Container>
            <OrderInfo>
                <Dish>{dish}</Dish>
                <Price>{formattedPrice} zł</Price>
            </OrderInfo>
            <QuantityContainer>
                <QuantityHeader>Ilość</QuantityHeader>
                <QuantityInfo>
                    <MinusButton icon={faMinusCircle} onClick={decrementItemHandler.bind(null, id)}>-</MinusButton>
                    <QuantityNumber>{amount}</QuantityNumber>
                    <PlusButton icon={faPlusCircle} onClick={incrementItemHandler.bind(null, id)}>+</PlusButton>
                </QuantityInfo>
            </QuantityContainer>
        </Container>
    );
}