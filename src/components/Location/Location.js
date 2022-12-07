import { useState } from "react";
import Map from "./Map";
import { MainPageContainer } from "./Location.styles";

export default function Location() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = (loading) => {
        setIsLoading(loading);
    }

    return (
        <MainPageContainer $loading={isLoading}>
            <Map onIsLoading={handleLoading}/>
        </MainPageContainer>
    );
}