import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   debugger
    return (
        <div className={s.loginBlock}>
            {props.isAuth 
            ? props.login
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>

    );
}

export default Header;