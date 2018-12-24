/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import './index.scss';

export default class Scene extends Component {

    render() {
        const {children, visible, animateType = {}} = this.props;
        const { inType = 'zoomIn', outType = 'zoomOut' } = animateType;

        // if (!visible) {
        //     return null;
        // }
        return (
            <CSSTransition
                in={visible}
                timeout={300}
                classNames={{
                    enter: 'animated',
                    enterActive: inType,
                    exit: 'animated',
                    exitActive: outType
                }}
                mountOnEnter={true}
                unmountOnExit={true}
                onExited={() => {}}
            >
                <div className='scene-container'>
                    {children}
                </div>
            </CSSTransition>
        );
    }
}
