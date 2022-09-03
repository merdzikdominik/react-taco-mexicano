import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/action-creators';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    // height: 100px;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    // background-color: #fafafa;
    background-color: rgba(255,255,255,0.7);
    border-radius: 15px;
    overflow-x: hidden;
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

    const addToCartHandler = (event) => {       
        const payload = {
            id,
            dish,
            price: +price,
            category,
            amount: +inputRef.current.value
        };

        dispatch(addToCart(payload));
    }

    return (
        <Container>
            <LeftSide>
                <span>{category}</span>
                <span>{dish}</span>
            </LeftSide>
            <RighSide>
                <span>{price} zł</span>
                <Input type='number' placeholder='0' ref={inputRef} min='0' max='7'></Input>
                <button onClick={addToCartHandler}>DODAJ MNIE KURWA</button>
            </RighSide>
        </Container>
    );
}