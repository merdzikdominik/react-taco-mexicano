import styled from "styled-components";
import useDishes from "../../hooks/useDishes";
import MenuItem from "./MenuItem";
import MenuCategoryWrapper from "./MenuCategoryWrapper";

const Container = styled.section`
    width: 100%;
    padding-top: 60px;
`;

export default function StaticMenu() {
    const dishes = useDishes();
    const dishCategories = ['Przystawka', 'Zupa', 'Sałatka', 'Danie meksykańskie', 'Danie z grilla', 'Danie rybne', 'Deser'];

    const filteredDishes = dishCategories.map(category => {
        return {
            category,
            dishes: dishes.filter(dish => dish.dish_category === category)
        }
    });

    const dishesByCategory = dishCategories.map(category => filteredDishes.map((item, index) => {
        if (item.category === category) return <MenuCategoryWrapper category={category} items={item.dishes} />;
    }))

    return (
        <Container>
            {dishesByCategory}
        </Container>
    );
}