import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartBadge from "./CartBadge";
import { changeMobileMenuState } from "../../store/actions/action-creators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faPhone, faClock, faClipboardList, faHouse } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import mexicanPattern from '../../assets/mexican-pattern.jpg';

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    justify-content: center;
    z-index: 1000;
    width: 250px;
    height: 100%;
    font-size: 1.2rem;
    font-family: 'League Spartan', sans-serif;
    position: fixed;
    top: 0;
    background-color: #FFBC23;
    background-image: url(${mexicanPattern});
    right: ${props => props.showMenu ? '0' : '-150'}%;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: -9px 8px 11px -7px rgba(66, 68, 90, 1);
    -moz-box-shadow: -9px 8px 11px -7px rgba(66, 68, 90, 1);
    box-shadow: -9px 8px 11px -7px rgba(66, 68, 90, 1);

    li {
        width: 90%;
        padding: 7% 0;
        color: #FFBC23;
        border-bottom: 1px solid #333;

        &:nth-child(6) { border: none; }
    }

    a {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        color: #fff;
        text-decoration: none;
    }

    @-webkit-keyframes move {
        from { mask-position: 2px 19px; }
        to { mask-position: 500px 19px; }
    }
        
    @keyframes move {
        from { mask-position: 2px 19px; }
        to { mask-position: 500px 19px; }
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        background-color: initial;
        background-image: none;
        width: initial;
        height: initial;
        padding: 0 100px;
        position: relative;
        right: 0 !important;
        box-shadow: none;

        li {
            padding: 0 15px;
            color: #fff;
            border: none;
        }

        a {
            flex-direction: row;
            position: relative;
            transition: all 0.15s ease-out;
            gap: 10px;

            &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                bottom: 0;
                left: 0;
                background-color: yellow;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all .5s cubic-bezier(1,.25,0,.75) 0s;
                transition: all .5s cubic-bezier(1,.25,0,.75) 0s;
            }

            &:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }

        }

    }
`;

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
                    <NavLink to='koszyk' onClick={handleMenuOpening}><CartBadge/>Koszyk</NavLink>
                </li>
                <li>
                    <NavLink to='zamow-do-domu' onClick={handleMenuOpening}><FontAwesomeIcon icon={faHouse}/>Zamów do domu</NavLink>
                </li>
                <li>
                    <NavLink to='menu' onClick={handleMenuOpening}><FontAwesomeIcon icon={faClipboardList}/>Menu</NavLink>
                </li>
                <li>
                    <NavLink to='kontakt' onClick={handleMenuOpening}><FontAwesomeIcon icon={faPhone}/>Kontakt</NavLink>
                </li>
                <li>
                    <NavLink to='godziny-otwarcia' onClick={handleMenuOpening}><FontAwesomeIcon icon={faClock}/>Godziny Otwarcia</NavLink>
                </li>
                <li>
                    <NavLink to='lokalizacja' onClick={handleMenuOpening}><FontAwesomeIcon icon={faMapLocationDot}/>Lokalizacja</NavLink>
                </li>
            </StyledUl>
        </>
    );
}