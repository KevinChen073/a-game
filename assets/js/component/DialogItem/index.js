/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import Emitter from './../../Utils/Emitter';

import {
    dialog, friendDetail
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
            visible,
            hasMargin = true,
            onClick = ()=>{
                Emitter.emit('global/hideDialog');
            }
        } = this.props;
        const dialogCls = classnames({
            margincls: hasMargin,
            "dialog-container": true,
        });
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
                <div className={dialogCls}>
                    <div className="close-button" onClick={onClick}></div>
                    <div className="info-pos">
                        <span>{name}</span>
                        <div className="info-href" onClick={()=>{
                            Emitter.emit('global/showDetail', {detailPic: friendDetail, color: '#f7f7f7'});
                        }}>查看详情></div>
                    </div>
                    <img className="dialog-content" src={dialog} />
                </div>
            </CSSTransition>
        );
    }
}
