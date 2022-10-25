import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/action-creators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Input from '../reusable/Input';
import { 
    ItemContainer, 
    ItemInfoContainer, 
    Category, 
    Dish, 
    ItemOrderContainer, 
    Form, 
    Button 
} from './MenuItem.styles';


export default function MenuItem({ id, dish, price, category }) {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [clicked]);

    const handleAddToCart = (event) => {       
        event.preventDefault();
        const amount = +inputRef.current.value;

        if (amount === 0) return;

        const payload = {
            id,
            dish,
            price: +price,
            category,
            amount
        };

        dispatch(addToCart(payload));

    }

    return (
        <ItemContainer>
            <ItemInfoContainer>
                <Category>{category}</Category>
                <Dish>{dish}</Dish>
            </ItemInfoContainer>
            <ItemOrderContainer>
                <span>{price} zł</span>
                <Form onSubmit={handleAddToCart}>
                    <Input  input={{
                                    id: 'search',
                                    type: 'number',
                                    ref: inputRef,
                                    min: '0',
                                    max: '7',
                                    placeholder: '0',
                                }}
                            styles={{
                                width: '35px',
                                textAlign: 'center',
                                borderRadius: '5px',
                                containerPadding: '0 7px'
                            }}
                    />
                    <Button type='submit' onClick={() => setClicked(true)} isClicked={clicked}><FontAwesomeIcon icon={faCartPlus}/></Button>
                </Form>
            </ItemOrderContainer>
        </ItemContainer>
    );
}