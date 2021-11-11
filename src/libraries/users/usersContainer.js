import React from "react";
import { follow, unfollow, setCurrentPage, toggleFollowing, getUsers, followUser, unFollowUser } from "../../Redux/users-reducer";
import Users from "./users";
import { connect } from 'react-redux'
import Preloader from "../common/preloader/preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        }
    

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                pagesCount={this.props.pagesCount}
                pages={this.props.pages}
                users={this.props.users}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                toggleFollowing={this.props.toggleFollowing}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                onPageChanged={this.onPageChanged}
            />
        </>
    }

};

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


const usersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage, toggleFollowing, getUsers, followUser, unFollowUser
    }
)
    (UsersAPI);

export default usersContainer;