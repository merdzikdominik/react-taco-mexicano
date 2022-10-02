import { useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import mexicanStuff from '../../assets/mexican-sfuff.png';
import bluredMap from '../../assets/blured_map_background.jpg';

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    // background-image: url(${mexicanStuff});
    // background-image: url(${bluredMap});
    background-image: url(${props => props.loading ? mexicanStuff : bluredMap }); 
    background-size: ${props => props.loading ? 'auto' : 'cover'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Location() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = (loading) => {
        setIsLoading(loading);
    }

    return (
        <MainContainer loading={isLoading}>
            <Map onIsLoading={handleLoading}/>
        </MainContainer>
    );
}