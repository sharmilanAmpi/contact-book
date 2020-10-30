import React from 'react';
import {
  Card, Row, Col, Avatar, Divider, Descriptions, Button, Typography,
} from 'antd';
import {
  UserOutlined, EditOutlined, DeleteOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';

const { Title } = Typography;


const Profile = (props) => {
  const {
    profile: {
      first_name,
      last_name,
      date_of_birth,
      address,
      email,
      phone,
    }
  } = props;

  return (
    <Card style={{ textAlign: 'center'}}>
      <Avatar
        shape="square"
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 240 }}
        icon={<UserOutlined />}  
        style={{marginBottom: 20}}
      />
      <Title level={3}>{[first_name, last_name].join(' ')}</Title>
      <Title level={4}>{date_of_birth}</Title>
      <Divider></Divider>
      <Descriptions
          size="small"
          layout="vertical"
          column={{
              lg: 2, md: 2, sm: 1, xs: 1,
          }}
          title="Contact Details"
          style={{ marginBottom: 10, textAlign: 'left' }}
          >
          <Descriptions.Item label="Phone Numeer">{phone}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Address">{address}</Descriptions.Item>
      </Descriptions>
      <Divider></Divider>
      <Row>
        <Col span={4}>
          <Button
            icon={<EditOutlined />}
            type="primary"
            block
          >
            Edit
          </Button>
        </Col>
        <Col span={4} offset={16}>
          <Button
            icon={<DeleteOutlined />}
            danger
            block
          >
            Remove
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

const mapState = ({profile: {
  profile
}}) => {
  return { profile };
};
export default connect(mapState, {})(Profile);