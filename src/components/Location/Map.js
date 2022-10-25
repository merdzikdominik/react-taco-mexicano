import { useState } from "react";
import styled from "styled-components";
import Loader from "../reusable/Loader";
import { Iframe } from "./Map.styles";

export default function Map({onIsLoading}) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingMap = () => {
        setIsLoading(false); 
        onIsLoading(false);
    }

    return (
        <>
            {isLoading && <Loader />}
            <Iframe id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=taco%20mexicano%20tarnowskie%20g%C3%B3ry&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    scrolling="no" 
                    onLoad={handleLoadingMap}
                    $loading={isLoading}
            />
        </>
    );
};
