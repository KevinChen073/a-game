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
import { CSSTransition } from 'react-transition-group';

/**
 * @class Dialog 出现的DialogItem
 */
export default class DialogItem extends Component {
    
    render() {
        const {
            name,
            detailUrl,
            visible
        } = this.props;
        return (
            <CSSTransition
                in={visible}
                timeout={500}
                classNames={{
                    enter: 'animated',
                    enterActive: 'bounceInRight',
                    exit: 'animated',
                    exitActive: 'bounceOutRight'
                }}
                mountOnEnter={true}
                unmountOnExit={true}
                onExited={() => {}}
            >
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
            </CSSTransition>
        );
    }
}
