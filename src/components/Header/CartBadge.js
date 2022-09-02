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

    return (
        <BadgeContainer>
            <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
            <Badge itemsAmount={overallOrdersAmount}>{overallOrdersAmount}</Badge>
        </BadgeContainer>
    );
}