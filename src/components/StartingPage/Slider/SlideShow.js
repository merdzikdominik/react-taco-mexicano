import styled from "styled-components";
import { sliderData } from "../../../slider-data";
import { ThemeProvider } from "styled-components";
import { useState, useEffect, useRef } from "react";
import SliderContent from "./SliderContent";

const StyledSlideShow = styled.section`
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 600px;

    @media (min-width: 1200px) {
        max-height: 650px;
    }
`;

const StyledSlideShowSlider = styled.div`
    white-space: nowrap;
    transform: translate3d(${props => props.theme.index}%, 0, 0);
    transition: ease 1000ms;
`;

const StyledSlideShowDots = styled.div`
    text-align: center;
    position: relative;
    top: -40px;
    z-index: 2;

    @media (min-width: 1200px) {
        top: -60px;
    }
`;

const StyledSlideShowDot = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;

    @media (min-width: 1200px) {
        width: 10px;
        height: 10px;
    }
`;

const StyledImage = styled.img`
    display: inline-block;
    background-size: cover !important;
    object-fit: cover;
    height: 600px;
    width: 100%;
    min-height: 300px;
    filter: brightness(70%);

    @media (min-width: 1200px) {
        height: 650px;
    }
`;

const slideTheme = (index) => {
    return {
        index: -index * 100,
        backgroundColor: '#6a0dad'
    };
}

export default function SlideShow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const resetTimeout = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }

        resetTimeout();

        timeoutRef.current = setTimeout(() => {
            setIndex(prev => prev === sliderData.length - 1 ? 0 : prev + 1)
        }, 2500);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <ThemeProvider theme={slideTheme(index)}>
            <StyledSlideShow>
                <SliderContent/>
                <StyledSlideShowSlider>
                    {sliderData.map((photo, index) => <StyledImage className='slide' key={index} src={photo.image} alt='picture'/>)}
                </StyledSlideShowSlider>
                <StyledSlideShowDots>
                    {sliderData.map((_, imageIndex) => <StyledSlideShowDot key={imageIndex} style={{backgroundColor: index === imageIndex ? '#FFBC23' : '#c4c4c4'}} onClick={() => setIndex(imageIndex)}></StyledSlideShowDot>)}
                </StyledSlideShowDots>
            </StyledSlideShow>
        </ThemeProvider>
    );
}