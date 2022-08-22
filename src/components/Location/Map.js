import styled from "styled-components";

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;

export default function Map() {
    return (
        <Iframe id="gmap_canvas" src="https://maps.google.com/maps?q=taco%20mexicano%20tarnowskie%20g%C3%B3ry&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no"></Iframe>
    );
};