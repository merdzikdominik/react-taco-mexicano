import styled from "styled-components";

const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Page404() {
    return (
        <MainContainer>
            <h1>NO PAGE FOUND</h1>
        </MainContainer>
    );
}