'use client';
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import style from './search.module.scss'
import ForSele from './forSell';
import ForRent from './forRent';

const tabBarStyle = {
  fontSize: '8px !important',
  gap: '50px',
}

const Search = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'For Sale',
      children: <ForSele />,
    },
    {
      key: '2',
      label: 'For Rent',
      children: <ForRent />,
    }
  ];
  return (
    <div className={style.search}>
      <Tabs
    defaultActiveKey="1"
    items={items}
    // onChange={onChange}
    indicatorSize={(origin) => origin + 16}
    centered
    size="small"
    tabBarStyle={tabBarStyle}
    className={style.search_tabs}
  />

    </div>
  )
}

export default Search