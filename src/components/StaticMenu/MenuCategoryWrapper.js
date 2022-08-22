import styled from 'styled-components';
import MenuItem from "./MenuItem";

const Container = styled.div`
    widht: 100%;
    padding: 30px;
    background-color: blue;
`;

export default function MenuCategoryWrapper({ category, items }) {
    // console.log(items);
    const displayItems = items.map(item => <MenuItem title={item.dish_name} price={item.dish_price}/>)

    return (
        <Container>
            <h1>{category}</h1>
            {displayItems}
            {/* <MenuItem title={title} price={price}/> */}
            {/* {items.map(item => <MenuItem    title={item.category === category && item.dishes.map(dish => dish.dish_name)} 
                                            price={item.category === category && item.dishes.map(dish => dish.dish_price)}/>)} */}
        </Container>
    );
}