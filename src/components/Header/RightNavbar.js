import styled from "styled-components";

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

        &:nth-child(4) {
            border: none;
        }
    }

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
        width: initial;
        height: initial;
        padding: 10px;
        position: relative;
        right: 0 !important;
        box-shadow: none;

        li {
            padding: 25px 10px;
            color: #fff;
            border: none;
        }

        a:hover {
            filter: brightness(0) saturate(100%) invert(76%) sepia(99%) saturate(1703%) hue-rotate(338deg) brightness(102%) contrast(101%);
        }
    }
`;

export default function RightNavbar() {
    return (
        <StyledUl>
            <li>
                <a href='www.google.com'>Menu</a>
            </li>
            <li>
                <a href='www.google.com'>Kontakt</a>
            </li>
            <li>
                <a href='www.google.com'>Godziny Otwarcia</a>
            </li>
            <li>
                <a href='www.google.com'>Lokalizacja</a>
            </li>
        </StyledUl>
    );
}