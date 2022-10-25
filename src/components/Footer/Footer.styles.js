import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: normal;
    font-family: 'League Spartan', sans-serif;
    position: relative;
    z-index: 7;

    span { padding: 30px 0; }

    @media (min-width: 380px) {
        justify-content: space-between;
        padding: 0 70px;
    }
`;