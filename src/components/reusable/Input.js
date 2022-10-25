import { 
    MainContainer, 
    CustomInput 
} from "./Input.styles";

export default function Input({ input, containerPadding, styles }) {
    return (
        <MainContainer styles={styles}>
            <CustomInput {...input} styles={styles}/>
        </MainContainer>
    );
}