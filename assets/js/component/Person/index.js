/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import Dialog from '../Dialog';
import './index.scss';

export default class Person extends Component {
    state = {
        pause: false
    }
    onClick(e) {
        Dialog.show();
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
            "person-run": true,
            "person-stop": pause,
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
            }} className={personCls} style={{top: posX, left: posY, offsetPath: `path("${pathParam}")`}}>
                <img src={src} style={style} />
            </div>
        );
    }
}