import { StyledButton } from "./Button.styles"

export default function Button({ type, content, styles }) {
    return <StyledButton type={type ? type : 'button'} styles={styles}>{content}</StyledButton>
}