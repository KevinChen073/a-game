/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';

/**
 * @class Dialog 直接出现的Dialog
 */
export default class Dialog extends Component {
    static show = () => {
        window.alert('我是信息弹框，惊喜不惊喜');
    }
    render() {
        const {children, noBackground} = this.props;
        return (
            <div>
                {!noBackground && <div className="mask" />}
                <div className="mask-child" >
                    {children}
                </div>
            </div>
        );
    }
}
