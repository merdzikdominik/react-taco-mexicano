import styled from "styled-components";

export const SlideShowContainer = styled.div`
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 600px;

    @media (min-width: 1200px) { max-height: 650px; }
`;

export const SlideShowSlider = styled.div`
    white-space: nowrap;
    transform: translate3d(${props => props.index ? -props.index*100 : ''}%, 0, 0);
    transition: ease 1000ms;
`;

export const SlideShowDotsContainer = styled.div`
    text-align: center;
    position: relative;
    top: -40px;
    z-index: 2;

    @media (min-width: 1200px) { top: -60px; }
`;

export const SlideShowDot = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;

    @media (min-width: 1200px) {
        width: 10px;
        height: 10px;
    }
`;

export const StyledImage = styled.img`
    display: inline-block;
    background-size: cover !important;
    object-fit: cover;
    height: 600px;
    width: 100%;
    min-height: 300px;
    filter: brightness(70%);

    @media (min-width: 1200px) { height: 650px; }
`;