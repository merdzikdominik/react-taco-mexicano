import styled from "styled-components";

export const StyledButton = styled.button`
    max-width: 280px;
    position: ${props => props.styles && props.styles.position ? props.styles.position : 'absolute'};
    top: 485px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 5;
    background-color: rgb(173, 33, 24);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.styles && props.styles.padding ? props.styles.padding : '20px 40px'};
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    color: #fff;

    background-image: linear-gradient(45deg, yellow 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;

    transition: background 300ms ease-in-out;

    button { padding: 0; }

    &:hover {
        background-position: 0;
        color: #000;
        transition: 300ms ease;
    }

    @media (min-width: 1200px) {
        max-width: 300px;
        top: 530px;
    }
`;