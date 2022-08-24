import styled from "styled-components";
import { useSelector } from 'react-redux';

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// TODO: array.map is a side effect, put all array operations inside useEffect hook
export default function Checkout() {
    const cartHasItems = useSelector(state => state.dishes.length !== 0);
    console.log(cartHasItems);

    return (
        <MainContainer>
            Podsumowanie
        </MainContainer>
    );
}