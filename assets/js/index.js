/**
 * Created by Kevin on 16/8/8.
 */
// require lib
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Background from './component/Background';
import Mask from './component/Mask';
import Button from './component/Button';
import Island from './component/Island';
import Person from './component/Person';
import Info from './component/Info';
import BaseComp from './component/BaseComp';
import DropableBox from './component/DropableBox';
import Emitter from './Utils/Emitter';

import {
    island1, island2, island3, island4, island5, island6,
    islandBig1, islandBig2, islandBig3, islandBig4, islandBig5, islandBig6,
    cloud1, cloud2, cloud3, cloud4,
    info1,
    person1
} from './Utils/imgPath';

class Game extends Component {
    state = {
        showMask: false
    }
    componentDidMount() {
        Emitter.on('global/showMask', ()=>{
            this.setState({
                showMask: true
            });
        });
        Emitter.on('global/hideMask', ()=>{
            this.setState({
                showMask: false
            });
        });
    }
    render() {
        const {showMask} = this.state;
        return (
            <DropableBox
                dropable={true}
                canMove={!showMask}
                bgHeight={1600}
                bgWidth={2600}
                backgroundContent={<Background />}
                maskContent={<Button className="mask-button">我是一个按钮</Button>}
                showMask={showMask}
            >
                {showMask && <Mask />}
                <BaseComp src={cloud1} position={{x: 600, y: 300}} style={{width: 150}}/>
                <BaseComp src={cloud2} position={{x: 300, y: 1000}} style={{width: 150}}/>
                <BaseComp src={cloud3} position={{x: 500, y: 1300}} style={{width: 150}}/>
                <BaseComp src={cloud4} position={{x: 200, y: 1800}} style={{width: 150}}/>
                <Island src={island1} bigSrc={islandBig1} shake={false} position={{x: 100, y: 200}} style={{width: 400, height: 400}}>
                    <Person pathParam="M10,80 q100,120 120,20 q140,-50 160,0" position={{x: 330, y: 200}} src={person1} style={{width: 85, height: 200}}/>
                    <Info position={{x: 200, y: 400}} src={info1} style={{width: 100, height: 100}}/>
                </Island>
                <Island src={island2} bigSrc={islandBig2} position={{x: 500, y: 200}} style={{width: 400}} />
                <Island src={island3} bigSrc={islandBig3} position={{x: 700, y: 200}} style={{width: 400}} />
                <Island src={island4} bigSrc={islandBig4} position={{x: 700, y: 700}} style={{width: 600, height: 400}} />
                <Island src={island5} bigSrc={islandBig5} position={{x: 700, y: 1200}} style={{width: 600, height: 500}} />
                <Island src={island6} bigSrc={islandBig6} position={{x: 700, y: 1600}} style={{width: 600, height: 400}} />
            </DropableBox>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('app-root')
);