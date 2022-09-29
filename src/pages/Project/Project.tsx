import React, { useState, useCallback, useEffect } from 'react';
import {
  Form,
  Select,
  Input,
  Button,
  Drawer,
  Space,
} from 'antd';

import {
  createProject,
  getProjectList,
} from '../../services/api';
import "./index.css"

const { Search } = Input;
const { Option } = Select;

function Project() {
  const [ page, setPage ] = useState(1);
  const [ total, setTotal ] = useState(1);
  const [ form ] = Form.useForm();
  const [ visible, setVisible ] = useState(false);
  const [ project, setProject ] = useState([]);
  const [ count, setCount ] = useState(0);
  const [ name, setName ] = useState("");

  // ------ 请求项目列表 ------
  useEffect(() => {
    getProjectList({ name: name }).then((res) => {
      setProject(res || []);
    });
  }, [name]);

  const onSearch = (value: string) => {
    setName(value);
  }

  const onFinish = (value: any) => {
    if (!value.name) { return };
    createProject(value).then((res) => {
      window.location.href = `/home/${res}`
    })
  }

  const onSubmit = () => {
    form.submit();
  }

  const onClose = () => {
    setVisible(!visible);
  }

  return (
    <div className='wrapper'>
      {/* ---- Form ---- */}
      <div className='search-block'>
        <Search className='search-input' placeholder={"项目名"} onSearch={onSearch}></Search>
        <Button className='create-button' type="primary" onClick={() => {
          setVisible(true);
        }}>创建项目</Button>
      </div>

      {/* ---- List ---- */}
      <div className='list-block block'>
        {
          project.map((item: any, index: number) => {
            return (
              <div className='list-item' key={index}>
                <div className='item-box'>
                  <p className='title'>{item.name}</p>
                  <Button onClick={() => {
                    window.location.href = `/home/${item.app_key}`
                  }}>查看项目</Button>
                </div>
                <div className='item-box'>
                  <div className='text'>desc</div>
                  <div className='text'>状态：</div>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* ---------- 弹窗 ---------- */}
      <Drawer
        width={720}
        footer={
          <Space className='drawer-footer'>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
        title="创建项目"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Form
          className="block-form"
          form={form}
          name="topUrl"
          onFinish={onFinish}
        >
          {/* --- 项目名称 --- */}
          <Form.Item
            labelAlign="left"
            name="name"
            className='right-item'
            label={"项目名称"}
          >
            <Input></Input>
          </Form.Item>
        </Form>
      </Drawer>

    </div>
  )
}

export default Project;
