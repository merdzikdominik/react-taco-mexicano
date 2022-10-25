import { OptionContainer } from "./OpenHoursOption.styles";

export default function OpenHoursOption({ day, time, delay }) {
    
    return (
        <OptionContainer delay={delay}>
          <span>{day}</span>
          <span>{time}</span>
        </OptionContainer>
    );
}