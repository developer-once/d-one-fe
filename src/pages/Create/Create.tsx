import react, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import {
  createProject,
} from '../../services/api';

import './index.css'

const Create: React.FC = (props: any) => {
  const [count, setCount] = useState(0);

  const onFinish = (form: any) => {
    createProject(form).then((res) => {
      console.log(1111, res);
    })
  };
  const onFinishFailed = () => {};

  return (
    <div className="create">
      <div className='block'>
        <Form
          name="createProject"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="项目名称"
            name="name"
            rules={[{ required: true, message: '请输入项目名称!' }]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            新建项目
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Create
