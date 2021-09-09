import { Route } from 'react-router';
import s from './Header.module.css';
import NavBarLinks from '../NavBar/NavBarLinks';
import App from '../../App'

const Header = () => {
    let a = <img src='https://i059.radikal.ru/1002/6c/8fe903fbb652.jpg' alt='котейка' />;
    return (
        <div className={s.image}>
            <NavBarLinks link='/' linkname={a} />

        </div>
    );
}

export default Header;