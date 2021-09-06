import React from 'react';
import Styles from './Names.module.css';
import { NavLink} from 'react-router-dom';

const Names = (props) => {
    let path='/dialoges/'+ props.id;
    return (
        <div className={Styles.Item}>
           <NavLink to={path} activeClassName={Styles.active}>{props.name}</NavLink>
        </div>
    );
}

export default Names;
