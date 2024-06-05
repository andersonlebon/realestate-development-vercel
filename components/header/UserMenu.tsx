import Link from "next/link";
import { Button, Flex, Avatar } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import style from "./header.module.scss";

interface UserMenuProps {
  user: any;
  setLoginModal: (open: boolean) => void;
  setRegisterModal: (open: boolean) => void;
  onLogOut: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, setLoginModal, setRegisterModal, onLogOut }) => (
  !user ? (
    <div className="ltn__drop-menu user-menu">
      <ul>
        <li>
          <Link href="#">
            <Flex className="buttons" justify="center" align="center">
              <Button className={style.header_btn} icon={<UserOutlined />} type="link">
                Login/Register
              </Button>
            </Flex>
          </Link>
          <ul>
            <li>
              <Button type="link" onClick={() => { setLoginModal(true); setRegisterModal(false); }}>Sign in</Button>
            </li>
            <li>
              <Button type="link" onClick={() => { setRegisterModal(true); setLoginModal(false); }}>Register</Button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  ) : (
    <div className="ltn__drop-menu user-menu ml-3">
      <ul>
        <li>
          <Link href="#">
            <Flex className="buttons" justify="center" align="center">
              <Avatar size={35} icon={<UserOutlined />} />
            </Flex>
          </Link>
          <ul>
            <li>
              <Button className={style.header_btn} icon={<UserOutlined />} type="link" href="/account/dashboard">
                Profile
              </Button>
            </li>
            <li>
              <Button className={style.header_btn} icon={<SettingOutlined />} type="link" href="/account/settings">
                Settings
              </Button>
            </li>
            <li>
              <Button className={style.header_btn} icon={<LogoutOutlined />} onClick={onLogOut} type="link">
                Logout
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
);

export default UserMenu;
