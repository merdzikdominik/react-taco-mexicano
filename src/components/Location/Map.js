import { useState } from "react";
import styled from "styled-components";
import Loader from "../reusable/Loader";

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
`;

export default function Map() {
    const [isLoading, setIsLoading] = useState(true);

    const handleHideSpinner = () => setIsLoading(false); 

    return (
        <>
            {isLoading && <Loader />}
            <Iframe id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=taco%20mexicano%20tarnowskie%20g%C3%B3ry&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    scrolling="no" 
                    onLoad={handleHideSpinner}
            />
        </>
    );
};