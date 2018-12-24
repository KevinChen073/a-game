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
        this.state = {
            isBig: false,
        }
        this.height = 800; // document.body.offsetHeight; // 不能用屏幕高度，必须用一个固定高度，否则会调不了位置

    }


    render() {
        const {src, bigSrc, shake = true, style = {}, children, actionButton, showPeople} = this.props;
        const {width} = style;
        const islandCls = classnames({
            "island-detail": true,
            shake: shake,
        });

        const randomDelay = Math.floor(Math.random()*500+1); // 让每个小岛看上去都不一样

        return (
            <div className={islandCls} style={{animationDuration: `${1000 + randomDelay}ms`}}>
                <img src={bigSrc} className="island-img" style={{width: `auto`, height: `${this.height}px`}} />
                {showPeople && children}
            </div>
        );
    }
}