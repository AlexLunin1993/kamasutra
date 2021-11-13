import React from 'react';
import Profile from './Profile.js';
import { profileThunk } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2;
        }
        this.props.profileThunk(userID)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )

    };
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    
});

export default compose(
    connect(mapStateToProps, { profileThunk }),
    withRouter,
    WithAuthRedirect
) (ProfileContainer);

