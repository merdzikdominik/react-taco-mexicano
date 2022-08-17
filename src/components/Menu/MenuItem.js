import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    border-radius: 15px;
`;

const LeftSide = styled.div`
    width: 60%;
    min-width: 120px;
    padding: 20px;

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

export default function MenuItem({ dish, price }) {
    return (
        <Container>
            <LeftSide>
                <span>{dish}</span>
            </LeftSide>
            <RighSide>
                <span>{price} zł</span>
                <Input type='number' placeholder='1'></Input>
            </RighSide>
        </Container>
    );
}