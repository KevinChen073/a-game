/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import './index.scss';

import Mask from './../Mask';
function getCss(ele, prop) {
    return parseInt(window.getComputedStyle(ele)[prop]);
}


// 禁止拖拽出窗口
function preventOutSide(x, maxX) {
    if (x > 0) {
        x = 0;
    }
    if (x < maxX) {
        x = maxX;
    }
    return x;
}
export default class DropableBox extends Component {
    constructor(props) {
        super(props);
        this.dragable = true;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        const { bgWidth, bgHeight } = props;

        this.maxX = document.body.clientWidth - bgWidth;
        this.maxY = document.body.clientHeight - bgHeight;
    }

    state = {
        left: 0,
        top: 0,
        dragable: true
    }



    onMouseDown(e) {
        this.dragable = true;
        this.initX = e.clientX;
        this.initY = e.clientY;
        this.wrapLeft = getCss(this.wrap, "left");
        this.wrapRight = getCss(this.wrap, "top");
        e.preventDefault();
    }

    onMouseMove(e) {
        const {canMove} = this.props;
        if (!canMove) {
            return;
        }
        const {dragable, initX, initY} = this;
        if (this.dragable === true ) {
            var nowX = e.clientX,
                nowY = e.clientY,
                disX = nowX - initX,
                disY = nowY - initY;
            const wrap = this.wrap;
            const x = this.wrapLeft + disX;
            const y = this.wrapRight + disY;

            wrap.style.left = `${preventOutSide(x, this.maxX)}px`;
            wrap.style.top = `${preventOutSide(y, this.maxY)}px`;
        }
        e.preventDefault();
    }

    onMouseUp(e) {
        this.dragable = false;
        this.wrapLeft = getCss(this.wrap, "left");
        this.wrapRight = getCss(this.wrap, "top");
        e.preventDefault();
    }

    doMove(type) {
        const {canMove} = this.props;
        if (!canMove) {
            return;
        }
        clearInterval(this.moveInterval);
        this.moveInterval = setInterval(()=>{
            this.startMove(type);
        }, 40);
        // cancelAnimationFrame(this.moveInterval);
        // this.moveInterval = requestAnimationFrame(()=>{
        //     this.startMove(type);
        //     requestAnimationFrame(arguments.callee)
        // });
    }

    resetMove() {
        const wrap = this.wrap;
        wrap.style.top = 0;
        wrap.style.left = 0;
    }

    stopMove() {
        clearInterval(this.moveInterval);
        // cancelAnimationFrame(this.moveInterval);
    }

    startMove(type) {
        const wrap = this.wrap;
        const wrapLeft = getCss(this.wrap, "left");
        const wrapTop = getCss(this.wrap, "top");

        if (type === 'right') {
            wrap.style.left = `${preventOutSide(wrapLeft - 20, this.maxX)}px`;
        } else if (type === 'left') {
            wrap.style.left = `${preventOutSide(wrapLeft + 20, this.maxX)}px`;
        } else if (type === 'top') {
            wrap.style.top = `${preventOutSide(wrapTop + 20, this.maxY)}px`;
        } else {
            wrap.style.top = `${preventOutSide(wrapTop - 20, this.maxY)}px`;
        }
    }

    componentDidMount() {
        this.wrap = findDOMNode(this.refs.dropBox);

        // 去除所有图片拖动效果
        setTimeout(()=>{
            const imgList = document.getElementsByTagName('img');
            if (imgList && imgList.length > 0) {
                imgList[0].onmousedown = function(e){
                        e.preventDefault()
                };
            }
        }, 500);
    }
    render() {
        const {children, dropable = true, backgroundContent, maskContent} = this.props;
        const {bgWidth, bgHeight, canMove, showMask} = this.props;

        const {isMiniMode} = this.state;
        let divProps = {};
        if (dropable) {
            divProps = {
                onMouseUp: this.onMouseUp,
                onMouseMove: this.onMouseMove,
                onMouseDown: this.onMouseDown
            }
        }

        const dropContainerCls = classnames({
            "drop-container": true,
            miniMode: isMiniMode
        });

        return (
            <div className="container">
                <div {...divProps} ref="dropBox" className={dropContainerCls} style={{height: bgHeight, width: bgWidth}}>
                    {backgroundContent}
                    {children}
                </div>
                {showMask && <Mask noBackground>{maskContent}</Mask>}
                {!isMiniMode && canMove &&  [
                    <div className="edge-guard edge-top" onMouseOver={()=>{this.doMove('top')}} onMouseOut={()=>{this.stopMove()}} />,
                    <div className="edge-guard edge-left" onMouseOver={()=>{this.doMove('left')}} onMouseOut={()=>{this.stopMove()}}  />,
                    <div className="edge-guard edge-right" onMouseOver={()=>{this.doMove('right')}} onMouseOut={()=>{this.stopMove()}}  />,
                    <div className="edge-guard edge-bottom" onMouseOver={()=>{this.doMove('bottom')}} onMouseOut={()=>{this.stopMove()}}  />,
                ]}
                {canMove && <div className="edge-guard edge-button" onClick={()=>{
                    this.setState({
                        isMiniMode: !isMiniMode
                    });
                    this.resetMove();
                }}>点我变小</div>}
            </div>
        );
    }
}
