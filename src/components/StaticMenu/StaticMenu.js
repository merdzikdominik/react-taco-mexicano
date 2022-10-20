import { useEffect } from "react";
import { motion } from 'framer-motion';
import styled from "styled-components";
import useDishes from "../../hooks/useDishes";
import MenuCategoryContainer from "./MenuCategoryContainer";
import mexicanStuff from '../../assets/mexican-sfuff.png';

const MainPageContainer = styled(motion.section)`
    width: 100%;
    margin-top: 60px;
    background-image: url(${mexicanStuff});

    @media (min-width: 1200px) {
        min-height: 100vh;
        padding: 20px 0;
    }
`;

const DishesContainer = styled.div`
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


export default function StaticMenu() {
    const dishes = useDishes();
    const dishCategories = ['Przystawka', 'Zupa', 'Sałatka', 'Danie meksykańskie', 'Danie z grilla', 'Danie rybne', 'Deser'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const filteredDishes = dishCategories.map(category => {
        return {
            category,
            dishes: dishes.filter(dish => dish.dish_category === category)
        }
    });

    const dishesByCategory = dishCategories.map(category => filteredDishes.map((item, index) => {
        if (item.category === category) {
            return <MenuCategoryContainer key={index} category={category} items={item.dishes} />;
        }
        return null;
    }));

    return (
        <MainPageContainer  initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <DishesContainer>
                {dishesByCategory}
            </DishesContainer>
        </MainPageContainer>
    );
}