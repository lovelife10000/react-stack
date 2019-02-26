import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";


class Layout extends Component {
    constructor(props) {
        super(props)

    }

    goto(url){
        this.props.history.push(url);
    }

    render() {


        return (
            <div >
            layout
                <div onClick={this.goto.bind(this,'/a')}>goto[a]</div>
                <div onClick={this.goto.bind(this,'/b')}>goto[b]</div>
                <div onClick={this.goto.bind(this,'/login')}>goto[login]</div>
                {console.log('is',this.props) }
                [child is:{renderRoutes(this.props.route.routes)}]
            </div>

        )
    }
}

export default Layout