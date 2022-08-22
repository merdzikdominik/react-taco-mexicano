import MenuItem from './MenuItem';

export default function MenuItems({ currentItems, searchedDish }) {

    return (
        <>
            {currentItems && currentItems
                .filter(dish => dish.dish_name.toLowerCase().includes(searchedDish))
                .map(dish => <MenuItem  key={dish.dish_id} 
                                        id={dish.dish_id}
                                        dish={dish.dish_name} 
                                        price={dish.dish_price} 
                                        category={dish.dish_category}
                                />)}
        </>
    );

}