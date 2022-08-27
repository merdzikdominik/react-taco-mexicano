import { useRef } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import Input from '../reusable/Input'
import { ref, child, push, update } from "firebase/database"
import { db } from "../../firebase";

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 80%;
    height: 700px;
    background-color: green;
`;

// TODO: array.map is a side effect, put all array operations inside useEffect hook
export default function Checkout() {
    const orders = useSelector(state => state.dishes);
    const totalPrice = useSelector(state => state.totalPrice);

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
            orders,
            totalPrice 
        }

        const newOrderKey = push(child(ref(db), 'Orders')).key;
        const updates = {};

        updates['/Orders/' + newOrderKey] = userData;
        console.log(userData);

        return update(ref(db), updates);
    }

    return (
        <MainContainer>
            Podsumowanie
            <FormContainer>
                <form onSubmit={handleFormSubmit}>
                    <Input label='Imię' input={{
                        id: `formInput`,
                        type: 'text',
                        placeholder: 'Wprowadź imię',
                        ref: firstNameRef
                    }}/>
                    <Input label='Nazwisko' input={{
                        id: `formInput`,
                        type: 'text',
                        placeholder: 'Wprowadź nazwisko',
                        ref: secondNameRef
                    }}/>
                    <Input label='Miasto' input={{
                        id: `formInput`,
                        type: 'text',
                        placeholder: 'Wprowadź miasto',
                        ref: cityRef
                    }}/>
                    <Input label='Ulica' input={{
                        id: `formInput`,
                        type: 'text',
                        placeholder: 'Wprowadź ulicę',
                        ref: streetRef
                    }}/>
                    <Input label='Nr domu' input={{
                        id: `formInput`,
                        type: 'text',
                        placeholder: 'Wprowadź numer domu',
                        ref: houseRef
                    }}/>
                    <Input label='Nr mieszkania (opcjonalnie)' input={{
                        id: `formInput`,
                        type: 'text',
                        placeholder: 'Wprowadź numer mieszkania',
                        ref: flatRef
                    }}/>

                    <button type='submit'>Prześlij dane</button>
                </form>
            </FormContainer>
        </MainContainer>
    );
}