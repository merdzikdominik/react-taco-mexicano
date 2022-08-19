import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    // height: 100px;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    border-radius: 15px;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-width: 120px;
    padding: 20px;
    // background-color: red;


    @media (min-width: 1200px) {
        width: 80%;
    }
`;

const RighSide = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

const Input = styled.input`
    width: 35px;
    text-align: center;
`;

export default function MenuItem({ id, dish, price, category }) {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const state = useSelector(state => state.dishes);

    const addToCartHandler = (event) => {       
        const payload = {
            id,
            dish,
            price,
            category,
            amount: +inputRef.current.value
        };

        dispatch({ type: 'ADD_DISH_TO_ORDER', payload});
    }

    return (
        <Container>
            <LeftSide>
                <span>{category}</span>
                <span>{dish}</span>
            </LeftSide>
            <RighSide>
                <span>{price} zł</span>
                <Input type='number' placeholder='0' required ref={inputRef} min='0' max='7'></Input>
                <button onClick={addToCartHandler}>ADD</button>
            </RighSide>
        </Container>
    );
}