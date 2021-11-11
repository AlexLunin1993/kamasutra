import { usersAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  newPostText: '',
  postsData: [
    { id: 1, post: 'Нассал в рабочие туфли, вот крику-то будет утром', likesCount: '2' },
    { id: 2, post: 'Обиделся', likesCount: '3' },
    { id: 3, post: 'Разбудил хозяйку, получил тапком по жопе', likesCount: '2' },
    { id: 4, post: 'Пойду мяучить', likesCount: '10' },
    { id: 5, post: 'Скучно', likesCount: '2' },
  ],
  profile: null

}
const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newtext
      }

    }
    case ADD_POST: {
      let newPost = {
        id: 6,
        post: state.newPostText,
        likesCount: 0
      }
      if (state.newPostText == '') { alert('сообщение пустое!!!') } else {
        return {
          ...state,
          postsData: [...state.postsData, newPost],
          newPostText: ''
        }
      };
    };

    case SET_USER_PROFILE: {

      return {
        ...state,
        profile: action.profile
      }
    };

    default: return state;
  }
}

export const addPost = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostText = (newtext) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newtext: newtext
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  };
};

export const profileThunk = (userID) => {
  return (dispatch) => {
    usersAPI.setUserProfileAPI(userID)
                    .then(data => {
                dispatch(setUserProfile(data));

            });

  }
}

export default profileReducer;