import react, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.css';

import {
  getUserLogin,
} from '../../services/api';

const Create: React.FC = (props: any) => {
  const [count, setCount] = useState(0);

  const onFinish = (form: any) => {
    getUserLogin(form).then((res) => {
      if (res && res.id) {
        window.location.href = "/";
      }
    })
  };
  const onFinishFailed = () => {};

  return (
    <div className="login">
      <div className='login-show'></div>
      <div className='login-block'>
        <div className='login-content'>
          <div className='login-text login-title'>登录账号</div>
          <div className='login-text login-step'>Eagle-EYE 一键接入 YYDS</div>
          <Form
            name="login"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Create
