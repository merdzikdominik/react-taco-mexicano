import { useEffect } from "react";
import { OPEN_HOURS_POSITIONS } from "../../constants";
import OpenHoursOption from "./OpenHoursOption";
import { 
    MainPageContainer, 
    H1, 
    DayContainer 
} from "./OpenHours.styles";

export default function OpenHours() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const openHoursTabs = OPEN_HOURS_POSITIONS.map(day => <OpenHoursOption  key={day.id} 
                                                                            day={day.day} 
                                                                            time={day.time} 
                                                                            delay={day.delay}
                                                         />);

    return (
        <MainPageContainer  initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <H1>Kiedy jesteśmy otwarci?</H1>
            <DayContainer>
                {openHoursTabs}
            </DayContainer>
        </MainPageContainer>
    );
}