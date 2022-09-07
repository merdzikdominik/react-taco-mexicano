import styled from 'styled-components';
import MenuItem from "./MenuItem";
import mexicanPatternOrange from '../../assets/mexican-pattern__orange.jpg';
import mexicanPatternDarkPink from '../../assets/mexican-pattern__darkpink.jpg';
import mexicanPatternBlue from '../../assets/mexican-pattern__blue.jpg';
import mexicanPatternGreen from '../../assets/mexican-pattern__green.jpg';
import mexicanPatternYellow from '../../assets/mexican-pattern.jpg';
import mexicanPatternRed from '../../assets/mexican-pattern__red.jpg';
import mexicanPatternPurple from '../../assets/mexican-pattern__purple.jpg';

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 15px;
    font-family: 'League Spartan', sans-serif;

    @media (min-width: 1200px) {
        color: #eee;
        // border: 1px solid #000;
        border-radius: 15px;
        height: 500px;
        overflow: auto;
        
        &::-webkit-scrollbar {
            width: 1px;
        }

        &:nth-child(1){ background-image: url(${mexicanPatternOrange}); }
        &:nth-child(2){ background-image: url(${mexicanPatternDarkPink}); }
        &:nth-child(3){ background-image: url(${mexicanPatternBlue}); }
        &:nth-child(4){ background-image: url(${mexicanPatternGreen}); }
        &:nth-child(5){ background-image: url(${mexicanPatternYellow}); }
        &:nth-child(6){ background-image: url(${mexicanPatternRed}); }
        &:nth-child(7){ 
            background-image: url(${mexicanPatternPurple});
            grid-column: 1/3;
        }
    }

    @media (min-width: 1540px) {
        &:nth-child(7){ 
            grid-column: 2/3;
        }
    }
`;

const H1 = styled.h1`
    text-align: center;
`;

export default function MenuCategoryWrapper({ category, items }) {
    const dishesList = items.map((dish, index) => <MenuItem key={index} title={dish.dish_name} price={dish.dish_price}/>)

    return (
        <Container>
            <H1>{category}</H1>
            {dishesList}
        </Container>
    );
}