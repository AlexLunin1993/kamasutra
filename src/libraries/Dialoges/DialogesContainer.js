import { connect } from 'react-redux';
import { updateNewMessageTextActionCreator, addNewMessageActionCreator } from '../../Redux/dialoges-reducer';
import Dialoges from './Dialoges';



let mapStateToProps = (state) => {
    return{
       dialogesPage: state.dialogesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        onChangeNewMessageText: (newtext) => {
            // let action = updateNewMessageTextActionCreator(newtext);
            dispatch (updateNewMessageTextActionCreator(newtext))
        } ,
        onNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
};


const DialogesContainer = connect (mapStateToProps, mapDispatchToProps) (Dialoges);

export default DialogesContainer;