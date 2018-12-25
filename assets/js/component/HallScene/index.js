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
    hallMusic,
    pic1, dialog1, picture1, pic12,
    guitar2, musicM2, music2, 
    light3, pic3, pic4, man,
    iconLeft, iconRight
} from './../../Utils/imgPath';

const CONST_WIDTH_PRE_PIC = [0, -1072, -2200, -3800]; // 3900

const hint1 = '2018年7.1 星空艺术展';
const hint2 = '2018年7.1 当代艺术专场';
const hint3 = '2019.01 粉红咖啡馆';
const hint4 = '我说道，“爸爸，你走吧。”他望车外看了看说：“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。';



export default class Hall extends Component {

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
                Emitter.emit('global/hideHall');
                return;
            }
        } else {
            newXIndex = xIndex <= 0 ? xIndex : xIndex - 1
            this.setState({
                xIndex: newXIndex
            });
            if (xIndex == 0) {
                Emitter.emit('global/hideHall');
                return;
            }
        }
        this.setState({
            xIndex: newXIndex
        });
        if (newXIndex === 1) {
            Emitter.emit('global/playGuitarMusic');
        } else {
            Emitter.emit('global/stopGuitarMusic');
        }
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
            <div className="hall-warpper">
                <div className='hall-container'>
                    <img src={background} className="hall-background" style={{height: `${this.height}px`, transform: `translateX(${CONST_WIDTH_PRE_PIC[xIndex] * this.scale}px)`}}/>
                    <div className="thing-wrapper" style={{transform: `translateX(${CONST_WIDTH_PRE_PIC[xIndex] * this.scale}px)`}}>
                        <img src={pic4} className="thing pic4 animated pulse-animate" />
                        <img src={dialog1} onClick={this.onClickMan} className="thing dialog5" />    

                        <span className="hint3">{hint3}</span>
                        <span className="hint4">{hint4}</span>
                        <span className="hint5">{hint4}</span>
                        <img src={light3} className="thing light3 animated shake" />
                        <img src={pic3} onClick={this.onClick} className="thing pic3 animated pulse-animate" />
                        <img src={dialog1} onClick={this.onClickMan} className="thing dialog4" />

                        <img src={music2} className="thing music2" />
                        <img src={musicM2} className="thing musicM2" />
                        <img src={guitar2} className="thing guitar2" />
                        <img src={dialog1} onClick={this.onClickMan} className="thing dialog3" />
                        
                        <img src={dialog1} onClick={this.onClickMan} className="thing dialog2" />
                        <img src={dialog1} onClick={this.onClickMan} className="thing dialog1" />
                        <span className="hint1">{hint1}</span>
                        <span className="hint2">{hint2}</span>
                        <img src={light3} className="thing light1 animated shake" />
                        <img src={pic1} onClick={this.onClick} className="thing pic1 animated pulse-animate" />
                        <img src={picture1} onClick={this.onClick} className="thing picture1 animated pulse-animate" />
                        <img src={pic12} onClick={this.onClick} className="thing pic12 animated pulse-animate" />
                        <img src={man} className="thing man" />
                    </div>
                    <div className="edge-guard edge-left" onClick={()=>{this.doMove('left')}}>
                        <img src={iconLeft} className="icon-hall-edge"/>
                    </div>
                    <div className="edge-guard edge-right" onClick={()=>{this.doMove('right')}}>
                        <img src={iconRight} className="icon-hall-edge" />
                    </div>
                </div>
                <div className="hall-dialog-container">
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
            </div>
        );
    }
}
