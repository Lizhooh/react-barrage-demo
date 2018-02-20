import React, { Component } from 'react';
import styled from 'styled-components';
import Anit from './anit';

export default class Barrage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],       // 弹幕数据列表
            MAX: 30,        // 同屏最大弹幕数量
        }
    }

    push = (obj) => {
        obj = {
            id: Math.random(),
            vert: Math.random() * 320 + 30 | 0,
            ease: ['linear', 'ease', 'ease-in-out'][Math.random() * 3 | 0],
            ...obj,
        };

        let { list, MAX } = this.state;
        list = list.concat([obj]);

        // 控制数组的数量
        if (list.length > MAX) {
            list = list.slice(list.length - MAX, list.length);
        }

        this.setState({ list });
    }

    render() {
        const { barrage, list } = this.state;
        const { width, height } = this.props;

        return (
            <Panel>
                {list.map((bar, index) => (
                    <Anit
                        key={`barrage-${bar.id}`}
                        start={-30 * (bar.text + '').length}
                        end={width + 30}
                        // y 轴位置
                        vert={bar.vert}
                        // 持续时间
                        timeout={8000}
                        // 随机缓动系数
                        ease={bar.ease}
                        >
                        <img src={bar.avatar} className="avatar" />
                        <span>{bar.text}</span>
                    </Anit>
                ))}
            </Panel>
        );
    }
}

const Panel = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 1, 1, 0.35);
`;



