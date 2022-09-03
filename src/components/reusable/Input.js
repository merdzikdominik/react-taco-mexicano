import styled from "styled-components";

const MainContainer = styled.div`
    // width: 100px;
    // height: auto;
    padding: 0 50px;
`;

const Label = styled.label`
    padding: 0;
`;

const CustomInput = styled.input`
    width: 200px;
    padding: 5px;
    border: none;
`;

export default function Input({ id, label, input }) {
    return (
        <MainContainer>
            <Label htmlFor={id}>{label}</Label>
            <CustomInput {...input} />
        </MainContainer>
    );
}