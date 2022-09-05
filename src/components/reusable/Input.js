import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
    // width: 100px;
    // height: auto;
    // padding: 0 50px;
    padding: ${props => props.padding ? props.padding : '0 50px'};
`;

const Label = styled.label`
    padding: 0;
`;

const CustomInput = styled.input`
    width: 200px;
    padding: 5px;
    border: none;

    &:focus {
        outline: none;
    }
`;

// const Icon = styled(FontAwesomeIcon).attrs(props => ({
//     icon: faSearch
// }))`
//     font-size: 1.7rem;
//     color: red;
//     background-color: #fff;
//     align-items: center;
//     // padding: 10px 0;
// `;

export default function Input({ id, label, input, containerPadding }) {
    return (
        <MainContainer padding={containerPadding}>
            {/* {searchIcon && <Icon icon={faSearch}/>} */}
            <Label htmlFor={id}>{label}</Label>
            <CustomInput {...input} />
        </MainContainer>
    );
}