import styled from "styled-components";
import Map from "./Map";
import mexicanStuff from '../../assets/mexican-sfuff.png';

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    background-image: url(${mexicanStuff});
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Location() {
    return (
        <MainContainer>
            <Map />
        </MainContainer>
    );
}