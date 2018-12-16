/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import './index.scss';

export default class Island extends Component {
    onClick() {
    }

    render() {
        const {src, shake = true, position = {}, style = {}} = this.props;
        const {x: posX = 0, y: posY = 0} = position;
        const islandCls = classnames({
            "base-container": true,
            shake: shake
        });

        const randomDelay = Math.floor(Math.random()*500+1); // 让每个小岛看上去都不一样
        return (
            <div onClick={this.onClick} className={islandCls} style={{top: posX, left: posY, animationDuration: `${1000 + randomDelay}ms`}}>
                <img src={src} style={style} />
            </div>
        );
    }
}
