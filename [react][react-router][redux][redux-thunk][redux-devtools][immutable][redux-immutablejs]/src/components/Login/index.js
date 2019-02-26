import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import * as Actions from 'src/actions'
import {isLogin} from 'src/utils/auth'
import styles from './index.less'


const mapStateToProps = (state) => {

    return {
        // auth: state.auth.toJS()
    }
}
const mapDispatchToProps = dispatch => {

    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


class Login extends Component {
    constructor(props) {

        super(props)
        this.state = {}

    }

    static propTypes = {};

    componentDidMount() {
        const {actions} = this.props;
        actions.localLogin();
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


    render() {


        return (
            <div>
                login
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)