import { connect} from 'react-redux';
import { updateNewMessageTextActionCreator, addNewMessageActionCreator } from '../../Redux/dialoges-reducer';
import Dialoges from './Dialoges';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';


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

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
) (Dialoges);