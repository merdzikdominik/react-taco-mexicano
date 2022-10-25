import styled from "styled-components";
import mexicanStuff from '../../assets/mexican-sfuff.png';
import bluredMap from '../../assets/blured_map_background.jpg';

export const MainPageContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    background-image: url(${props => props.$loading ? mexicanStuff : bluredMap }); 
    background-size: ${props => props.$loading ? 'auto' : 'cover'};
    display: flex;
    justify-content: center;
    align-items: center;
`;