import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    padding: 20px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.3);
    border-radius: 10px;
    font-family: 'League Spartan', sans-serif;
`;

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Dish = styled.span`
    font-size: 20px;
`;

export const Price = styled(Dish)`
    font-weight: 700;
`;

export const QuantityContainer = styled(OrderInfoContainer)`
    width: 90px;
    justify-content: center;
    align-items: center;
`;

export const QuantityInfo = styled(QuantityContainer)`
    flex-direction: row;
    justify-content: space-between;
`;

export const QuantityHeader = styled(Dish)``;
export const QuantityNumber = styled(Price)``;

export const MinusButton = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    color: #000;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
        font-size: 1.3rem;
        transition: all 0.2s ease-in; 
        color: #fff;
    }
`;

export const PlusButton = styled(MinusButton)``;