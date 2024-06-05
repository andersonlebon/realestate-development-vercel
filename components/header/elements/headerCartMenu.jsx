import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { getDiscountPrice, productSlug } from "@/lib/product";
import Image from 'next/image';
const HeaderCartMenu = function ({ cartMenuOpener, closeSideBar }) {
  let cartTotalPrice = 0;
  return (
    <div
      id="ltn__utilize-cart-menu"
      className={`ltn__utilize ltn__utilize-cart-menu ${
        cartMenuOpener ? "ltn__utilize-open" : ""
      }`}
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <span className="ltn__utilize-menu-title">Cart</span>
          <button onClick={closeSideBar} className="ltn__utilize-close">
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCartMenu;
