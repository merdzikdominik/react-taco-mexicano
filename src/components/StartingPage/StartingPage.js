import { useEffect } from 'react';
import SlideShow from '../StartingPage/Slider/SlideShow';
import qualityRibbon from '../../assets/quality-ribbon.png'
import delivs from '../../assets/deliveries.png'
import charity from '../../assets/charity.png'
import { 
    MainPageContainer, 
    ContentContainer, 
    H1, 
    InfoContainer, 
    Info, 
    StyledImage, 
    Text 
} from './StartingPage.styles';

export default function StartingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <MainPageContainer  initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <SlideShow/>
            <ContentContainer>
                <H1>Dlaczego warto u nas zjeść? To proste!</H1>
                <InfoContainer>
                    <Info>
                        <StyledImage src={qualityRibbon}/>
                        <Text>
                            Zapewniamy 100% gwarancji świeżych składników, z których przygotowywane są nasze dania
                        </Text>
                    </Info>
                    <Info>
                        <StyledImage src={delivs}/>
                        <Text>
                            Dzięki współpracy ze znanymi firmami dowozowymi nie trzeba długo czekać na zamówienie
                        </Text>
                    </Info>
                    <Info>
                        <StyledImage src={charity}/>
                        <Text>
                            Zamawiając u nas jedzenie tym samym wspomagasz potrzebujących, nie tylko Ty się najesz :)
                        </Text>
                    </Info>
                </InfoContainer>
            </ContentContainer>
        </MainPageContainer>
    );
}