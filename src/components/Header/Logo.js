import styled from 'styled-components';
import logo from '../../assets/logo-copy2.png';

const LogoContainer = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 999;

    @media (min-width: 1200px) {
        position: relative;
        left: 0;
        width: 115px;
        height: 115px;
    }
`;

const LogoImage = styled.img`
    width: inherit;
    height: inherit;
`;

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo}/>
        </LogoContainer>
    );
}