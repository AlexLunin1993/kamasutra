
import Preloader from '../common/preloader/preloader.js';
import Avatar from './Avatar.js';
import Bio from './Bio.js';
import MyPostsContainer from './MyPostsContainer';

const Profile = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    return (

        <div>
            <Avatar photo={props.profile.photos.large} />
            <Bio name='Барсик' age='вечно молодой' race='бродяга'/>
            <MyPostsContainer/>
        </div>);

}

export default Profile;