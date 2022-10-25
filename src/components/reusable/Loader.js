import { 
    MainContainer, 
    Taco, 
    LoadingText 
} from "./Loader.styles";

export default function Loader() {
    return (
        <MainContainer>
            <Taco/>
            <LoadingText>Ładowanie... Proszę czekać</LoadingText>
        </MainContainer>
    );
}