import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

export default function MenuItems({ currentItems, items, searchedDish }) {
    const [updatedDishes, setUpdatedDishes] = useState(currentItems);

    useEffect(() => {
        if (searchedDish !== '') setUpdatedDishes(items);
        else setUpdatedDishes(currentItems);
    }, [items, searchedDish, currentItems])

    return (
        <>
            {updatedDishes && updatedDishes
                .filter(dish => dish.dish_name.toLowerCase().includes(searchedDish.toLowerCase()))
                .map(dish => <MenuItem  key={dish.dish_id} 
                                        id={dish.dish_id}
                                        dish={dish.dish_name} 
                                        price={dish.dish_price} 
                                        category={dish.dish_category}
                                />)}
        </>
    );

}