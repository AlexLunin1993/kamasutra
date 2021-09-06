import React from 'react';
import Styles from './Messages.module.css'
const Messages = (props) => {
    return (
        <div className={Styles.Item}>
           {props.message}
        </div>
    );
}

export default Messages;