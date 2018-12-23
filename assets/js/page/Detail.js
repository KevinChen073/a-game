/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './detail.scss';
import { Link } from 'react-router-dom'
import {
    detail
} from '../Utils/imgPath';


export default class DecoratorPage extends Component {
    render() {
        return (
            <div className="detail-content">
                <div className="banner-content">
                    <img src={detail} className="banner"/>
                </div>
                <Link to="/home">Hello</Link>
            </div>
        );
    }
}
