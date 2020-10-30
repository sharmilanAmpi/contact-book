import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Form from './Form';

export default function Create() {
  
  return (
    <>
      <Card>
        <Row>
          <Col span={6} style={{textAlign: "center"}}>
            <Avatar
              shape="square"
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 240 }}
              icon={<UserOutlined />}  
            />
          </Col>
          <Col span={18}>
            <Form />
          </Col>
        </Row>
      </Card>
    </>
  )
}