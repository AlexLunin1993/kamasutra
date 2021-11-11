import Styles from './Avatar.module.css';

const Avatar = (props) => {
    debugger
    return (
        <img className={Styles.Item} src={props.photo} alt='аватарка' />
    );
}

export default Avatar;