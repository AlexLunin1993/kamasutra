import profileReducer from './profile-reducer'
import dialogesReducer from './dialoges-reducer'

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: 'Нассал в рабочие туфли, вот крику-то будет утром', likesCount: '2' },
        { id: 2, post: 'Обиделся', likesCount: '3' },
        { id: 3, post: 'Разбудил хозяйку, получил тапком по жопе', likesCount: '2' },
        { id: 4, post: 'Пойду мяучить', likesCount: '10' },
        { id: 5, post: 'Скучно', likesCount: '2' },
      ],
      newPostText: ''
    },

    dialogesPage: {
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
    }
  },

  _callSubScriber() {
    console.log();
      },

  getState() {
     return (
      this._state)
  },

  subscribe(observer) {
    this._callSubScriber = observer;
  },

  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    
    this._state.dialogesPage = dialogesReducer(this._state.dialogesPage, action);
    this._callSubScriber(this._state);    
  },
}

export default store;

