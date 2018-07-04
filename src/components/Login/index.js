import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import * as Actions from 'src/actions'
import {isLogin} from 'src/utils/auth'
import {Form} from 'antd'
import styles from './index.less'
import Child from 'src/components/Child'
import {findDOMNode} from 'react-dom'

const FormItem = Form.Item
const appConfig = require('src/config/app');


const mapStateToProps = (state) => {
    debugger
    return {
        auth: state.auth.toJS()
    }
}
const mapDispatchToProps = dispatch => {
    debugger
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

@Form.create()
class Login extends Component {
    constructor(props) {
        console.log()
        debugger
        super(props)
        this.state = {
            child1: {},
            child2: {}
        }

    }

    static propTypes = {

        auth: PropTypes.object.isRequired,

    };

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    getChild1(dom){
        debugger
        // this.setState({
        //     child1:dom
        // });
    }
    getChild2(dom){
        debugger
        // this.setState({
        //     child2:dom
        // });
    }


    render() {
        debugger

        return (
            <div className={styles.loginCard}>
                <Child ref={this.getChild1.bind(this)}/>
                <div  ref={this.getChild2.bind(this)}>111</div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)