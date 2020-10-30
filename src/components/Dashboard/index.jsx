import React from 'react';
import { Row, Col } from 'antd';

import Profile from './profile';
import List from './list';


const Dashboard = () => {
  return (
    <Row gutter={[64, 64]}>
      <Col span={12}>
        <Profile />
      </Col>
      <Col span={12}>
        <List />
      </Col>
    </Row>
  )
};

export default Dashboard;