import styled from 'styled-components';
import PaginatedItems from './PaginatedItems';
import useDishes from '../../hooks/useDishes';

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 140px auto;
    gap: 10px;
    background-color: #eee;

    h1 {
        text-align: right;
        padding: 0 50px;
    }

    @media (min-width: 1200px) {
        width: 800px;
    }
`;

export default function OrderHomeMenu() {
    const dishes = useDishes();
    
    // console.log(dishes[0].slice(1, 4));

    return (
        <MenuContainer>
            <h1>Menu</h1>
            <PaginatedItems itemsPerPage={7} items={dishes}/>
        </MenuContainer>
    );
}