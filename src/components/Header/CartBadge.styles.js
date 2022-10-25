import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const BadgeContainer = styled.div`
    position: relative;
    left: ${props => props.orders.length > 0 ? '7' : '0'}px; 

    .icon { font-size: 1.3rem; }

    @media (min-width: 1200px) {
        position: initial;
        left: 0;
    }
`;

export const Badge = styled.span`
    display: ${props => props.itemsAmount === 0 ? 'none': 'inline'};
    position: relative;
    top: -25px;
    right: 15px;
    font-size: 1rem;
    font-weight: 900;
    text-align: center;
    color: #fff;
    background-color: red;
    border-radius: 50%;
    padding: ${props => props.itemsAmount < 10 ? '7px 9px' : '7px'}; 
    animation-name: ${props => props.amountChanged ? 'rotateBadge' : ''};
    animation-duration: 0.3s;
    transition: ease;

    @keyframes rotateBadge {
        from { transform: rotate(0) scale(1.5); }
        to { transform: rotate(360deg) scale(0.9); }
    }

    @media (min-width: 1200px) {
        position: absolute;
        top: -15px;
        right: 50px;
        padding: ${props => props.itemsAmount < 10 ? '1px 8px' : '1px 6px'};
    }
`;