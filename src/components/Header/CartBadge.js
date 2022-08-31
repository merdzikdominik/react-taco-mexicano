import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const BadgeContainer = styled.div`
    display: initial;
`;

const Badge = styled.span`
    position: relative;
    top: -15px;
    right: 10px;
    z-index: 10;
    font-size: 1rem;
    font-weight: 900;
    text-align: center;
    color: #fff;
    background-color: red;
    border-radius: 50%;
    padding: ${props => props.itemsAmount < 10 ? '7px 9px' : '7px'};
`;

export default function CartBadge() {
    const orders = useSelector(state => state.dishes);
    const overallOrdersAmount = orders.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0);

    return (
        <BadgeContainer>
            <FontAwesomeIcon icon={faShoppingCart} size='xl'/>
            <Badge itemsAmount={overallOrdersAmount}>{overallOrdersAmount}</Badge>
        </BadgeContainer>
    );
}