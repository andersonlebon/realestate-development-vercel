"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth";
import { useAppContext } from "@/context";
import HeaderTopBarOne from "./headerTopBar";
import MenuList from "@/components/header/elements/menuList";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import UserMenu from "./UserMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import Overlay from "./Overlay";

interface HeaderStyleOneProps {
  SetToggleClassName: (toggleClassName: boolean) => void;
  topbar: boolean;
}

const HeaderStyleOne: React.FC<HeaderStyleOneProps> = ({ SetToggleClassName, topbar }) => {
  const [searchFormOpener, setSearchFormOpener] = useState(false);
  const [cartMenuOpener, setCartMenuOpener] = useState(false);
  const [overlayBtn, setOverlayBtn] = useState(false);
  const [offCanvasToggleBtn, setOffCanvasToggleBtn] = useState(false);
  const router = useRouter();
  const { user, logOut } = useAuthContext();
  const { setLoginModal, setRegisterModal } = useAppContext();

  const handleScroll = () => setScroll(window.scrollY);
  const onLogOut = () => {
    logOut();
    window.location.reload();
  };

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky") as HTMLElement;
    setHeaderHeight(header?.offsetHeight || 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="ltn__header-area ltn__header-5">
        {topbar && <HeaderTopBarOne />}
        <div className={clsx("ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white", scroll > headerHeight && "sticky-active")}>
          <Container>
            <Row>
              <Col>
                <Logo />
              </Col>
              <Col className="ltn__header-options ltn__header-options-2 mb-sm-20">
                <SearchButton searchFormOpener={searchFormOpener} setSearchFormOpener={setSearchFormOpener} />
                <UserMenu user={user} setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} onLogOut={onLogOut} />
                <MobileMenuToggle offCanvasToggleBtn={offCanvasToggleBtn} setOffCanvasToggleBtn={setOffCanvasToggleBtn} setToggleClassName={SetToggleClassName} setOverlayBtn={setOverlayBtn} />
              </Col>
              <Col className="header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu flex items-center justify-end">
                      <MenuList />
                    </div>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <HeaderCartMenu cartMenuOpener={cartMenuOpener} setCartMenuOpener={setCartMenuOpener} closeSideBar={() => setOverlayBtn(false)} />
      <MobileMenu offCanvasToggleBtn={offCanvasToggleBtn} setOffCanvasToggleBtn={setOffCanvasToggleBtn} closeSideBar={() => setOverlayBtn(false)} />
      <Overlay overlayBtn={overlayBtn} setOverlayBtn={setOverlayBtn} />
    </>
  );
};

export default HeaderStyleOne;
