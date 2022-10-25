import logo from '../../assets/logo-copy2.png';
import { 
    LogoContainer, 
    LogoImage 
} from './Logo.styles';

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo}/>
        </LogoContainer>
    );
}