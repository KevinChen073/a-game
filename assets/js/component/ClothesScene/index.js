/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';

import Dialog from './../DialogItem';
import Emitter from './../../Utils/Emitter';
import './index.scss';
import {
    clothesMusic,
    iconLeft, iconRight
} from './../../Utils/imgPath';

const CONST_WIDTH_PRE_PIC = [0, -1072]; // 3900


export default class ClothesScene extends Component {

    constructor(props) {
        super(props);
        this.height = 750; //document.body.offsetHeight;
        this.scale = this.height / 741;
        this.state = {
            xIndex: 0
        };
        this.onClick = this.onClick.bind(this);
        this.onClickMan = this.onClickMan.bind(this);
    }
    doMove(type) {
        const {xIndex} = this.state;
        let newXIndex = xIndex;
        if (type === 'right') {
            newXIndex = xIndex >= CONST_WIDTH_PRE_PIC.length ? xIndex : xIndex + 1;
            if (xIndex >= CONST_WIDTH_PRE_PIC.length) {
                Emitter.emit('global/hideClothes');
            }
        } else {
            newXIndex = xIndex <= 0 ? xIndex : xIndex - 1
            this.setState({
                xIndex: newXIndex
            });
            if (xIndex == 0) {
                Emitter.emit('global/hideClothes');
            }
        }
        this.setState({
            xIndex: newXIndex
        });
    }

    onClick() {
        Emitter.emit('global/showDetail');
    }

    onClickMan() {
        this.setState({
            showDialog: true
        });
    }
    
    render() {
        const {background, visible} = this.props;
        const {xIndex, showDialog} = this.state;

        return (
            <div className="clothes-warpper">
                <div className="clothes-dialog-container">
                    <Dialog
                        hasMargin={false}
                        visible={showDialog}
                        onClick={()=>{
                            this.setState({
                                showDialog: false
                            });
                        }}
                    />
                </div>
                <div className='clothes-container'>
                    <img src={background} className="clothes-background" style={{height: `${this.height}px`, transform: `translateX(${CONST_WIDTH_PRE_PIC[xIndex] * this.scale}px)`}}/>
                    <div className="edge-guard edge-left" onClick={()=>{this.doMove('left')}}>
                        <img src={iconLeft} className="icon-hall-edge"/>
                    </div>
                    <div className="edge-guard edge-right" onClick={()=>{this.doMove('right')}}>
                        <img src={iconRight} className="icon-hall-edge" />
                    </div>
                </div>
            </div>
        );
    }
}
