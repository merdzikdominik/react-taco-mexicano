import styled from "styled-components";

export const Iframe = styled.iframe`
    width: 100%;
    height: 60%;
    position: absolute;
    -webkit-box-shadow: ${props => props.$loading ? 'none' : '8px 8px 24px 0px rgba(66, 68, 90, 1)' };
    -moz-box-shadow: ${props => props.$loading ? 'none' : '8px 8px 24px 0px rgba(66, 68, 90, 1)' };
    box-shadow: ${props => props.$loading ? 'none' : '8px 8px 24px 0px rgba(66, 68, 90, 1)' };
`;