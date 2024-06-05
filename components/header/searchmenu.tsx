import React from "react";
import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image';
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from './header.module.scss';

const MenuList = ({ addListing }) => {
  return (
    <ul>

      <li className="menu-icon mega-menu-parent">
        <Link href="#" className="w-[50px] h-[50px] bg-primary2 flex justify-center items-center rounded-full">
        <Button
														icon={
															<SearchOutlined className={style.search_icon} />
														}
														className={style.search_btn}
														type='primary'
														htmlType='submit'
													>
														Advanced search
													</Button>
                          
        </Link>
        <ul className="mega-menu mega-menu column-4">
        <li>
              
              <Link href="/">Home</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/#properties">Property</Link>
                </li>
                <li>
                  <Link href="/#areaProperties">Area Properties</Link>
                </li>
  
                <li>
                  <Link href="/#explore">Explore Neighbour</Link>
                </li>
  
                <li>
                  <Link href="/#aminities">Our Aminities</Link>
                </li>
                <li>
                  <Link href="/#newsBlog">News & Blogs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/search">Advanced Search</Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/search#exploreNeighbour">Explore Neighbour</Link>
                </li>
                <li>
                  <Link href="/search#aminities">Our Aminities</Link>
                </li>
                <li>
                  <Link href="search#newsBlog">News & Blogs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/agents">Agents</Link>
            </li>
            <li>
              <Link href="/agencies">Agencies</Link>          
            </li>
            <li>
              <Link href="/properties">Properties</Link>
            </li>
        </ul>
      </li>
    </ul>
  );
};

export default MenuList;
