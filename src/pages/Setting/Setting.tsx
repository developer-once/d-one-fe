import react, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
  Collapse,
  Form,
  Input,
  Switch,
  Button,
  message,
} from 'antd';

import {
  getProject,
  setProjectConfig
} from '../../services/api';

import './index.css'

const { Panel } = Collapse;

const Setting: React.FC = (props: any) => {
  const params: any = useParams();
  const [ form ] = Form.useForm();
  const [count, setCount] = useState(0);
  const [ project, setProject ] = useState({
    name: "",
    serverOpenRecord: false
  });

  const text = `
    <div>const monitor = eagleSDK.initMonitor({</div>
    <div>&nbsp;&nbsp;url: "${window.location.host}/api/report",</div>
    <div>&nbsp;&nbsp;app_key: ${params.id},</div>
    <div>&nbsp;&nbsp;startTime: new Date().getTime(),</div>
    <div>});</div>
  `;
  const useImport = `
  `;
  const href = `
    <script crossorigin="anonymous" src="http://ss.bscstorage.com/xux-build/file/eagle-eye.js"></script>
  `;

  // --- 获取项目详情 ---
  useEffect(() => {
    getProject({
      app_key: params.id
    }).then((res) => {
      setProject(res);
    })
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    if (values) {
      setProjectConfig({
        ...values,
        app_key: params.id
      }).then((res: any) => {
        message.success('设置成功！');
      })
    }
  };

  return (
    <div className="setting">
      <div className='setting-block'>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Npm 方式接入" key="1">
            <p></p>
            <div className='rich-text'>{useImport}</div>
            <div className='rich-text' dangerouslySetInnerHTML={{ __html: text }} />
          </Panel>
          <Panel header="Script 方式接入" key="2">
            <div className='rich-text'>{href}</div>
            <p></p>
            <div className='rich-text' dangerouslySetInnerHTML={{ __html: text }} />
          </Panel>
        </Collapse>
        <div className='block'>
          <p>项目设置</p>
          <Form
            form={form}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 6 }}
            onFinish={onFinish}
          >
            {/* ----- Name -----  */}
            <Form.Item name="name" label={"项目名"} rules={[{ required: true }]}>
              <Input placeholder={project.name} />
            </Form.Item>

            {/* ----- Name -----  */}
            <Form.Item name="serverOpenRecord" label={"开启错误录屏"}>
              <Switch defaultChecked={project.serverOpenRecord} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 3, span: 6 }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Setting
