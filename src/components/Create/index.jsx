import React from 'react';
import { Card, Row, Col, Avatar, PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Form from './Form';
import { withRouter } from 'react-router';

const Create = (props) => {
  const { history: { goBack} } = props;
  return (
    <PageHeader
    className="site-page-header"
    onBack={() => goBack()}
    title="Back"
    subTitle="List view"
    >
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
    </PageHeader>
  )
}

export default withRouter(Create);