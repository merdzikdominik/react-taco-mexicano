import styled from 'styled-components';

export const ItemContainer = styled.article`
    width: 90%;
    display: flex;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255,255,255,.4);
    border-radius: 15px;
    overflow-x: hidden;
    gap: 20px;
`;

export const ItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-width: 70px;
    padding: 10px;
    color: #fff;

    @media (min-width: 1200px) { width: 80%; }
`;

export const ItemOrderContainer = styled.div`
    min-width: 150px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    color: #fff;
`;

export const Form = styled.form`
    display: flex;
`;

export const Category = styled.span`
    font-weight: 600;
`;

export const Dish = styled(Category)`
    font-weight: initial;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #fff;
    animation-name: ${props => props.isClicked ? 'bump' : ''};
    animation-duration: 0.3s;
    transition: ease;

    @keyframes bump {
        0% { transform: scale(0.9); }
        25% { transform: scale(1.2); }
        50% { transform: scale(1.5); }
        75% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;