import MenuItem from './MenuItem';

export default function MenuItems({ currentItems }) {

    // const items = currentItems.map(dish => <MenuItem key={dish.dish_id} 
    //     dish={dish.dish_name} 
    //     price={dish.dish_price} />);
    
    // return items;
    return (
        <>
            {currentItems && currentItems.map(dish => <MenuItem key={dish.dish_id} 
                                                                dish={dish.dish_name} 
                                                                price={dish.dish_price} 
                                                        />)}
        </>
    );

}