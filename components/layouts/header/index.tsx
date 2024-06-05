'use client';

import { Breadcrumb, Layout, Menu, theme, Button, Flex } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import style from './header.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Header } = Layout;



const Hearder = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Home',
    },
    {
      key: '2',
      label: 'Rent',
    },
    {
      key: '3',
      label: 'Sell',
    },
    {
      key: '4',
      label: 'Mortgage',
    },
    {
      key: '5',
      label: 'Find an Agent',
    }
  ];
  const router = useRouter();
  return (
    <Header className={style.header}>
      <Menu
        items={items}
        mode="horizontal"
        className={style.menu}
        inlineCollapsed={false}
        defaultActiveFirst
      />
      <div className={style.logo_container} onClick={() => router.push('/')}>
        <div className={style.logo}>

        </div>
        <div className="logo_text">
          LOGO
        </div>
      </div>
      <div className={style.menu_container}>
        <div className={style.menu_humberger}>
          <MenuOutlined />
        </div>
      </div>
      <Flex className="buttons" justify='center' align='center' >
        <Button className={style.header_btn}
          icon={<UserOutlined />}
          type="link"
          onClick={() => router.push('/login')}
        >
          Login/Register</Button>
        <Link href="/search">
          <Button icon={<SearchOutlined className={style.search_icon}
          />}
            className={style.search_btn} type="primary" htmlType="submit"> Advanced search
          </Button>
        </Link>
      </Flex>

    </Header>
  )
}

export default Hearder