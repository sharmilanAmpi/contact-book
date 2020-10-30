import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './Routes'
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '50px', minHeight: '100vh' }}>
          <div className="site-layout-content"><Routes /></div>
        </Content>
      </Layout>,
    </Router>
  );
}