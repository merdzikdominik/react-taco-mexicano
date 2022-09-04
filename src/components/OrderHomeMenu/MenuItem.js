import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/action-creators';
import styled from 'styled-components';
import Input from '../reusable/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
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

const Form = styled.form`
    display: flex;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #fff;
    animation-name: ${props => props.isClicked ? 'bump' : ''};
    animation-duration: 0.3s;
    transition: ease;

    // &:active {
    //     animation-name: bump;
    //     animation-duration: 1.3s;
    //     transition: ease-out;
    // }

    @keyframes bump {
        0% {
            transform: scale(0.9);
        }
        25% {
            transform: scale(1.2);
        }
        50% {
            transform: scale(1.5);
        }
        75% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export default function MenuItem({ id, dish, price, category }) {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [clicked]);

    const addToCartHandler = (event) => {       
        event.preventDefault();

        const amount = +inputRef.current.value;

        if (amount === 0) return;
        const payload = {
            id,
            dish,
            price: +price,
            category,
            amount
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
                <Form onSubmit={addToCartHandler}>
                    <Input  input={{
                                    id: 'search',
                                    type: 'number',
                                    ref: inputRef,
                                    min: '0',
                                    max: '7',
                                    placeholder: '0',
                                    style: {width: '35px', textAlign: 'center', borderRadius: '5px'}
                                }}
                            containerPadding='0 15px'
                    />
                    <Button type='submit' onClick={() => setClicked(true)} isClicked={clicked}><FontAwesomeIcon icon={faCartPlus}/></Button>
                </Form>
            </RighSide>
        </Container>
    );
}