import { useDispatch } from 'react-redux';
import { decrement, addToCart } from '../../store/actions/action-creators';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import {
    CartItemContainer,
    OrderInfoContainer,
    Dish,
    Price,
    QuantityContainer,
    QuantityHeader,
    QuantityInfo,
    MinusButton,
    QuantityNumber,
    PlusButton
} from './CartItem.styles';

export default function CartItem({ id, dish, price, amount }) {
    const formattedPrice = Number(price * amount).toFixed(2);

    const dispatch = useDispatch();

    const handleItemAmount = (id, operation) => {
        if (operation === 'increment') dispatch(addToCart({id, amount: 1}));
        if (operation === 'decrement') dispatch(decrement(id));
    }

    return (
        <CartItemContainer>
            <OrderInfoContainer>
                <Dish>{dish}</Dish>
                <Price>{formattedPrice} zł</Price>
            </OrderInfoContainer>
            <QuantityContainer>
                <QuantityHeader>Ilość</QuantityHeader>
                <QuantityInfo>
                    <MinusButton icon={faMinusCircle} onClick={handleItemAmount.bind(null, id, 'decrement')}>-</MinusButton>
                    <QuantityNumber>{amount}</QuantityNumber>
                    <PlusButton icon={faPlusCircle} onClick={handleItemAmount.bind(null, id, 'increment')}>+</PlusButton>
                </QuantityInfo>
            </QuantityContainer>
        </CartItemContainer>
    );
}