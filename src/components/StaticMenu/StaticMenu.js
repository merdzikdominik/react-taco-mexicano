import styled from "styled-components";
import { useSelector } from 'react-redux';
import useDishes from "../../hooks/useDishes";
import MenuCategoryWrapper from "./MenuCategoryWrapper";

const Container = styled.section`
    width: 100%;
    padding-top: 60px;
`;

export default function StaticMenu() {
    const cartHasItems = useSelector(state => state.dishesReducer.dishes.length !== 0);
    console.log(cartHasItems);
    const dishes = useDishes();
    const dishCategories = ['Przystawka', 'Zupa', 'Sałatka', 'Danie meksykańskie', 'Danie z grilla', 'Danie rybne', 'Deser'];

    const filteredDishes = dishCategories.map(category => {
        return {
            category,
            dishes: dishes.filter(dish => dish.dish_category === category)
        }
    });

    const dishesByCategory = dishCategories.map(category => filteredDishes.map((item, index) => {
        if (item.category === category) return <MenuCategoryWrapper key={index} category={category} items={item.dishes} />;
    }))

    return (
        <Container>
            {dishesByCategory}
        </Container>
    );
}