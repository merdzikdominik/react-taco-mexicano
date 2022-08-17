import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSide = styled.div`
    width: 250px;
    padding: 20px;
`;

const RighSide = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fefefe;
    padding: 40px;
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
                <span>{price}</span>
                <Input type='number' placeholder='1'></Input>
            </RighSide>
        </Container>
    );
}