import React from 'react';
import { Input, Button, Select, Form, DatePicker, Divider, Upload } from 'antd';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import config from '../../config';
import { create as createContact, update as updateContact } from '../../actions/contact.actions';
const { Option } = Select;
const { countryCodes } = config;

const CreateForm = (props) => {
  console.log(props);
  const {
    createContact
  } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    const {phone, prefix, date_of_birth} = values;
    createContact({
      ...values,
      phone: `${prefix} ${phone}`,
      date_of_birth: date_of_birth.format('L')
    });
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        {countryCodes.map(code => <Option value={`+${code}`}>{`+${code}`}</Option>)}
      </Select>
    </Form.Item>
  );
  
  return (
    <Form
      name="contactForm"
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date_of_birth" label="Date of Birth">
        <DatePicker style={{width: '100%'}} />
      </Form.Item>
      <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
        <Input addonBefore={prefixSelector}/>
      </Form.Item>
      <Form.Item name="address" label="Address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Profile Picture"
        name="profilePicture"
        valuePropName="fileList"
        extra="Contact profile"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Divider></Divider>
      <Form.Item >
        <Button
          icon={<SaveOutlined />}
          type="primary"
          htmlType="submit"
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  )
};

const mapState = ({contact: {
  isCreating,
  isUpdating,
  updateError,
  createError,
}}) => ({
  isCreating,
  isUpdating,
  updateError,
  createError,
});
const mapActions = {
  createContact,
  updateContact,
}

export default connect(mapState, mapActions)(CreateForm);