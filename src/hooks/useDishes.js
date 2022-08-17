import { useEffect, useState, useCallback } from "react";

export default function useDishes() {
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

    return dishes;
}