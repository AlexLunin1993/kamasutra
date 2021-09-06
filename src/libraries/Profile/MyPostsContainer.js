import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (newtext) => {
            let action = updateNewPostTextActionCreator(newtext);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);



export default MyPostsContainer;

