/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './index.scss';

export default class Mask extends Component {
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
