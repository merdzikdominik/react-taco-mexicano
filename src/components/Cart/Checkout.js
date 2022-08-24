import styled from "styled-components";
import { useSelector } from 'react-redux';
import Input from '../reusable/Input'
import { inputFillData } from "../../constants";

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
    const cartHasItems = useSelector(state => state.dishes.length !== 0);

    return (
        <MainContainer>
            Podsumowanie
            <FormContainer>
                {inputFillData.map((input, index) => <Input label={input.labelName} 
                                                            input={{
                                                                id: `formInput${index}`,
                                                                type: 'text',
                                                                placeholder: input.inputPlaceholder
                                                            }}
                                                        />)}
                <button type='submit'>Prześlij dane</button>
            </FormContainer>
        </MainContainer>
    );
}