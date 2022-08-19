import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: green;

    .left-side, .right-side {
        display: flex;
        flex-direction: column;
    }

    .right-side {
        width: 90px;
        justify-content: center;
        align-items: center;
    }

    .amount-container {
        width: 90px;
        display: flex;
        justify-content: space-between;
    }
    
`;


export default function CartItem({ dish, price, amount }) {
    return (
        <Container>
            <div className='left-side'>
                <span>{dish}</span>
                <span>{price} zł</span>
            </div>
            <div className='right-side'>
                <span>Ilość</span>
                <div className='amount-container'>
                    <button>-</button>
                    <span>{amount}</span>
                    <button>+</button>
                </div>
            </div>
        </Container>
    );
}