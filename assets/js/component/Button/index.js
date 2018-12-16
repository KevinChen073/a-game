/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';

export default class Button extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="button" >
                {children}
            </div>
        );
    }
}
