import React from 'react';
import Styles from './Dialoges.module.css';
import Names from './Names';
import Messages from './Messages';

const Dialoges = (props) => {
    
    let dialogesElements = props.dialogesPage.dialogesData.map(dialog => <Names name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogesPage.messagesData.map(messages => <Messages message={messages.message} />);

    let newtext = props.dialogesPage.newMessageText;

    return (    
        <div className={Styles.Dialoges}>

            <div className={Styles.Names}>
                {dialogesElements}
            </div>

            <div classname={Styles.Messages}>
                {messagesElements}

            </div>
            <div>
                <textarea onChange={props.onChangeNewMessageText}
                          value={newtext}></textarea>
                <button onClick={props.onNewMessage}>отправить</button>
            </div>

        </div>

    );
}

export default Dialoges;