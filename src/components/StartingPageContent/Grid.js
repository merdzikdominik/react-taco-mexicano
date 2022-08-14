import styled from 'styled-components';
import transparentVeggies from '../../assets/veggies-transparent.png'
import delivs from '../../assets/deliveries.png'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

const ContentRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

const Block = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    background-size: cover !important;

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
    }
`;
const Block2 = styled.div`
    width: 200px;
    height: 200px;
    background-color: blue;

    @media (min-width: 1200px) {
        width: 300px;
        height: 300px;
    }
`;

export default function Grid() {
    return(
        <Content>
            <ContentRow>
                <Block src={transparentVeggies}/>
                <Block2/>
            </ContentRow>
            <ContentRow>
                <Block src={delivs}/>
                <Block2/>
            </ContentRow>
        </Content>
    );
}