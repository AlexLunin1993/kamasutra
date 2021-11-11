import MyPosts from './MyPosts';
import { addPost, updateNewPostText } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(newText) => { dispatch (updateNewPostText(newText.target.value)) },
        addPost:() => { dispatch (addPost()) } 
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;

