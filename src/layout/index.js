import { Component } from 'react';
import { Layout } from 'antd';

// Header, Footer, Sider, Content 组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>Sider</Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>{ this.props.children }</Content>
                    <Footer style={{ textAlign: 'center' }}>©2018 Hermanzh</Footer>
                </Layout>
            </Layout>
        )
    }
}