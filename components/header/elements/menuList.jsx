import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const menuItems = [
  {
    label: "Menu",
    href: "#",
    subMenu: [
      {
        label: "Home",
        href: "/",
        subMenu: [
          { label: <img src="/images/home.png" alt="logo home" className="h-full w-full" />, href: "/#properties" },
        ],
      },
      {
        label: "Advanced Search",
        href: "/search",
        subMenu: [
          { label: "Properties", href: "/search/#properties" },
          { label: "Area Properties", href: "/search/#areaProperties" },
          { label: "Explore Neighbour", href: "/search/#explore" },
          { label: "Our Aminities", href: "/search/#aminities" },
          { label: "News & Blogs", href: "/search/#newsBlog" },
        ],
      },
      { label: "Agents", href: "/agents",
        subMenu: [
          { label: "Top Agents", href: "/agents#top" },
          { label: "All Agents", href: "/agents#all" },
          { label: "Active Agents", href: "/agents#active" },
          { label: "Gents near you", href: "/agents#near" },

        ],
       },
      { label: "Agencies", href: "/agencies",
        subMenu: [
          { label: "Top Agencies", href: "/agencies#top" },
          { label: "All Agencies", href: "/agencies#all" },
          { label: "Active Agencies", href: "/agencies#active" },
          { label: "Agencies near you", href: "/agencies#near" },
        ],
       },
    ],
  },
];

const renderSubMenu = (subMenu) => {
  return (
    <ul className="sub-menu">
      {subMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.label}</Link>
          {item.subMenu && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );
};

const MenuList = () => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => (
        <li key={index} className="menu-icon mega-menu-parent">
          <Link
            href={menuItem.href}
            className="w-[50px] h-[50px] bg-primary2 flex justify-center items-center rounded-full"
          >
            <CiMenuFries className="text-3xl" />
          </Link>
          <ul className="mega-menu mega-menu column-4">
            {menuItem.subMenu &&
              menuItem.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.href}>{subItem.label}</Link>
                  {subItem.subMenu && renderSubMenu(subItem.subMenu)}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
