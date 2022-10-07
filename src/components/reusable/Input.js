import styled from "styled-components";

const MainContainer = styled.div`
    padding: ${props => props.styles && props.styles.containerPadding ? props.styles.containerPadding.padding : '0 50px'};
`;

const CustomInput = styled.input`
    max-width: ${props => props.styles && props.styles.width ? props.styles.width : '600px'};
    width: 100%;
    padding: ${props => props.styles && props.styles.padding ? props.styles.padding : '5px'};
    border: none;
    border-radius: ${props => props.styles && props.styles.borderRadius ? props.styles.borderRadius : 'none'};

    &:focus { outline: none; }
`;

export default function Input({ input, containerPadding, styles }) {
    return (
        <MainContainer styles={styles}>
            <CustomInput {...input} styles={styles}/>
        </MainContainer>
    );
}