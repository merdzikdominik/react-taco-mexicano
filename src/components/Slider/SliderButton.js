import styled from 'styled-components';

const Button = styled.button`
    width: 280px;
    position: absolute;
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
    padding: 20px 40px;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    color: #fff;

    background-image: linear-gradient(45deg, yellow 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    
    transition: background 300ms ease-in-out;
    
    &:hover {
        background-position: 0;
        color: #000;
        transition: 300ms ease;
    }

    @media (min-width: 1200px) {
        width: 300px;
        top: 530px;
    }
`;

export default function SliderButton() {
    return (
        <Button>Zamów teraz</Button>
    );
}