// import { useState } from 'react';
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import mexicanPattern from '../../assets/mexican-pattern.jpg';
// import Cart from '../Cart/Cart';

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
    height: 100vh;
    font-size: 1.2rem;
    font-family: 'League Spartan', sans-serif;
    position: fixed;
    top: 0;
    background-color: #FFBC23;
    background-image: url(${mexicanPattern});
    right: ${props => props.theme.right}%;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: -9px 8px 11px -7px rgba(66, 68, 90, 1);
    -moz-box-shadow: -9px 8px 11px -7px rgba(66, 68, 90, 1);
    box-shadow: -9px 8px 11px -7px rgba(66, 68, 90, 1);

    li {
        width: 90%;
        padding: 35px 0;
        color: #FFBC23;
        border-bottom: 1px solid #333;

        &:nth-child(6) {
            border: none;
        }
    }

    // .shopping-cart {
    //     color: #fff;
    //     font-size: 40px;
    // }

    a {
        font-weight: 400;
        color: #fff;
        text-decoration: none;
        padding-bottom: 10px;

        &:hover {
            background: url("https://ewebdesign.com/wp-content/themes/ewebdesign/assets/img/wave.svg");
            background-repeat: repeat-x;
            background-size: 15px 5px; 
            background-position: 2px 19px;
            background-color: transparent;
            animation: move 15s linear infinite;
            -webkit-animation: move 15s linear infinite;
            -webkit-text-decoration-skip: objects;
        }
    }

    @-webkit-keyframes move {
        from {
            background-position: 2px 19px;
        }
          to {
            background-position: 500px 19px;
        }
    }
        
    @keyframes move {
        from {
            background-position: 2px 19px;
        }
        to {
            background-position: 500px 19px;
        }
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

        .shopping-cart {
            color: #fff;
            font-size: 25px;
        }

        a:hover {
            filter: brightness(0) saturate(100%) invert(76%) sepia(99%) saturate(1703%) hue-rotate(338deg) brightness(102%) contrast(101%);
        }
    }
`;

export default function RightNavbar() {
    return (
        <>
            <StyledUl>
                <li>
                    <Link to='koszyk'><CartBadge/></Link>
                </li>
                <li>
                    <Link to='zamow-do-domu'>Zamów do domu</Link>
                </li>
                <li>
                    <Link to='menu'>Menu</Link>
                </li>
                <li>
                    <Link to='kontakt' >Kontakt</Link>
                </li>
                <li>
                    <Link to='godziny-otwarcia' >Godziny Otwarcia</Link>
                </li>
                <li>
                    <Link to='lokalizacja' >Lokalizacja</Link>
                </li>
            </StyledUl>
        </>
    );
}