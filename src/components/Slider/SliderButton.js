import styled from 'styled-components';

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: rgb(173, 33, 24);
    border: none;
    font-family: 'League Spartan', sans-serif;
    font-size: 1.1rem;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    z-index: 5;
    top: 455px;
    margin: 0 auto;
    left: 0;
    right: 0;

    @media (min-width: 1200px) {
        width: 300px;
        top: 600px;
    }
`;

export default function SliderButton() {
    return (
        <Button>Zamów teraz</Button>
    );
}