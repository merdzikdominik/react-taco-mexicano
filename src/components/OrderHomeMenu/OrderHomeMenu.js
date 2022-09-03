import styled from 'styled-components';
import PaginatedItems from './PaginatedItems';
import useDishes from '../../hooks/useDishes';
import Input from '../reusable/Input';
import { useState } from 'react';
// import VideoBackground from './VideoBackground';
import mexicanStuff from '../../assets/mexican-sfuff.png';
// import BrownStripe from './BrownStripe';

const Menu = styled.section`
    background-image: url(${mexicanStuff});
    width: 100%;
    min-height: 100vh;
    overflow: auto;
`;

const MenuContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    margin: 140px auto;
    gap: 2px;
    border-radius: 20px;
    background-color: rgba(222,222,222,0.3);
    position: relative;
    z-index: 3;

    @media (min-width: 1200px) {
        max-width: 800px;
    }
`;

const MenuHeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media (min-width: 1200px) {
        justify-content: space-between;
        flex-direction: row-reverse;
    }
`;

const H1 = styled.h1`
    font-family: 'League Spartan', sans-serif;
    font-size: 30px;
    text-align: center;
    padding: 0 50px;
    margin: 0;
    color: #000;
    
    @media (min-width: 1200px) {
        text-align: right;
    }
`;

export default function OrderHomeMenu() {
    const dishes = useDishes();
    const [searchedDish, setSearchedDish] = useState('');
    
    const handleGetSearchedDish = (event) => {
        setSearchedDish(event.target.value);
    }

    return (
        <Menu>
            <MenuContainer>
                <MenuHeaderSection>
                    <H1>Na co masz dziś ochotę?</H1>
                    <Input  label='' 
                            input={{
                                id: 'filter',
                                type: 'text',
                                placeholder: 'Wyszukaj danie',
                                onChange: handleGetSearchedDish,
                                style: { borderRadius: '5px' }
                            }}
                    />
                </MenuHeaderSection>
                <PaginatedItems itemsPerPage={7} items={dishes} searchedDish={searchedDish}/>
            </MenuContainer>
        </Menu>
    );
}