import styled from 'styled-components';
import logo from '../../assets/logo-copy2.png';

const StyledLogo = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 999;
    left: 10px;

    @media (min-width: 1200px) {
        padding: 0 10px;
        width: 150px;
        height: 150px;
    }
`;

export default function Logo() {
    return (
        <div>
            <StyledLogo src={logo}/>
        </div>
    );
}