import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as Actions from 'src/actions'
import { withRouter } from 'react-router-dom'
import { isLogin } from 'src/utils/auth'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'
const FormItem = Form.Item
import styles from './index.less'
const appConfig = require('src/config/app')


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
    debugger
    super(props)

  }

  static propTypes = {

    auth: PropTypes.object.isRequired,

  };

  componentDidMount() {
    const { actions, auth } = this.props
    if (auth.user === null) {
      actions.getUserInfo()
    }
  }
  componentWillMount() {
    // const { actions} = this.props
    if (isLogin()) {
      try {
        window.location.href = '/'
      } catch (err) {
        console.log('忽略服务端渲染,组件检查的时候window is not defined')
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { globalVal } = this.props
    if (globalVal.styleMode !== nextProps.globalVal.styleMode) {
      document.body.className = nextProps.globalVal.styleMode
    }
  }



  render() {
debugger

    return (
      <div className={styles.loginCard} >

      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)