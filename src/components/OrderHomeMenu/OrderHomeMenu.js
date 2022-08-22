import styled from 'styled-components';
import PaginatedItems from './PaginatedItems';
import useDishes from '../../hooks/useDishes';
import Input from '../reusable/Input';
import { useState } from 'react';

const MenuContainer = styled.section`
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

const MenuHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 30px;
`;

export default function OrderHomeMenu() {
    const dishes = useDishes();
    const [searchedDish, setSearchedDish] = useState('');
    
    const handleGetSearchedDish = (event) => {
        setSearchedDish(event.target.value);
    }

    return (
        <MenuContainer>
            <MenuHeaderSection>
                <Input  label='Order' 
                        input={{
                            id: 'amount_',
                            type: 'text',
                            placeholder: 'Wprowadź danie',
                            onChange: handleGetSearchedDish
                        }}
                />
                <H1>Na co masz dziś ochotę?</H1>
            </MenuHeaderSection>
            <PaginatedItems itemsPerPage={7} items={dishes} searchedDish={searchedDish}/>
        </MenuContainer>
    );
}