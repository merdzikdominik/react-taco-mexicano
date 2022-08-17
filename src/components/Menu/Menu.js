import { useEffect, useState, useCallback } from "react";
import styled from 'styled-components';
import MenuItem from "./MenuItem";

const MenuContainer = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 60px;

    h1 {
        text-align: right;
        padding: 0 50px;
    }

    @media (min-width: 1200px) {
        width: 800px;
    }
`;

export default function Menu() {
    const [dishes, setDishes] = useState([]);

    const fetchDishes = useCallback(async () => {
        const data = await (await fetch('./dishes-api.json', {
            headers : { 
                'Accept': 'application/json'
               }
        })).json();

        let updatedDishes = [];

        for (const dishType in data) {
            updatedDishes = updatedDishes.concat(data[dishType]);
        }

        setDishes(updatedDishes);

    }, []);

    useEffect(() => {
        fetchDishes();
    }, [fetchDishes]);

    return (
        <MenuContainer>
            <h1>Menu</h1>
            {dishes.map(dish => <MenuItem key={dish.dish_id} dish={dish.dish_name} price={dish.dish_price}/>)}
        </MenuContainer>
    );
}