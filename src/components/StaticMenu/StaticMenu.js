import styled from "styled-components";
import useDishes from "../../hooks/useDishes";
// import MenuItem from "./MenuItem";
import MenuCategoryWrapper from "./MenuCategoryWrapper";

const Container = styled.div`
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

    const formatted = dishCategories.map((category, index) => <MenuCategoryWrapper key={index} category={category} items={filteredDishes}></MenuCategoryWrapper>);


    // const formatted = dishCategories.map(category => 
    //                                         <MenuCategoryWrapper category={category}>
    //                                             {filteredDishes.map((item, index) => 
    //                                                 <MenuItem 
    //                                                     title={item.dishes[index]} 
    //                                                     price={item.category}>
    //                                                 </MenuItem>)}
    //                                         </MenuCategoryWrapper>);

    // const formatted = filteredDishes.map(subArr => subArr
    //                                 .map(dish => <MenuItem  title={dish.dish_name} 
    //                                                         price={dish.dish_price}>
    //                                             </MenuItem>));

    // console.log(filteredDishes);

    return (
        <Container>
            {formatted}
        </Container>
    );
}