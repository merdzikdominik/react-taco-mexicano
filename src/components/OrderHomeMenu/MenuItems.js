import { useState, useEffect } from 'react';
import useDishes from '../../hooks/useDishes';
import MenuItem from './MenuItem';

export default function MenuItems({ currentItems, searchedDish }) {
    const dishes = useDishes();
    const [updatedDishes, setUpdatedDishes] = useState(currentItems);

    useEffect(() => {
        if (searchedDish !== '') setUpdatedDishes(dishes);
        else setUpdatedDishes(currentItems);
    }, [dishes, searchedDish, currentItems])

    return (
        <>
            {updatedDishes && updatedDishes
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