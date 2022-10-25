import { useEffect } from "react";
import useDishes from "../../hooks/useDishes";
import MenuCategoryContainer from "./MenuCategoryContainer";
import { MainPageContainer, DishesContainer } from './StaticMenu.styles';

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