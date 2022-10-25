import SliderButton from "./SliderButton";
import { SliderMessage } from "./SliderContent.styles";


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