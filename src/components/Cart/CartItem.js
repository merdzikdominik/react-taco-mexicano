import { useDispatch } from 'react-redux';
import { decrement, addToCart } from '../../store/actions/action-creators';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    background-color: green;

    .left-side, .right-side {
        display: flex;
        flex-direction: column;
    }

    .right-side {
        width: 90px;
        justify-content: center;
        align-items: center;
    }

    .amount-container {
        width: 90px;
        display: flex;
        justify-content: space-between;
    }
    
`;


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
            <div className='left-side'>
                <span>{dish}</span>
                <span>{formattedPrice} zł</span>
            </div>
            <div className='right-side'>
                <span>Ilość</span>
                <div className='amount-container'>
                    <button onClick={decrementItemHandler.bind(null, id)}>-</button>
                    <span>{amount}</span>
                    <button onClick={incrementItemHandler.bind(null, id)}>+</button>
                </div>
            </div>
        </Container>
    );
}