import styled from "styled-components";
import Map from "./Map";

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MapContainer = styled.div`
    width: 500px;
    height: 500px;
`;

export default function Location() {
    return (
        <MainContainer>
            <MapContainer>
                <Map />
            </MapContainer>
        </MainContainer>
    );
}