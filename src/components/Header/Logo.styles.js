import styled from 'styled-components';

export const LogoContainer = styled.div`
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

export const LogoImage = styled.img`
    width: inherit;
    height: inherit;
`;