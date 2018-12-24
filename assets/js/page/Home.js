/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import Background from '../component/Background';
import Scene from '../component/Scene';
import Mask from '../component/Mask';
import Button from '../component/Button';
import Island from '../component/Island';
import IslandDetail from '../component/Island-detail';
import Hall from '../component/Hall';
import Person from '../component/Person';
import Info from '../component/Info';
import BaseComp from '../component/BaseComp';
import DropableBox from '../component/DropableBox';
import DialogItem from '../component/DialogItem';
import { CSSTransition } from 'react-transition-group';

import Emitter from '../Utils/Emitter';
import './home.scss';

import {
    island1, island2, island3, island4, island5, island6, island7,
    islandBig1, islandBig2, islandBig3, islandBig4, islandBig5, islandBig6, islandBig7,
    cloud1, cloud2, cloud3, cloud4,
    info1,
    person1, person2, person3, person4,
    hall,
    back, icons,detail
} from '../Utils/imgPath';

export default class Game extends Component {
    state = {
        showIsland: false,
        showIslandDialog: false,
    }
    constructor(props) {
        super(props);
        this.data = {
            island: {}
        };
        
    }
    componentDidMount() {
        Emitter.on('global/showIsland', (props)=>{
            const {actionButton = null, ...rest} = props;
            // 更新小岛数据
            this.data.island = rest;
            this.data.actionButton = actionButton;
            this.setState({
                showIsland: true,
            });
        });
        Emitter.on('global/hideIsland', ()=>{
            Emitter.emit('global/hideDialog');
            // 更新小岛数据
            this.data.island = {};
            this.data.actionButton = null;
            this.setState({
                showIsland: false,
            });
        });
        Emitter.on('global/showHall', ()=>{
            this.setState({
                showHall: true,
            });
        });
        Emitter.on('global/hideHall', ()=>{
            this.setState({
                showHall: false,
            });
        });
        Emitter.on('global/showDialog', (config = {})=>{
            // 更新Dialog数据
            this.data.dialogConfig = config;
            this.setState({
                showIslandDialog: true,
            });
        });
        Emitter.on('global/hideDialog', ()=>{
            // 更新Dialog数据
            this.data.dialogConfig = {};
            this.setState({
                showIslandDialog: false,
            });
        });
        Emitter.on('global/showDetail', (config = {})=>{
            // 更新Detail数据
            this.data.detailConfig = config;
            this.setState({
                showDetail: true,
            });
        });
        Emitter.on('global/hideDetail', ()=>{
            // 更新Detail数据
            this.data.detailConfig = {};
            this.setState({
                showDetail: false,
            });
        });
    }

