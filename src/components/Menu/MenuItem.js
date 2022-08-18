import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    // height: 100px;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    border-radius: 15px;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-width: 120px;
    padding: 20px;
    // background-color: red;


    @media (min-width: 1200px) {
        width: 80%;
    }
`;

const RighSide = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;

const Input = styled.input`
    width: 30px;
`;

export default function MenuItem({ dish, price, category }) {
    return (
        <Container>
            <LeftSide>
                <span>{category}</span>
                <span>{dish}</span>
            </LeftSide>
            <RighSide>
                <span>{price} zł</span>
                <Input type='number' placeholder='1'></Input>
            </RighSide>
        </Container>
    );
}