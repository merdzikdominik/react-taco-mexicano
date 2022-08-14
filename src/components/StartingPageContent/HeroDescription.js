import styled from 'styled-components';
import qualityRibbon from '../../assets/quality-ribbon.png'
import delivs from '../../assets/deliveries.png'
import charity from '../../assets/charity.png'

const Content = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

const ContentRow = styled.div`
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

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
    }
`;

export default function HeroDescription() {
    return(
        <Content>
            <ContentRow>
                <Image src={qualityRibbon}/>
                <Text>
                    Zapewniamy 100% gwarancje świeżych składników, z których przygotowywane są nasze dania
                </Text>
            </ContentRow>
            <ContentRow>
                <Image src={delivs}/>
                <Text>
                    Dzięki współpracy ze znanymi firmami dowozowymi nie trzeba długo czekać na zamówienie
                </Text>
            </ContentRow>
            <ContentRow>
                <Image src={charity}/>
                <Text>
                    Zamawiając u nas jedzenie tym samym wspomagasz potrzebujących, nie tylko Ty się najesz :)
                </Text>
            </ContentRow>
        </Content>
    );
}