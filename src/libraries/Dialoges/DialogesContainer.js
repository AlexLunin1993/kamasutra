import { connect } from 'react-redux';
import { updateNewMessageTextActionCreator, addNewMessageActionCreator } from '../../Redux/dialoges-reducer';
import Dialoges from './Dialoges';



let mapStateToProps = (state) => {
    return {
        dialogesPage: state.dialogesPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNewMessageText: (newtext) => {
            dispatch(updateNewMessageTextActionCreator(newtext.target.value))
        },
        onNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
};


const DialogesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialoges);

export default DialogesContainer;