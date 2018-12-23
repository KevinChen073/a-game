/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';
import { Link } from 'react-router-dom'
import Emitter from './../../Utils/Emitter';

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
                <div className="close-button" onClick={()=>{
                    Emitter.emit('global/hideDialog');
                }}></div>
                <div className="info-pos">
                    <span>{name}</span>
                    <div className="info-href" onClick={()=>{
                        Emitter.emit('global/showDetail');
                    }}>查看详情></div>
                </div>
                <img className="dialog-content" src={dialog} />
            </div>
        );
    }
}