    renderHome() {
        const {showIsland, showHall, showIslandDialog} = this.state;
        return (
            <DropableBox
                dropable={true}
                canMove={!showIsland}
                bgHeight={1230}
                bgWidth={2000}
                backgroundContent={<Background style={{width: '100%'}}/>}
            >
                <BaseComp src={cloud1} position={{x: 600, y: 300}} style={{width: 150}}/>
                <BaseComp src={cloud2} position={{x: 300, y: 1000}} style={{width: 150}}/>
                <BaseComp src={cloud3} position={{x: 500, y: 1300}} style={{width: 150}}/>
                <BaseComp src={cloud4} position={{x: 200, y: 1800}} style={{width: 150}}/>
                <Island src={island1} bigSrc={islandBig1}
                    position={{x: 100, y: 200}}
                    style={{width: 250, height: 250}}
                    actionButton={[
                        <Button>开始更衣 >></Button>,
                    ]}
                    label="我关注的小组"
                >
                    <Person
                        position={{x: 480, y: 500}}
                        src={person1}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '丽丽'});}}
                    />
                    <Person
                        // pathParam="M10,80 q100,120 120,20 q140,-50 160,0"
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 520, y: 650}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 560, y: 650}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Info position={{x: 200, y: 400}} src={info1} style={{width: 100, height: 100}}/>
                </Island>
                <Island
                    src={island2}
                    bigSrc={islandBig2}
                    position={{x: 300, y: 300}}
                    style={{width: 250}}
                    actionButton={[
                        <Button>进去看看 >></Button>,
                    ]}
                    label="更衣室"
                >
                    <Person
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 480, y: 680}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 260, y: 100}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                </Island>
                <Island
                    src={island3}
                    bigSrc={islandBig3}
                    position={{x: 500, y: 700}}
                    style={{width: 250}}
                    actionButton={[
                        <Button>进去看看 >></Button>,
                    ]}
                    label="热门小组"
                >
                    <Person
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 480, y: 680}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 260, y: 100}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                </Island>
                <Island
                    src={island4} bigSrc={islandBig4} position={{x: 200, y: 800}} style={{width: 400, height: 300}}
                    actionButton={[
                        <Button>进去看看 >></Button>,
                    ]}
                    label="精选小组"
                >
                    <Person
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 480, y: 680}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 260, y: 100}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                </Island>
                <Island
                    src={island5} bigSrc={islandBig5} position={{x: 100, y: 1200}} style={{width: 400, height: 300}}
                    actionButton={[
                        <Button onClick={()=>{Emitter.emit('global/showHall');}}>进入广场 >></Button>,
                    ]}
                    label="广场"
                >
                    <Person
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 480, y: 680}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 260, y: 100}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                </Island>
                <Island
                    src={island6} bigSrc={islandBig6} position={{x: 700, y: 1200}} style={{width: 400, height: 300}}
                    actionButton={[
                        <Button>
                            <Link to="/decorator">装饰空间 >></Link>
                        </Button>,
                        <Button>进入空间 >></Button>,
                    ]}
                    label="我的空间"
                >
                    <Person
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 480, y: 680}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 260, y: 100}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                </Island>
                <Island
                    src={island7} bigSrc={islandBig7} position={{x: 600, y: 0}} style={{width: 400, height: 300}}
                    actionButton={[
                        <Button>参加嘉年华 >></Button>,
                    ]}
                    label="嘉年华"
                >
                    <Person
                        position={{x: 480, y: 650}}
                        src={person2}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 480, y: 680}}
                        src={person3}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                    <Person
                        position={{x: 260, y: 100}}
                        src={person4}
                        onClick={()=>{Emitter.emit('global/showDialog', {name: '弟弟'});}}
                    />
                </Island>
            </DropableBox>
        );
    }

    renderDetail() {
        const {showDetail, showIslandDialog} = this.state;
        return (
            <Scene visible={showDetail}>
                <Mask>
                    <div style={{marginTop: '150px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                        <img src={detail} />
                        <span className="detail-text">巴啦啦小魔仙猪猪美琪变身！</span>
                    </div>
                    <div className="button-group-top">
                        <div onClick={()=>{
                            Emitter.emit('global/hideDetail');
                        }}><img className="back animated" src={back} /></div>
                    </div>                        
                </Mask>
            </Scene>
        );
    }
    renderIsland() {
        const {showIsland, showIslandDialog} = this.state;
        return (
            <Scene visible={showIsland}>
                <Mask>
                    <div style={{display: 'flex', marginTop: '20px', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                        <DialogItem {...this.data.dialogConfig} visible={showIslandDialog} />
                        <IslandDetail {...this.data.island} showPeople={!showIslandDialog}/>
                    </div>
                    <div className="button-group-top">
                        <div onClick={()=>{
                            Emitter.emit('global/hideIsland');
                        }}><img className="back animated" src={back} /></div>
                        <img className="icons animated" src={icons} />
                    </div>                        
                    <div className="button-group">
                        {this.data.actionButton}
                    </div>
                </Mask>
            </Scene>
        );

    }
    renderHall() {
        const {showIsland, showHall, showIslandDialog} = this.state;
        return (
            <Scene animateType={{
                inType: 'fadeIn',
                outType: 'fadeOut',
            }} visible={showHall}>
                <Hall background={hall}/>
            </Scene>
        );
    }
    render() {
        return (
            <div>
                {this.renderHome()}
                {this.renderIsland()}
                {this.renderHall()}
                {this.renderDetail()}
            </div>
        );
    }
}

// ReactDOM.render(
//     <Game />,
//     document.getElementById('app-root')
// );