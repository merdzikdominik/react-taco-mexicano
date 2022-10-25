import styled from "styled-components";

export const MainContainer = styled.div`
    padding: ${props => props.styles && props.styles.containerPadding ? props.styles.containerPadding : '0 50px'};
`;

export const CustomInput = styled.input`
    max-width: ${props => props.styles && props.styles.width ? props.styles.width : '600px'};
    width: 100%;
    padding: ${props => props.styles && props.styles.padding ? props.styles.padding : '5px'};
    border: none;
    border-radius: ${props => props.styles && props.styles.borderRadius ? props.styles.borderRadius : 'none'};

    &:focus { outline: none; }
`;