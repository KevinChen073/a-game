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
        // 直接用事件形式唤出另一个Page
        // var offsetLeft = document.getElementsByClassName('drop-container')[0].offsetLeft;
        // var offsetTop = document.getElementsByClassName('drop-container')[0].offsetTop;
        Emitter.emit('global/showIsland', {...this.props});
        // if (!this.state.isBig) {
        //     this.setState({
        //         posX: -offsetTop + this.windowOffsetTop,
        //         posY: -offsetLeft + this.windowOffsetLeft,
        //         isBig: true
        //     });
        //     setTimeout(()=>{
        //         this.setState({
        //             showPerson: true
        //         });
        //     }, 550)
        //     Emitter.emit('global/showMask');
        // } else {
        //     this.setState({
        //         posX: this.initLeft,
        //         posY: this.initTop,
        //         isBig: false,
        //         showPerson: false
        //     });
        //     Emitter.emit('global/hideMask');
        // }
    }

    render() {
        const {src, bigSrc, shake = true, style = {}, children} = this.props;
        const {width} = style;
        const { posX, posY } = this.state;
        const {isBig, showPerson} = this.state;
        const islandCls = classnames({
            "island-container": true,
            shake: shake,
            "island-big": isBig
        });

        const randomDelay = Math.floor(Math.random()*500+1); // 让每个小岛看上去都不一样
        return (
            <div onClick={this.onClick} className={islandCls} style={{top: posX, left: posY, animationDuration: `${1000 + randomDelay}ms`}}>
                <img src={isBig ? bigSrc : src} className="island-img" style={{width: `${width}px`, height: 'auto'}} />
                {showPerson && children}
            </div>
        );
    }
}