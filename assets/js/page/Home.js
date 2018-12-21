/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import ReactDOM from 'react-dom';
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
import Emitter from '../Utils/Emitter';

import {
    island1, island2, island3, island4, island5, island6,
    islandBig1, islandBig2, islandBig3, islandBig4, islandBig5, islandBig6,
    cloud1, cloud2, cloud3, cloud4,
    info1,
    person1,
    hall,
    back, icons
} from '../Utils/imgPath';

class Game extends Component {
    state = {
        showIsland: false
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
    }
    render() {
        const {showIsland, showHall} = this.state;
        return (
            <div>
                <DropableBox
                    dropable={true}
                    canMove={!showIsland}
                    bgHeight={1600}
                    bgWidth={2600}
                    backgroundContent={<Background />}
                >
                    <BaseComp src={cloud1} position={{x: 600, y: 300}} style={{width: 150}}/>
                    <BaseComp src={cloud2} position={{x: 300, y: 1000}} style={{width: 150}}/>
                    <BaseComp src={cloud3} position={{x: 500, y: 1300}} style={{width: 150}}/>
                    <BaseComp src={cloud4} position={{x: 200, y: 1800}} style={{width: 150}}/>
                    <Island src={island1} bigSrc={islandBig1} shake={false} position={{x: 100, y: 200}} style={{width: 400, height: 400}}>
                        <Person pathParam="M10,80 q100,120 120,20 q140,-50 160,0" position={{x: 330, y: 200}} src={person1} style={{width: 85, height: 200}}/>
                        <Info position={{x: 200, y: 400}} src={info1} style={{width: 100, height: 100}}/>
                    </Island>
                    <Island
                        src={island2}
                        bigSrc={islandBig2}
                        position={{x: 500, y: 200}}
                        style={{width: 400}}
                        actionButton={[
                            <Button onClick={()=>{Emitter.emit('global/showHall');}}>进入广场 >></Button>,
                            <Button>进入广场 >></Button>
                        ]}
                    />
                    <Island
                        src={island3}
                        bigSrc={islandBig3}
                        position={{x: 700, y: 200}}
                        style={{width: 400}}
                    />
                    <Island src={island4} bigSrc={islandBig4} position={{x: 700, y: 700}} style={{width: 600, height: 400}} />
                    <Island src={island5} bigSrc={islandBig5} position={{x: 700, y: 1200}} style={{width: 600, height: 500}} />
                    <Island src={island6} bigSrc={islandBig6} position={{x: 700, y: 1600}} style={{width: 600, height: 400}} />
                </DropableBox>
                <Scene visible={showIsland}>
                    <Mask>
                        <IslandDetail {...this.data.island}/>
                        <div className="button-group-top">
                            <div onClick={()=>{
                                Emitter.emit('global/hideIsland');
                            }}><img src={back} /></div>
                            <img src={icons} />
                        </div>                        
                        <div className="button-group">
                            {this.data.actionButton}
                        </div>
                    </Mask>
                </Scene>
                <Scene visible={showHall}>
                    <Hall background={hall}/>
                </Scene>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('app-root')
);