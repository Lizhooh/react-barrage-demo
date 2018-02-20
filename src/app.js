import React, { Component } from 'react';
import styled from 'styled-components';
import Barrage from './components/barrage';

export default class App extends Component {

    // 发弹幕
    send = () => {
        if (!this.input.value) return;
        this.barrage.push({
            text: this.input.value,
            avatar: require('./assets/timg.jpg'),
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.barrage.push({
                text: Math.random() * 1000 | 0,
                avatar: require('./assets/timg.jpg'),
            })
        }, 1000 * 1);
    }

    render() {

        return (
            <div>
                <Panel>
                    <Barrage ref={r => this.barrage = r} width={640} height={400} />
                </Panel>

                <div
                    className="flex flex-ai-center"
                    style={{ margin: '0 15px', width: 640 }}
                    >
                    <Input
                        placeholder="弹幕（最长 15 字）"
                        onKeyDown={e => e.key === 'Enter' && this.send()}
                        innerRef={r => this.input = r}
                        maxLength={15}
                        />
                    <Button onClick={e => this.send()}>发送</Button>
                </div>
            </div>
        );
    }
}

const Panel = styled.div`
    position: relative;
    width: 640px;
    height: 400px;
    margin: 15px;
    border-radius: 2px;
    border: 1px solid #ddd;
    background: url('${require('./assets/timg.jpg')}') center center;
    background-size: cover;
`;

const Button = styled.button`
    border: none;
    background-color: #f56;
    color: #fff;
    padding: 0.3em 1.2em;
    border-radius: 3px;
    outline: none;
    font-family: inherit;
    cursor: pointer;
    &:hover {
        background-color: #f45;
    }
    &:active {
        background-color: #f22;
    }
`;

const Input = styled.input`
    border: none;
    flex: 1;
    outline: none;
    margin-right: 10px;
    padding: 4px 8px;
    border-bottom: 1px solid #ddd;
    color: #444;
`;

