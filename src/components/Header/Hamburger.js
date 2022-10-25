import { useDispatch, useSelector } from 'react-redux';
import { changeMobileMenuState } from '../../store/actions/action-creators';
import RightNavbar from './RightNavbar';
import { StyledHamburger } from './Hamburger.styles';

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