import styled from 'styled-components';
import Hamburger from './Hamburger';
import Logo from './Logo';

const StyledNav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #3E3E3E;
    display: flex;
    position: fixed;
    z-index: 1000;

    @media (min-width: 1200px) {
        justify-content: space-between;
    }
`;

export default function Nav() {


    return (
        <StyledNav>
            <Logo/>
            <Hamburger/>
        </StyledNav>
    );
}