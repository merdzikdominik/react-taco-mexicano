import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/action-creators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Input from '../reusable/Input';

const ItemContainer = styled.article`
    width: 90%;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255,255,255,.4);
    border-radius: 15px;
    overflow-x: hidden;
    gap: 20px;
`;

const ItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-width: 70px;
    padding: 10px;
    color: #fff;

    @media (min-width: 1200px) { width: 80%; }
`;

const ItemOrderContainer = styled.div`
    min-width: 150px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    color: #fff;
`;

const Form = styled.form`
    display: flex;
`;

const Category = styled.span`
    font-weight: 600;
`;

const Dish = styled(Category)`
    font-weight: initial;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #fff;
    animation-name: ${props => props.isClicked ? 'bump' : ''};
    animation-duration: 0.3s;
    transition: ease;

    @keyframes bump {
        0% { transform: scale(0.9); }
        25% { transform: scale(1.2); }
        50% { transform: scale(1.5); }
        75% { transform: scale(1.2); }
        100% { transform: scale(1); }
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

    const handleAddToCart = (event) => {       
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
        <ItemContainer>
            <ItemInfoContainer>
                <Category>{category}</Category>
                <Dish>{dish}</Dish>
            </ItemInfoContainer>
            <ItemOrderContainer>
                <span>{price} zł</span>
                <Form onSubmit={handleAddToCart}>
                    <Input  input={{
                                    id: 'search',
                                    type: 'number',
                                    ref: inputRef,
                                    min: '0',
                                    max: '7',
                                    placeholder: '0',
                                }}
                            styles={{
                                width: '35px',
                                textAlign: 'center',
                                borderRadius: '5px',
                                containerPadding: '0 7px'
                            }}
                    />
                    <Button type='submit' onClick={() => setClicked(true)} isClicked={clicked}><FontAwesomeIcon icon={faCartPlus}/></Button>
                </Form>
            </ItemOrderContainer>
        </ItemContainer>
    );
}