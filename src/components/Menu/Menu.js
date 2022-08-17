import styled from 'styled-components';
import PaginatedItems from './Pagination';

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 80px auto;
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

export default function Menu() {
    return (
        <MenuContainer>
            <h1>Menu</h1>
            <PaginatedItems itemsPerPage={9}/>
            
        </MenuContainer>
    );
}