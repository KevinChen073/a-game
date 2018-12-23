/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';
import { Link } from 'react-router-dom'

import {
    dialog
} from './../../Utils/imgPath';

/**
 * @class Dialog 出现的DialogItem
 */
export default class DialogItem extends Component {
    
    render() {
        const {
            name,
            detailUrl
        } = this.props;
        return (
            <div className="dialog-container">
                <div className="info-pos">
                    <span>{name}</span>
                    <Link className="info-href" to="/person-info">查看详情></Link>
                </div>
                <img className="dialog-content" src={dialog} />
            </div>
        );
    }
}
