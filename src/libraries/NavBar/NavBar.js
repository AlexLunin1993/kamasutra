import NavBarLinks from './NavBarLinks.js';
import styles from './Links.module.css';

const NavBar = () => {
    return (
        <div className={styles.Links}>
            <NavBarLinks link='/profile' linkname='Моя страница' />
            <NavBarLinks link='/dialoges' linkname='Мои сообщения' />
            <NavBarLinks link='/newsfeed' linkname='Новости' />
            <NavBarLinks link='/settings' linkname='Настройки' /> 
            <p>служебные</p>      
            <NavBarLinks link='/users' linkname='юзеры' />        
        </div>
    );

}

export default NavBar;