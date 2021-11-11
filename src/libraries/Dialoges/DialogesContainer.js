import { connect } from 'react-redux';
import { updateNewMessageTextActionCreator, addNewMessageActionCreator } from '../../Redux/dialoges-reducer';
import Dialoges from './Dialoges';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';



let mapStateToProps = (state) => {
    return {
        dialogesPage: state.dialogesPage,
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

let AuthRedirectComponent = WithAuthRedirect(Dialoges);


const DialogesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogesContainer;