'use client';

import { Input, Form, Button } from 'antd';
import style from './search.module.scss'
import { SearchOutlined } from '@ant-design/icons';


const ForRent = () => {
  return (
    <Form name="trigger" layout="vertical" className={style.rent_form}>

    <Form.Item
      name="location"
      rules={[{ max: 3 }]}
      className={style.form_item}
    >
      <Input placeholder="New York, San Francisco, etc" bordered={false} className={style.input} />
    </Form.Item>

    <Form.Item
      name="type"
      rules={[{ max: 3 }]}
      className={style.form_item}
    >
      <Input placeholder="Select property type" bordered={false} className={style.input} />
    </Form.Item>

    <Form.Item
      name="rooms"
      className={style.form_item}
    >
      <Input placeholder="Select number of rooms" bordered={false} className={style.input} />
    </Form.Item>
    <Button type="link" className={style.advance_search}>
      Advance Search</Button>

    <Button icon={<SearchOutlined className={style.search_icon}
       />} 
       className={style.search_btn} type="primary" htmlType="submit"> Search </Button> 
  </Form>
  );

}

export default ForRent