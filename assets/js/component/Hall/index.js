/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import './index.scss';

const CONST_WIDTH_PRE_PIC = [0, -1072, -2200, -3800]; // 3900
export default class Hall extends Component {

    constructor(props) {
        super(props);
        this.height = document.body.offsetHeight;
        this.scale = document.body.offsetHeight / 741;
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
        } else {
            this.setState({
                xIndex: xIndex <= 0 ? xIndex : xIndex - 1
            });
        }
    }
    render() {
        const {background, visible} = this.props;
        const {xIndex} = this.state;

        return (
            <div className='hall-container'>
                <img src={background} className="hall-background" style={{height: `${this.height}px`, transform: `translateX(${CONST_WIDTH_PRE_PIC[xIndex] * this.scale}px)`}}/>
                <div className="edge-guard edge-left" onClick={()=>{this.doMove('left')}} />,
                <div className="edge-guard edge-right" onClick={()=>{this.doMove('right')}} />,
            </div>
        );
    }
}
