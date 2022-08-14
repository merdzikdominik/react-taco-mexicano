import styled from 'styled-components';
import Grid from './Grid';

const Content = styled.section`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'League Spartan', sans-serif;
    font-size: 1.4rem;
    line-height: 30px;

    @media (min-width: 1200px) {
        font-size: 1.6rem;
    }
`;

const Header = styled.h2`
    text-align: center;
`

export default function StartingPageContent() {
    return (
        <Content>
            <Header>Dlaczego warto u nas zjeść? To proste!</Header>
            <Grid/>
        </Content>
    );
}