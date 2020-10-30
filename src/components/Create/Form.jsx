import React from 'react';
import { Input, Button, Select, Form, DatePicker, Divider, Upload } from 'antd';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

export default () => {
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue="94" style={{ width: 70 }}>
        <Option value="94">+94</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  
  return (
    <Form
      name="contactForm"
      form={form}
      layout="vertical"
    >
      <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='emailAddress' label="Email" rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date_of_birth" label="Date of Birth">
        <DatePicker style={{width: '100%'}} />
      </Form.Item>
      <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
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
}