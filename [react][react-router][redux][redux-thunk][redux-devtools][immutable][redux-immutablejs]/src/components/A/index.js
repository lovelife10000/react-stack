import React, {Component} from 'react'
import {renderRoutes} from "react-router-config";


class A extends Component {
    constructor(props) {
        super(props)

    }

    goto(url){
        this.props.history.push(url);
    }

    render() {


        return (
            <div onClick={this.goto.bind(this,'/a/a-child')}>
            a

                {renderRoutes(this.props.route.routes)}
            </div>

        )
    }
}

export default A