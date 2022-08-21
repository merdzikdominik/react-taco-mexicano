import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    padding: 10px;
    background-color: red;
`;

export default function MenuItem({ title, price }) {
    return (
        <Container>
            <span>{title}</span>
            <span>{price}</span>
        </Container>
    );
}