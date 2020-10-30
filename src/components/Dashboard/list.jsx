import React, { useEffect } from 'react';
import moment from 'moment';
import {
  Card, Row, Col, Avatar, Table, Button, Input
} from 'antd';
import {
  UserOutlined, PlusOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchList } from '../../actions/list.actions';
import { selectProfile } from '../../actions/profile.actions';

const { Search } = Input;

const onSearch = () => {}

const List = (props) => {
  const {
    fetchList,
    list,
    selectProfile,
  } = props;

  const onSelect = (id) => {
    selectProfile(id);
  }
  useEffect(() => {
    fetchList();
  }, []);

  const columns = [
    {
      title: '',
      key: 'image',
      render: (row) => <Avatar icon={<UserOutlined />} />
    },
    {
      title: 'Name',
      key: 'name',
      render: ({id, first_name, last_name}) => (
        <a onClick={() => onSelect(id)}>{[first_name, last_name].join(' ')}</a>
      ),
    },
    {
      title: 'Date of Birth',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
      render: (date) => moment(date, 'L').format('LL')
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];
  return (
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
        dataSource={list}
        columns={columns} 
        pagination={{total: 2 }}
      />
    </Card>
  )
};

const mapState = ({list: {
  list,
  isLoading,
  error,
}}) => {
  return { list, isLoading, error };
};
const mapActions = {
  fetchList,
  selectProfile,
}
export default connect(mapState, mapActions)(List);