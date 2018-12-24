/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import './index.scss';

import {personDialog} from './../../Utils/imgPath';

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }    
    state = {
        pause: false
    }
    onClick(e) {
        const {onClick} = this.props;
        onClick && onClick();
        e.stopPropagation()
    }

    render() {
        const {src, shake = true, position = {}, style = {}, pathParam} = this.props;
        const {x: posX = 0, y: posY = 0} = position;
        const islandCls = classnames({
            
        });
        const {pause} = this.state;
        const personCls = classnames({
            "person-container": true,
            // "person-run": true,
            // "person-stop": pause,
            animated: true
        });
        return (
            <div onClick={this.onClick} onMouseOver={()=>{
                this.setState({
                    pause: true
                });
            }} onMouseOut={()=>{
                this.setState({
                    pause: false
                });
            }} className={personCls} style={{top: posX, left: posY, offsetPath: `path("${pathParam}")`, ...style}}>
                <img src={personDialog} className={'person-dialog'} />
                <img src={src} className={'person-small'} style={style} />
            </div>
        );
    }
}
