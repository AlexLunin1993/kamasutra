
import Avatar from './Avatar.js';
import Bio from './Bio.js';
import MyPostsContainer from './MyPostsContainer';

const Profile = (props) => {
    debugger;
   return (
        <div>
            <Avatar />
            <Bio name='Барсик' age='вечно молодой' race='бродяга'/>
            <MyPostsContainer/>
        </div>);

}

export default Profile;