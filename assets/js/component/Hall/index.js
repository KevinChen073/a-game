/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import Emitter from './../../Utils/Emitter';
import './index.scss';
import {
    hallMusic,
    pic1, dialog1, picture1, pic12,
    guitar2, musicM2, music2, 
    light3, pic3, pic4
} from './../../Utils/imgPath';

const CONST_WIDTH_PRE_PIC = [0, -1072, -2200, -3800]; // 3900
export default class Hall extends Component {

    constructor(props) {
        super(props);
        this.height = 750; //document.body.offsetHeight;
        this.scale = this.height / 741;
        this.state = {
            xIndex: 0
        };
    }
    doMove(type) {
        const {xIndex} = this.state;
        if (type === 'right') {
            this.setState({
                xIndex: xIndex >= CONST_WIDTH_PRE_PIC.length ? xIndex : xIndex + 1
            });
            if (xIndex >= CONST_WIDTH_PRE_PIC.length) {
                Emitter.emit('global/hideHall');
            }
        } else {
            this.setState({
                xIndex: xIndex <= 0 ? xIndex : xIndex - 1
            });
            if (xIndex == 0) {
                Emitter.emit('global/hideHall');
            }
        }
    }
    render() {
        const {background, visible} = this.props;
        const {xIndex} = this.state;

        return (
            <div className='hall-container'>
                <img src={background} className="hall-background" style={{height: `${this.height}px`, transform: `translateX(${CONST_WIDTH_PRE_PIC[xIndex] * this.scale}px)`}}/>
                <div className="thing-wrapper" style={{transform: `translateX(${CONST_WIDTH_PRE_PIC[xIndex] * this.scale}px)`}}>
                    <img src={pic4} className="thing pic4 animated pulse-animate" />
                    <img src={light3} className="thing light3 animated shake" />
                    <img src={pic3} className="thing pic3 animated pulse-animate" />

                    <img src={music2} className="thing music2" />
                    <img src={musicM2} className="thing musicM2" />
                    <img src={guitar2} className="thing guitar2" />
                    
                    <img src={light3} className="thing light1 animated shake" />
                    <img src={pic1} className="thing pic1 animated pulse-animate" />
                    <img src={picture1} className="thing picture1 animated pulse-animate" />
                    <img src={pic12} className="thing pic12 animated pulse-animate" />
                </div>
                <div className="edge-guard edge-left" onClick={()=>{this.doMove('left')}} />,
                <div className="edge-guard edge-right" onClick={()=>{this.doMove('right')}} />,
            </div>
        );
    }
}
