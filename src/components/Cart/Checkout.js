import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ref, child, push, update } from "firebase/database"
import { db } from "../../firebase";
import { clearDishes } from "../../store/actions/action-creators";
import styled from "styled-components";
import Input from '../reusable/Input'
import Button from "../reusable/Button";
import mexicanStuff from '../../assets/mexican-sfuff.png';


const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-image: url(${mexicanStuff});
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 500px;
    background-color: green;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    animation: slam 0.5s ease-in;
    -webkit-box-shadow: -2px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: -2px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: -2px 8px 24px 0px rgba(66, 68, 90, 1);

    @keyframes slam {
        10% { transform: scale(4); }
        20% { transform: scale(3.5); }
        30% { transform: scale(3);}
        40% { transform: scale(2.5); }
        50% { transform: scale(2); }
        60% { transform: scale(1.5); }
        70% { transform: scale(1); }
        80% { transform: scale(1.2); }
        90% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 15px;
`;

const PersonalDataHeader = styled.h3`
    color: #fff;
    text-align: center;
`;

export default function Checkout() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.dishes);
    const totalPrice = useSelector(state => state.totalPrice);

    const navigate = useNavigate();

    const firstNameRef = useRef();
    const secondNameRef = useRef();
    const cityRef = useRef();
    const streetRef = useRef();
    const houseRef = useRef();
    const flatRef = useRef();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const userData = {
            firstName: firstNameRef.current.value,
            secondName: secondNameRef.current.value,
            city: cityRef.current.value,
            street: streetRef.current.value,
            house: houseRef.current.value,
            flat: flatRef.current.value,
            date: new Date().toLocaleString(),
            orders,
            totalPrice 
        }

        const newOrderKey = push(child(ref(db), 'Orders')).key;
        const updates = {};

        updates['/Orders/' + newOrderKey] = userData;
        console.log(userData);

        localStorage.clear();
        dispatch(clearDishes());
        navigate('/');

        return update(ref(db), updates);
    }

    return (
        <MainContainer>
            <FormContainer>
                <Form onSubmit={handleFormSubmit}>
                    <PersonalDataHeader>Formularz Osobowy</PersonalDataHeader>
                    <Input  
                            input={{
                                type: 'text',
                                placeholder: 'Imię',
                                ref: firstNameRef,
                                required: true
                            }}
                            styles={
                                {
                                    containerPadding: '0 30px',
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />
                    <Input  
                            input={{
                                type: 'text',
                                placeholder: 'Nazwisko',
                                ref: secondNameRef,
                                required: true
                            }}
                            styles={
                                {
                                    containerPadding: '0 30px',
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />
                    <Input   
                            input={{
                                type: 'text',
                                placeholder: 'Miasto',
                                ref: cityRef,
                                required: true
                            }}
                            styles={
                                {
                                    containerPadding: '0 30px',
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />
                    <Input  
                            input={{
                                type: 'text',
                                placeholder: 'Ulica',
                                ref: streetRef,
                                required: true
                            }}
                            styles={
                                {
                                    containerPadding: '0 30px',
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />
                    <Input  
                            input={{
                                type: 'text',
                                placeholder: 'Numer domu',
                                ref: houseRef,
                                required: true
                            }}
                            styles={
                                {
                                    containerPadding: '0 30px',
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />
                    <Input  
                            input={{
                                type: 'text',
                                placeholder: 'Numer mieszkania (opcjonalnie)',
                                ref: flatRef
                            }}
                            styles={
                                {
                                    containerPadding: '0 30px',
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />
                    <Button content='Prześlij dane' 
                            type='submit'
                            styles={{
                                position: 'initial',
                            }}
                    />
                </Form>
            </FormContainer>
        </MainContainer>
    );
}