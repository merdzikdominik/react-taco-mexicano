import { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import Input from '../reusable/Input'
import { ref, child, push, update } from "firebase/database"
import { db } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { clearDishes } from "../../store/actions/action-creators";
// import SliderButton from "../StartingPage/Slider/SliderButton";
import Button from "../reusable/Button";

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 500px;
    background-color: green;
    display: flex;
    justify-content: center;
    border-radius: 10px;
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
    // font-size: 1.7rem;
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
                                    containerPadding: {
                                        padding: '0 30px'
                                    },
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
                                    containerPadding: {
                                        padding: '0 30px'
                                    },
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
                                    containerPadding: {
                                        padding: '0 30px'
                                    },
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
                                    containerPadding: {
                                        padding: '0 30px'
                                    },
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
                                    containerPadding: {
                                        padding: '0 30px'
                                    },
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
                                    containerPadding: {
                                        padding: '0 30px'
                                    },
                                    padding: '10px 5px',
                                    borderRadius: '5px'
                                }
                            }
                    />

                    {/* <button type='submit'>Prześlij dane</button> */}
                    <Button content='Prześlij dane' 
                            type='submit'
                            styles={{
                                padding: '20px 30px',
                                position: 'initial',
                            }}
                    />
                </Form>
            </FormContainer>
        </MainContainer>
    );
}