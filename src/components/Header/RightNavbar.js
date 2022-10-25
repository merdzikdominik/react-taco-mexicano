import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMobileMenuState } from "../../store/actions/action-creators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faPhone, faClock, faClipboardList, faHouse } from "@fortawesome/free-solid-svg-icons";
import CartBadge from "./CartBadge";
import { StyledUl } from "./RightNavbar.styles";

export default function RightNavbar() {
    const isHamburgerClicked = useSelector(state => state.hamburgerReducer.isClicked);
    const dispatch = useDispatch();

    const handleMenuOpening = () => {
        dispatch(changeMobileMenuState());
    }

    return (
        <>
            <StyledUl showMenu={isHamburgerClicked}>
                <li>
                    <NavLink    to='koszyk' 
                                onClick={handleMenuOpening} 
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <CartBadge/>
                        Koszyk
                    </NavLink>
                </li>
                <li>
                    <NavLink    to='zamow-do-domu' 
                                onClick={handleMenuOpening} 
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <FontAwesomeIcon icon={faHouse}/>
                        Zamów do domu
                    </NavLink>
                </li>
                <li>
                    <NavLink    to='menu' 
                                onClick={handleMenuOpening} 
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <FontAwesomeIcon icon={faClipboardList}/>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink    to='kontakt' 
                                onClick={handleMenuOpening} 
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <FontAwesomeIcon icon={faPhone}/>
                        Kontakt
                    </NavLink>
                </li>
                <li>
                    <NavLink    to='godziny-otwarcia' 
                                onClick={handleMenuOpening} 
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <FontAwesomeIcon icon={faClock}/>Godziny Otwarcia
                    </NavLink>
                </li>
                <li>
                    <NavLink    to='lokalizacja' 
                                onClick={handleMenuOpening} 
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <FontAwesomeIcon icon={faMapLocationDot}/>
                        Lokalizacja
                    </NavLink>
                </li>
            </StyledUl>
        </>
    );
}