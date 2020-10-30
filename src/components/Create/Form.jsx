import React, { useEffect } from 'react';
import { Input, Button, Select, Form, DatePicker, Divider, Upload } from 'antd';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import moment from 'moment';

import config from '../../config';
import { create as createContact, update as updateContact, getContact } from '../../actions/contact.actions';
import { withRouter } from 'react-router';
const { Option } = Select;
const { countryCodes } = config;

const CreateForm = (props) => {
  const {
    createContact,
    updateContact,
    getContact,
    selectedContact,
    match: { params: {contactId}}
  } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    getContact(contactId);
  }, [contactId]);

  useEffect(() => {
    console.log(selectedContact)
    if (selectedContact && selectedContact.id) {
      const {date_of_birth, phone} = selectedContact;
      form.setFieldsValue({
        ...selectedContact,
        date_of_birth: moment(date_of_birth, 'L'),
        prefix: phone.split(" ")[0],
        phone: phone.split(" ")[1]
      });
    }
  }, [selectedContact]);

  const onFinish = (values) => {
    const {phone, prefix, date_of_birth} = values;
    const formData = {
      ...values,
      phone: `${prefix} ${phone}`,
      date_of_birth: date_of_birth.format('L')
    }
    contactId ? updateContact(contactId, formData) : createContact(formData)
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
  selectedContact
}}) => ({
  isCreating,
  isUpdating,
  updateError,
  createError,
  selectedContact,
});
const mapActions = {
  createContact,
  updateContact,
  getContact
}

export default withRouter(connect(mapState, mapActions)(CreateForm));