import React from 'react'
import { Layout, Menu } from 'antd';

import sm_logo from '../../images/small-logo.png'

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header style={{ backgroundColor: "white", display: 'flex', justifyContent: 'space-between' }}>
            <Menu mode='horizontal'>
                <Menu.Item key='1'>
                    <img src={sm_logo} alt='small-logo' />
                </Menu.Item>
            </Menu>
            <Menu mode='horizontal'>
                <Menu.Item key='2'>Services</Menu.Item>
                <Menu.Item key='3'>Dashboard</Menu.Item>
                <Menu.Item key='4'>Search for groomers</Menu.Item>
            </Menu>

        </Header>
    )
}

export default Navbar
