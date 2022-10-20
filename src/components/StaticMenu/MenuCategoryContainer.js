import styled from 'styled-components';
import MenuItem from "./MenuItem";
import mexicanPatternOrange from '../../assets/mexican-pattern__orange.jpg';
import mexicanPatternDarkPink from '../../assets/mexican-pattern__darkpink.jpg';
import mexicanPatternBlue from '../../assets/mexican-pattern__blue.jpg';
import mexicanPatternGreen from '../../assets/mexican-pattern__green.jpg';
import mexicanPatternYellow from '../../assets/mexican-pattern.jpg';
import mexicanPatternRed from '../../assets/mexican-pattern__red.jpg';
import mexicanPatternPurple from '../../assets/mexican-pattern__purple.jpg';

const Content = styled.article`
    width: 100%;
    max-width: 500px;
    padding: 15px;
    font-family: 'League Spartan', sans-serif;

    @media (min-width: 1200px) {
        color: #eee;
        border-radius: 15px;
        height: 500px;
        overflow: auto;
        -webkit-box-shadow: -3px 7px 18px -3px rgba(66, 68, 90, 1);
        -moz-box-shadow: -3px 7px 18px -3px rgba(66, 68, 90, 1);
        box-shadow: -3px 7px 18px -3px rgba(66, 68, 90, 1);
        
        &::-webkit-scrollbar {
            height: 12px;
            width: 12px;
            background: #fff;
        }
        
        &::-webkit-scrollbar-thumb {
            background: #eee;
            -webkit-border-radius: 1ex;
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
        }
        
        &::-webkit-scrollbar-corner { background: #000; }

        &:nth-child(1) { background-image: url(${mexicanPatternOrange}); }
        &:nth-child(2) { background-image: url(${mexicanPatternDarkPink}); }
        &:nth-child(3) { background-image: url(${mexicanPatternBlue}); }
        &:nth-child(4) { background-image: url(${mexicanPatternGreen}); }
        &:nth-child(5) { background-image: url(${mexicanPatternYellow}); }
        &:nth-child(6) { background-image: url(${mexicanPatternRed}); }
        &:nth-child(7) { background-image: url(${mexicanPatternPurple}); }

        &:last-child:nth-child(3n - 2) { grid-column-end: 3; }
    }
`;

const H1 = styled.h1`
    text-align: center;
`;

export default function MenuCategoryContainer({ category, items }) {
    const dishesList = items.map((dish, index) => <MenuItem key={index} title={dish.dish_name} price={dish.dish_price}/>);

    return (
        <Content>
            <H1>{category}</H1>
            {dishesList}
        </Content>
    );
}