
import Avatar from './Avatar'
import s from './Posts.module.css'
const Posts = (props) => {
    return (
        <div className={s.Posts}>

            <Avatar /> {props.post}
            <p>Likes : {props.likesCount}</p>
        </div>
    );
}

export default Posts;