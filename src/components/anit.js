import React, { Component } from 'react';
import styled from 'styled-components';

export default class Anit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: this.props.start,
            ok: false,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !this.state.ok;      // 初始化后就不更新了
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ x: this.props.end, ok: true });
        }, 0);
    }

    render() {
        const { x } = this.state;
        const { timeout, vert, ease = 'linear' } = this.props;

        return (
            <Panel
                timeout={timeout}   // 持续时间
                x={x}               // X 轴位置
                y={vert}            // Y 轴的位置
                ease={ease}         // 随机缓动系数
                >
                {this.props.children}
            </Panel>
        );
    }
}

const Panel = styled.div`
    position: absolute;
    top: ${p => p.y || 0}px;
    left: 0;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 2px 2px rgba(1, 1, 1, 0.32);
    transition: transform ${p => p.timeout}ms ${p => p.ease};
    transform: translate3d(${p => p.x || -100}px, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        margin-right: 5px;
    }
`;

