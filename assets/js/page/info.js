/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './info.scss';
import { Link } from 'react-router-dom'
import {
    welcome
} from '../Utils/imgPath';


export default class InfoPage extends Component {
    render() {
        return (
            <div className="info-content">
                <div className="banner-content">
                    <img src={welcome} className="banner"/>
                </div>
                <Link to="/home">Hello</Link>
            </div>
        );
    }
}
