/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';
import {background} from './../../Utils/imgPath';

export default class Background extends Component {
    render() {
        const {children, background: customBg, style, className} = this.props;
        return (
            <div className="background-container">
                <img src={customBg || background} className={className} style={style}/>
                <div className="background-children">
                    {children}
                </div>
            </div>
        );
    }
}
