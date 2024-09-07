import React from 'react';
import {Spin} from "antd";

const Loading: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10rem'
        }}>
            <Spin size="large"/>
            <h3>Loading</h3>
        </div>
    );
};

export default Loading;