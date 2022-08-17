import MenuItem from './MenuItem';

export default function MenuItems({ currentItems }) {
    
    return (
        <>
            {currentItems && currentItems.map(dish => <MenuItem key={dish.dish_id} dish={dish.dish_name} price={dish.dish_price}/>)}
        </>
    );

}