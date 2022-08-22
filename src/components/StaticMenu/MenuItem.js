import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    padding: 10px;
    background-color: red;
    display: flex;
    // justify-content: space-between;
    align-items: center;
`;

const LeftSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
const RightSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export default function MenuItem({ title, price }) {
    return (
        <Container>
            <LeftSide>
                <span>{title}</span>
            </LeftSide>
            <RightSide>
                <span>{price}</span>
            </RightSide>
        </Container>
    );
}