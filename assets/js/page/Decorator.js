/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import './decorator.scss';
import classnames from 'classnames';

import Button from './../component/Button';
import Background from '../component/Background';

import { Link } from 'react-router-dom'
import {
    decorator,
    empty_island1,
    empty_island3,
    empty_island2,

} from '../Utils/imgPath';

const mockItemData = [
    {
        pic: empty_island1
    },
    {
        pic: empty_island2
    },
    {
        pic: empty_island3
    },
    {
        pic: empty_island1
    },
    {
        pic: empty_island2
    },
    {
        pic: empty_island3
    },
]
const mockListData = [{
    name: '岛屿形状',
    data: mockItemData
},{
    name: '房间',
    data: mockItemData
},{
    name: '墙',
    data: mockItemData
},{
    name: '装饰物',
    data: mockItemData
},{
    name: '路',
    data: mockItemData
},{
    name: '传送',
    data: mockItemData
}];

export default class DecoratorPage extends Component {
    state = {
        currentIndex: 0,
        currentIslandIdx: 0
    }
    renderSelector() {
        const {currentIndex = 0, currentIslandIdx = 0} = this.state;

        const listData = mockListData[currentIndex]

        return (
            <div className="selector">
                <div className="selector-wrapper">
                    <div className="select-list">
                        {listData.data.map((v, i)=>{
                            const selectItemCls = classnames({
                                "select-item": true,
                                selected: i === currentIslandIdx
                            });
                            return (
                                <div className={selectItemCls} onClick={()=>{
                                    this.setState({
                                        currentIslandIdx: i
                                    });
                                }}>
                                    <img src={v.pic} alt="" className="select-item-img"/>
                                </div>
                            );
                        })}
                    </div>
                    <div className="select-btn">
                        {mockListData.map((v, i)=>{
                            const btnCls = classnames({
                                "btn-item": true,
                                selected: i === currentIndex
                            });
                            return <div onClick={()=>{
                                this.setState({
                                    currentIndex: i,
                                    currentIslandIdx: 0
                                });
                            }} className={btnCls}><span>{v.name}</span></div>
                        })}
                    </div>
                </div>
            </div>
        );
    }

    renderContent() {
        const {currentIndex = 0, currentIslandIdx = 0} = this.state;
        const currentItem = mockListData[currentIndex].data[currentIslandIdx];
        const islandPic = currentItem.pic;
        return (
            <img src={islandPic} className="island-pic" />
        );
    }
    render() {
        return (
            <div className="decorator-content">
                <Background style={{height: '100%', minHeight: '800px', width: '100%'}}>
                    <div className='decorator-content-bg'>
                        <div className="content">
                            <div className="content-wrapper">
                                <div className="edge-top">
                                    <div className="title">装饰空间--外观</div>
                                    <div className="action">装饰空间内部 >></div>
                                </div>
                                <div className="content-island">
                                    {this.renderContent()}
                                </div>
                                <div className="edge-bottom">
                                    <Button>保存</Button>
                                    <Button><Link to="/Home">完成</Link></Button>
                                </div>
                            </div>
                        </div>
                        {this.renderSelector()}
                    </div>
                </Background>
                <Link to="/home">Hello</Link>
            </div>
        );
    }
}
