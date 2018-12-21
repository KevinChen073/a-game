/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import './index.scss';

export default class Scene extends Component {

    render() {
        const {children, visible} = this.props;

        if (!visible) {
            return null;
        }
        return (
            <div className='scene-container'>
                {children}
            </div>
        );
    }
}
