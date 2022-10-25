import { 
    Content, 
    Dishes, 
    Price 
} from "./MenuItem.styles";

export default function MenuItem({ title, price }) {
    return (
        <Content>
            <Dishes>
                <span>{title}</span>
            </Dishes>
            <Price>
                <span>{price} zł</span>
            </Price>
        </Content>
    );
}