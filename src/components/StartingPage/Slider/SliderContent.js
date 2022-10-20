import styled from "styled-components";
import SliderButton from "./SliderButton";

const SliderMessage = styled.div`
    position: absolute;
    top: 60px;
    z-index: 4;
    width: 100%;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'League Spartan', sans-serif;
    font-size: 1.5rem;
    line-height: 30px;
    color: #fff;

    span { padding: 0 70px; }

    @media (min-width: 350px) {
        span { font-size: 1.8rem; }
    }

    @media (min-width: 1200px) {
        top: 90px;

        span { font-size: 2rem; }
    }

`;

export default function SliderContent() {
    return (
        <>
            <SliderMessage>
                <span>
                    Najważniejszym składnikiem każdego dania jest pasja. Cieszymy się, że wraz z każdym kęsem możesz próbować piękna meksykańskiej kuchni.
                </span>
            </SliderMessage>
            <SliderButton />
        </>
    );
    
}