import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/action-creators';
import styled from 'styled-components';
import Input from '../reusable/Input';

const Container = styled.div`
    width: 90%;
    // height: 100px;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    // background-color: #fafafa;
    // background-color: rgba(255,255,255,0.7);
    background-color: green;
    border-radius: 15px;
    overflow-x: hidden;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-width: 120px;
    padding: 10px;
    // background-color: red;


    @media (min-width: 1200px) {
        width: 80%;
    }
`;

const RighSide = styled.div`
    // max-width: 250px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
`;

// const Input = styled.input`
//     width: 35px;
//     text-align: center;
// `;

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
                {/* <Input type='number' placeholder='0' ref={inputRef} min='0' max='7'></Input> */}
                <Input  input={{
                                id: 'search',
                                type: 'number',
                                ref: inputRef,
                                min: '0',
                                max: '7',
                                placeholder: '0',
                                style: {width: '35px', textAlign: 'center', borderRadius: '5px'}
                            }}
                        padding='0 15px'
                />
                <button onClick={addToCartHandler}>+</button>
            </RighSide>
        </Container>
    );
}