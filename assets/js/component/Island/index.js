/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import './index.scss';

import Emitter from './../../Utils/Emitter';

/**
 * @class BaseComp 场景内物品的基类
 * @desc 可由外部出入src、style、position、onClick事件
 */
export default class BaseComp extends Component {

    constructor(props) {
        super(props);
        this.initLeft = props.position.x;
        this.initTop = props.position.y;
        this.state = {
            isBig: false,
            posX: this.initLeft,
            posY: this.initTop
        }
        this.onClick = this.onClick.bind(this);

        const {style = {}} = props;
        // 居中计算
        this.windowOffsetTop = (document.body.offsetHeight - (style.height || style.width) * 2) / 2;
        this.windowOffsetLeft = (document.body.offsetWidth - style.width * 2) / 2;

    }

    onClick() {
        Emitter.emit('global/showIsland', {...this.props});
    }

    render() {
        const {src, bigSrc, shake = true, style = {}, label} = this.props;
        const {width, height} = style;
        const { posX, posY } = this.state;
        const {isBig} = this.state;
        const islandCls = classnames({
            "island-container": true,
            shake: shake,
            "island-big": isBig,
            animated: true,
        });

        const randomDelay = Math.floor(Math.random()*500+1); // 让每个小岛看上去都不一样
        return (
            <div className={islandCls} style={{top: posX, left: posY, animationDuration: `${1000 + randomDelay}ms`}}>
                <div className="island-space" onClick={this.onClick} style={{width: `${width}px`, height: `${height || width}px`}} />
                <img src={isBig ? bigSrc : src} className="island-img" style={{width: `${width}px`, height: 'auto'}} />
                {label}
            </div>
        );
    }
}