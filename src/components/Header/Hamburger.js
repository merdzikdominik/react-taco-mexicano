import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import RightNavbar from './RightNavbar';
import { changeMobileMenuState } from '../../store/actions/action-creators';
import { ThemeProvider } from 'styled-components';

const StyledHamburger = styled.div`
    width: 20px;
    height: 20px;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 1001;
    cursor: pointer;

    div {
        width: 20px;
        height: 3px;
        background-color: ${props => props.clicked ? '#000' : '#fff'};
        margin: 3px 0;
        transform-origin: 1px;
        transition: all 0.1s linear;

        &:nth-child(1) {
            transform: ${props => props.clicked ? 'rotate(45deg)' : 'rotate(0)'};
          }

        &:nth-child(2) {
            transform: ${props => props.clicked ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${props => props.clicked ? 0 : 1};
          }

        &:nth-child(3) {
            transform: ${props => props.clicked ? 'rotate(-45deg)' : 'rotate(0)'};
          }
    }

    @media (min-width: 1200px) {
        display: none;
    }
`;

// const burgerEnabledTheme = {
//     right: '0'
// };

// const burgerDisabledTheme = {
//     right: '-150',
// };

export default function Hamburger(props) {
    const burgerClicked = useSelector(state => state.hamburgerReducer.isClicked);
    const dispatch = useDispatch();
    
    const handleBurger = () => {
        dispatch(changeMobileMenuState());
    }

    return (
        <>
            <StyledHamburger onClick={handleBurger} clicked={burgerClicked}>
                <div/>
                <div/>
                <div/>
            </StyledHamburger>
            <RightNavbar/>
        </>
    );
}