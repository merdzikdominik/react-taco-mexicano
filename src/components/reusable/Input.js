import styled from "styled-components";

const MainContainer = styled.div`
    padding: ${props => props.padding ? props.padding : '0 50px'};
`;

const CustomInput = styled.input`
    max-width: 600px;
    width: 100%;
    padding: 5px;
    border: none;

    &:focus { outline: none; }
`;

export default function Input({ input, containerPadding }) {
    return (
        <MainContainer padding={containerPadding}>
            <CustomInput {...input} />
        </MainContainer>
    );
}