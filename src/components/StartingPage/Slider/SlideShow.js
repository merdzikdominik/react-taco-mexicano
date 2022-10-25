import { useState, useEffect, useRef } from "react";
import { SLIDER_DATA } from "../../../constants";
import SliderContent from "./SliderContent";
import { 
    SlideShowContainer, 
    SlideShowSlider, 
    StyledImage, 
    SlideShowDotsContainer, 
    SlideShowDot 
} from "./SlideShow.styles";

export default function SlideShow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const resetTimeout = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIndex(prev => prev === SLIDER_DATA.length - 1 ? 0 : prev + 1)
        }, 2500);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <SlideShowContainer>
            <SliderContent/>
            <SlideShowSlider index={index}>
                {SLIDER_DATA.map((photo, index) => <StyledImage  className='slide' 
                                                                key={index} 
                                                                src={photo.image} 
                                                                alt={photo.alt}/>)}
            </SlideShowSlider>
            <SlideShowDotsContainer>
                {SLIDER_DATA.map((_, imageIndex) => <SlideShowDot    key={imageIndex} 
                                                                    style={{backgroundColor: index === imageIndex ? '#FFBC23' : '#c4c4c4'}} 
                                                                    onClick={() => setIndex(imageIndex)}></SlideShowDot>)}
            </SlideShowDotsContainer>
        </SlideShowContainer>
    );
}