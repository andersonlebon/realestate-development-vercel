import Link from "next/link";
import style from '../header.module.scss';
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";

import {
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import Image from 'next/image';
import {
  getSiblings,
  getClosest,
  slideUp,
  slideDown,
  slideToggle,
} from "@/lib/product";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    parentEl.classList.toggle("active");
    if (
      parentEl?.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head w-full">
            <div className="site-logo">
            <Link href='/'>
											<div className={style.logo_container}>
												<div className={style.logo}></div>
												<div className='logo_text'>LOGO</div>
											</div>
										</Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu w-full">
            <ul>
              <li>
              
            <Link href="/">Home</Link>
            <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
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
            <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
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
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2 w-full">
            <ul>
              <li>
                <Link className="flex items-center w-full" href="/my-account" title="My Account" >
                  <span className="utilize-btn-icon flex items-center justify-center">
                    <FaRegUser />
                  </span>
                  My Account
                </Link>
              </li>
              <li>
                <Link className="flex items-center w-full" href="/auth" title="Wishlist">
                  <span className="utilize-btn-icon flex items-center justify-center">
                  <HiOutlineLogin />
                  </span>
                  LogIn
                </Link>
              </li>
              <li>
                <Link className="flex items-center w-full" href="/logout" title="Shoping Cart">
                  <span className="utilize-btn-icon flex items-center justify-center">
                  <IoIosLogOut />
                  </span>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2 w-full">
            <ul className="flex items-center">
              <li>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
