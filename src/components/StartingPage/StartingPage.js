import styled from 'styled-components';
import SlideShow from '../StartingPage/Slider/SlideShow';
import qualityRibbon from '../../assets/quality-ribbon.png'
import delivs from '../../assets/deliveries.png'
import charity from '../../assets/charity.png'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'League Spartan', sans-serif;
    background-color: #F3F3F3;
`;

const InfoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    line-height: 30px;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    background-size: cover !important;

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
    }
`;

const Text = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.4rem;

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
        font-size: 1.6rem;
    }
`;

const Header = styled.h1`
    text-align: center;
    padding: 20px 0;
`

export default function StartingPage() {
    return (
        <>
            <SlideShow/>
            <Content>
                <Header>Dlaczego warto u nas zjeść? To proste!</Header>
                <InfoContainer>
                    <Info>
                        <Image src={qualityRibbon}/>
                        <Text>
                            Zapewniamy 100% gwarancji świeżych składników, z których przygotowywane są nasze dania
                        </Text>
                    </Info>
                    <Info>
                        <Image src={delivs}/>
                        <Text>
                            Dzięki współpracy ze znanymi firmami dowozowymi nie trzeba długo czekać na zamówienie
                        </Text>
                    </Info>
                    <Info>
                        <Image src={charity}/>
                        <Text>
                            Zamawiając u nas jedzenie tym samym wspomagasz potrzebujących, nie tylko Ty się najesz :)
                        </Text>
                    </Info>
                </InfoContainer>
            </Content>
        </>
    );
}