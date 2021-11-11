import React from 'react';
import Profile from './Profile.js';
import { profileThunk } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class ProfileContainer extends React.Component {

    
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID=2;
        }
        this.props.profileThunk(userID)
    }

    render() {
        
        if (!this.props.isAuth) return <Redirect to={'/login'} />;

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )

    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});


 let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { profileThunk })(WithUrlDataContainer);