


const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  newMessageText: '',
  dialogesData: [
    { id: 1, name: 'Рыжий' },
    { id: 2, name: 'Васька' },
    { id: 3, name: 'Крысолов_3000' },
    { id: 4, name: 'Барсик' },
  ],

  messagesData: [
    { id: 1, message: 'мяу-мяу' },
    { id: 2, message: 'мяу-мяу-мяу' },
    { id: 3, message: 'Сегодня троих поймал! Здоровенных!!!!!' },
  ]
};

const dialogesReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }
    case ADD_NEW_MESSAGE:
      {
        let newMessage = {
          id: 4,
          message: state.newMessageText,
        }
        if (state.newMessageText == '') { alert('сообщение пустое!!!') } else {
          return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            newMessageText: ''
          }
        };
      };
    default: return state;

  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
  };
};

export const addNewMessageActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE
  }
};


export default dialogesReducer;