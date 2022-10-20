import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
`;

const Dishes = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const Price = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-weight: 900;
`;

export default function MenuItem({ title, price }) {
    return (
        <Content>
            <Dishes>
                <span>{title}</span>
            </Dishes>
            <Price>
                <span>{price} zł</span>
            </Price>
        </Content>
    );
}