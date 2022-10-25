import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import Logo from './Logo';
import { NavContainer } from './Nav.styles';


export default function Nav() {
    return (
        <NavContainer>
            <Link to='/'><Logo/></Link>
            <Hamburger/>
        </NavContainer>
    );
}