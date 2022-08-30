import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: normal;
    font-family: 'League Spartan', sans-serif;
    // position: fixed;
    // left:0;
    // bottom:0;
    // right:0;

    span {
        padding: 30px 0;
    }

    @media (min-width: 380px) {
        justify-content: space-between;
        padding: 0 70px;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <span><b>&copy; Taco Mexicano</b> | All rights reserved </span>
        </StyledFooter>
    );
}