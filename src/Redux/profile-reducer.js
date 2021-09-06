
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {       
        newPostText: '',
        postsData: [
      { id: 1, post: 'Нассал в рабочие туфли, вот крику-то будет утром', likesCount: '2' },
      { id: 2, post: 'Обиделся', likesCount: '3' },
      { id: 3, post: 'Разбудил хозяйку, получил тапком по жопе', likesCount: '2' },
      { id: 4, post: 'Пойду мяучить', likesCount: '10' },
      { id: 5, post: 'Скучно', likesCount: '2' },
    ]
        
  }
const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: let newPost = {
            id: 6,
            post: state.newPostText,
            likesCount: 22,
        };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newtext;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
  };
  
  export const updateNewPostTextActionCreator = (newtext) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newtext: newtext
    };
  };

export default profileReducer;