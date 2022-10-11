import styled from "styled-components";
// import { useSelector } from 'react-redux';
import useDishes from "../../hooks/useDishes";
import MenuCategoryWrapper from "./MenuCategoryWrapper";
import mexicanStuff from '../../assets/mexican-sfuff.png';

const Container = styled.section`
    width: 100%;
    margin-top: 60px;
    background-image: url(${mexicanStuff});

    @media (min-width: 1200px) {
        min-height: 100vh;
        padding: 20px 0;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: auto;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        overflow: auto;
        padding: 0 15px;
    }
`;

const dishCategories = ['Przystawka', 'Zupa', 'Sałatka', 'Danie meksykańskie', 'Danie z grilla', 'Danie rybne', 'Deser'];

export default function StaticMenu() {
    const dishes = useDishes();

    const filteredDishes = dishCategories.map(category => {
        return {
            category,
            dishes: dishes.filter(dish => dish.dish_category === category)
        }
    });

    const dishesByCategory = dishCategories.map(category => filteredDishes.map((item, index) => {
        if (item.category === category) return <MenuCategoryWrapper key={index} category={category} items={item.dishes} />;
    return null}));

    return (
        <Container>
            <InnerContainer>
                {dishesByCategory}
            </InnerContainer>
        </Container>
    );
}