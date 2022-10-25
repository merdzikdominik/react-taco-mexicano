import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #3E3E3E;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1000;

    @media (min-width: 1200px) { justify-content: space-around; }
`;