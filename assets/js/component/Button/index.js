/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';

export default class Button extends Component {
    render() {
        const {children, onClick} = this.props;
        return (
            <div onClick={onClick} className="button" >
                {children}
            </div>
        );
    }
}
