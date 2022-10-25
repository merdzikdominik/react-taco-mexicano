import { useState, useEffect } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PaginatedItems from './PaginatedItems';
import useDishes from '../../hooks/useDishes';
import Input from '../reusable/Input';
import { 
    MainPageContainer, 
    MenuContainer, 
    MenuHeaderContainer, 
    H1, 
    Filter, 
    SearchIcon 
} from './OrderHomeMenu.styles';

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