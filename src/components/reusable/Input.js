import styled from "styled-components";

const MainContainer = styled.div`
    padding: ${props => props.styles && props.styles.containerPadding ? props.styles.containerPadding.padding : '0 50px'};
`;

const CustomInput = styled.input`
    max-width: 600px;
    width: 100%;
    padding: ${props => props.styles && props.styles.padding ? props.styles.padding : '5px'};
    border: none;

    &:focus { outline: none; }
`;

export default function Input({ input, containerPadding, styles }) {
    return (
        <MainContainer padding={containerPadding} styles={styles}>
            <CustomInput {...input} styles={styles}/>
        </MainContainer>
    );
}