import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const BadgeContainer = styled.div`
    .icon {
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        .icon {
            font-size: 1.3rem;
        }
    }
`;

const Badge = styled.span`
    display: ${props => props.itemsAmount === 0 ? 'none': 'block'};
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

    animation-name: ${props => props.amountChanged ? 'bump' : ''};
    animation-duration: 0.3s;
    transition: ease;

    @keyframes bump {
        0% {
            transform: scale(0.9);
        }
        25% {
            transform: scale(1.2);
        }
        50% {
            transform: scale(1.5);
        }
        75% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (min-width: 1200px) {
        position: absolute;
        top: -15px;
        right: 50px;
        padding: ${props => props.itemsAmount < 10 ? '1px 8px' : '1px 6px'};
    }
`;

export default function CartBadge() {
    const orders = useSelector(state => state.dishes);
    const overallOrdersAmount = orders.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0);
    const [ordersAmount, setOrdersAmount] = useState(0);
    const [isAmountChanged, setIsAmountChanged] = useState(false);

    useEffect(() => {
        setIsAmountChanged(true);

        const timer = setTimeout(() => {
            setIsAmountChanged(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [orders]);

    return (
        <BadgeContainer>
            <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
            <Badge amountChanged={isAmountChanged} itemsAmount={overallOrdersAmount}>{overallOrdersAmount}</Badge>
        </BadgeContainer>
    );
}