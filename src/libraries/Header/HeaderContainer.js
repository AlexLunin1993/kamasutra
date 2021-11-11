import React from "react";
import { connect } from "react-redux";
import Header from './Header';
import { myLoginThunk } from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.myLoginThunk ();
    }

    render() {
        
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { myLoginThunk })(HeaderContainer);