
import Preloader from '../common/preloader/preloader.js';
import Avatar from './Avatar.js';
import ProfileStatus from './ProfileStatus.js';
import MyPostsContainer from './MyPostsContainer';

const Profile = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    debugger
    return (

        <div>
            <Avatar photo={props.profile.photos.large} />
            {/* <Bio name={props.profile.fullName} status={props.profile.aboutMe}/> */}
            <p><b>Имя:</b> {props.profile.fullName} </p> 
            <p><b>Статус:</b> {props.profile.aboutMe} </p> 
            <ProfileStatus status = {props.profile.aboutMe} />
            <p />
            <MyPostsContainer/>
        </div>);

}

export default Profile;