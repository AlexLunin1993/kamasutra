import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';

const NavBarLinks = (props) => {
    return (
        <NavLink to={props.link} activeClassName={styles.active}>{props.linkname}</NavLink>
    );
}

export default NavBarLinks;