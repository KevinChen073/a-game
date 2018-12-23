/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './login.scss';
import { Link } from 'react-router-dom'
import {
    banner,
    icon_person, icon_account, icon_check, icon_lock
} from '../Utils/imgPath';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="login-content">
                <div className="banner-content">
                    <img src={banner} className="banner"/>
                </div>
                <div className="content">
                    <div className="button-group">
                        <div className="login-button button-left">账号密码登录</div>
                        <div className="login-button button-right">手机验证码登录/注册</div>
                    </div>
                    <div className="input-group">
                        <div className="input-item">
                            <img src={icon_person} alt="" className="icon" />
                            <input type="text" className="login-input input-account" placeholder="用户名" />
                        </div>
                        <div className="input-item">
                            <img src={icon_lock} alt="" className="icon" />
                            <input type="text" className="login-input input-account" placeholder="用户名" />
                        </div>
                        <div className="input-item">
                            <img src={icon_account} alt="" className="icon" />
                            <input type="text" className="login-input input-account" placeholder="用户名" />
                            <img src={icon_check} alt="" className="icon-check" />
                        </div>
                    </div>
                    <Link to="/home" className="action"> 登录</Link>
                    <div className="order-action">
                        <a href="">忘记密码</a>
                        <a href="">注册新账号</a>
                    </div>
                    <div className="special-thanks">
                        <div href="">Powered by HeartSpace</div>
                        <div href="">2018 ABC</div>
                    </div>
                </div>
            </div>
        );
    }
}
