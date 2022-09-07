import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    // color: #eee;
    font-size: 1.2rem;
`;

const DishesContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;
const PriceContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-weight: 900;
`;

export default function MenuItem({ title, price }) {
    return (
        <Container>
            <DishesContainer>
                <span>{title}</span>
            </DishesContainer>
            <PriceContainer>
                <span>{price} zł</span>
            </PriceContainer>
        </Container>
    );
}