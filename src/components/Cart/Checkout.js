import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ref, child, push, update } from "firebase/database"
import { db } from "../../firebase";
import { clearDishes } from "../../store/actions/action-creators";
import Input from '../reusable/Input'
import Button from "../reusable/Button";
import { 
    MainPageContainer, 
    FormContainer, 
    Form, 
    PersonalDataHeader 
} from "./Checkout.styles";

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

        localStorage.clear();
        dispatch(clearDishes());
        navigate('/');

        return update(ref(db), updates);
    }

    return (
        <MainPageContainer>
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
        </MainPageContainer>
    );
}