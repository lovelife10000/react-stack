import React, {Component} from 'react'
import {renderRoutes} from "react-router-config";


class Basic extends Component {
    constructor(props) {
        super(props)

    }

    goto(url){
        this.props.history.push(url);
    }

    render() {


        return (
            <div >
                Basic


            </div>

        )
    }
}

export default Basic