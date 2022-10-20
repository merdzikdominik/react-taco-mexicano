import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import PaginatedItems from './PaginatedItems';
import useDishes from '../../hooks/useDishes';
import Input from '../reusable/Input';
import mexicanPatternGreen from '../../assets/mexican-pattern__green.jpg';
import mexicanStuff from '../../assets/mexican-sfuff.png';

const MainPageContainer = styled(motion.section)`
    background-image: url(${mexicanStuff});
    width: 100%;
    padding: 0 10px;
    min-height: 100vh !important; 
    overflow: auto;

    @media (min-width: 1200px) { padding: 0; }
`;

const MenuContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    margin: 140px auto;
    gap: 2px;
    border-radius: 20px;
    background-image: url(${mexicanPatternGreen});
    position: relative;
    z-index: 3;
    -webkit-box-shadow: -7px 4px 24px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: -7px 4px 24px -12px rgba(66, 68, 90, 1);
    box-shadow: -7px 4px 24px -12px rgba(66, 68, 90, 1);

    @media (min-width: 1200px) { max-width: 800px; }
`;

const MenuHeaderContainer = styled.div`
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
    color: #fff;
    
    @media (min-width: 1200px) { text-align: right; }
`;

const SearchIcon = styled(FontAwesomeIcon)`
    color: #000;
    background-color: #fff;
    align-items: center;
    padding: 9px;
`;

const Filter = styled.div`
    display: flex;
    padding: 0 50px;
`;

export default function OrderHomeMenu() {
    const dishes = useDishes();
    const [searchedDish, setSearchedDish] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const handleGetSearchedDish = (event) => {
        setSearchedDish(event.target.value);
    }

    return (
        <MainPageContainer  initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <MenuContainer>
                <MenuHeaderContainer>
                    <H1>Na co masz dziś ochotę?</H1>
                        <Filter>
                            <SearchIcon icon={faSearch}/>    
                            <Input  input={{
                                        id: 'filter',
                                        type: 'text',
                                        placeholder: 'Wyszukaj danie',
                                        onChange: handleGetSearchedDish,
                                    }}
                                    styles={{
                                        containerPadding: '0'
                                    }}
                            />
                        </Filter>
                </MenuHeaderContainer>
                <PaginatedItems itemsPerPage={7} items={dishes} searchedDish={searchedDish}/>
            </MenuContainer>
        </MainPageContainer>
    );
}