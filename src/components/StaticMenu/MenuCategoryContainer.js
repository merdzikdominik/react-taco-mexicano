import MenuItem from "./MenuItem";
import { 
    H1, 
    Content 
} from './MenuCategoryContainer.styles';

export default function MenuCategoryContainer({ category, items }) {
    const dishesList = items.map((dish, index) => <MenuItem key={index} title={dish.dish_name} price={dish.dish_price}/>);

    return (
        <Content>
            <H1>{category}</H1>
            {dishesList}
        </Content>
    );
}