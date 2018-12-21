/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
// import './index.scss';
import { Link } from 'react-router-dom'

export default class LoginPage extends Component {
    render() {
        const {children, onClick} = this.props;
        return (
            <div onClick={onClick} className="button" >
                <Link to="/home">Hello</Link>
            </div>
        );
    }
}
