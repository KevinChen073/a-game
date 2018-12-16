/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';
import {background} from './../../Utils/imgPath';

export default class Background extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="background-container">
                <img src={background} />
                <div className="background-children">
                    {children}
                </div>
            </div>
        );
    }
}
