import React from 'react';
import {
  Card, Row, Col, Avatar, Typography, Table, Divider, Descriptions, Button, Input
} from 'antd';
import {
  UserOutlined, PlusOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const { Search } = Input;
const { Title, Text } = Typography;

const onSearch = () => {}

const dataSource = [
  {
    key: '1',
    name: 'Mike Boston',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934'
  },
  {
    key: '2',
    name: 'John Cornr',
    date_of_birth: '24th October 1978',
    phone: '+94 77 3425 775'
  },
  {
    key: '1',
    name: 'Mike Boston',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934'
  },
  {
    key: '2',
    name: 'John Cornr',
    date_of_birth: '24th October 1978',
    phone: '+94 77 3425 775'
  },
  {
    key: '1',
    name: 'Mike Boston',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934'
  },
  {
    key: '2',
    name: 'John Cornr',
    date_of_birth: '24th October 1978',
    phone: '+94 77 3425 775'
  },
  {
    key: '1',
    name: 'Mike Boston',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934'
  },
  {
    key: '2',
    name: 'John Cornr',
    date_of_birth: '24th October 1978',
    phone: '+94 77 3425 775'
  },
];

const columns = [
  {
    title: '',
    key: 'image',
    render: (row) => <Avatar icon={<UserOutlined />} />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];


export default () => {
  return (
    <>
      <Row gutter={[64, 64]}>
        <Col span={12}>
          <Profile profile={{}} />
        </Col>
        <Col span={12}>
          <Card>
            <Row gutter={[16,16]}>
              <Col span={18}>
                <Search
                  placeholder="Insert search text"
                  onSearch={onSearch}
                  enterButton
                />
            </Col>
              <Col span={4} offset={2}>
                <Link to="/create">
                  <Button
                    icon={<PlusOutlined />}
                    type="primary"
                    block
                  >Create</Button>
                </Link>
                
              </Col>
            </Row>
            <Table
              dataSource={dataSource}
              columns={columns} 
              pagination={{total: 2 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}