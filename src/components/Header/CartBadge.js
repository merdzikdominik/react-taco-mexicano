import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    BadgeContainer,
    Badge 
} from "./CartBadge.styles";


export default function CartBadge() {
    const orders = useSelector(state => state.dishesReducer.dishes);
    const overallOrdersAmount = orders.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0);
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
        <BadgeContainer orders={orders}>
            <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
            <Badge amountChanged={isAmountChanged} itemsAmount={overallOrdersAmount}>{overallOrdersAmount}</Badge>
        </BadgeContainer>
    );
}