import { usersAPI } from '../API/API'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {

            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUserCount: action.totalUserCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case FOLLOWING_IN_PROGRESS: {

            return {

                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default: return state;
    };
}

export const follow = (userID) => {
    return {
        type: FOLLOW,
        userID: userID
    };
}
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID: userID
    };
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    };
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
}
export const setTotalUserCount = (totalUserCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUserCount: totalUserCount
    };
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    };
}
export const toggleFollowing = (isFetching, userID) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userID: userID
    };
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));

            });
    }
}

export const followUser = (userID) => {
    return (dispatch) => {

        dispatch(toggleFollowing(true, userID))
        usersAPI.followAPI(userID)
            .then(data => {

                if (data.resultCode == 0) {
                    dispatch(follow(userID));
                }
            })
        dispatch(toggleFollowing(false, userID))
    }
}

export const unFollowUser = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userID));
        usersAPI.unFollowAPI(userID)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(userID));
                }


            })

        dispatch(toggleFollowing(false, userID))

    }
}

export default usersReducer;