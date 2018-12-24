/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import './index.scss';

export default class Info extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const {onClick} = this.props;
        onClick && onClick();
        e.stopPropagation()
    }

    render() {
        const {src, shake = true, position = {}, style = {}} = this.props;
        const {x: posX = 0, y: posY = 0} = position;
        const islandCls = classnames({
            "info-container": true,
            animated: true
        });

        const randomDelay = Math.floor(Math.random()*500+1); // 让每个小岛看上去都不一样
        return (
            <div onClick={this.onClick} className={islandCls} style={{top: posX, left: posY}}>
                <img src={src} style={style} />
            </div>
        );
    }
}
