import { useState } from "react";
import styled from "styled-components";
import Loader from "../reusable/Loader";

const Iframe = styled.iframe`
    width: 100%;
    height: 60%;
    position: absolute;
    -webkit-box-shadow: ${props => props.$loading ? 'none' : '8px 8px 24px 0px rgba(66, 68, 90, 1)' };
    -moz-box-shadow: ${props => props.$loading ? 'none' : '8px 8px 24px 0px rgba(66, 68, 90, 1)' };
    box-shadow: ${props => props.$loading ? 'none' : '8px 8px 24px 0px rgba(66, 68, 90, 1)' };
`;

export default function Map({onIsLoading}) {
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     console.log(isLoading);
    // }, [isLoading])

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
