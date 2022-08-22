import styled from 'styled-components';
import MenuItem from "./MenuItem";

const Container = styled.div`
    widht: 100%;
    padding: 30px;
    background-color: blue;
`;

export default function MenuCategoryWrapper({ category, items }) {
    const dishesList = items.map((dish, index) => <MenuItem key={index} title={dish.dish_name} price={dish.dish_price}/>)

    return (
        <Container>
            <h1>{category}</h1>
            {dishesList}
        </Container>
    );
}