import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";

interface UtilizeMenusProps {
  cartMenuOpener: boolean;
  setCartMenuOpener: (toggle: boolean) => void;
  offCanvasToggleBtn: boolean;
  setOffCanvasToggleBtn: (toggle: boolean) => void;
  closeSideBar: () => void;
}

const UtilizeMenus: React.FC<UtilizeMenusProps> = ({ cartMenuOpener, setCartMenuOpener, offCanvasToggleBtn, setOffCanvasToggleBtn, closeSideBar }) => (
  <>
    <HeaderCartMenu cartMenuOpener={cartMenuOpener} setCartMenuOpener={setCartMenuOpener} closeSideBar={closeSideBar} />
    <MobileMenu offCanvasToggleBtn={offCanvasToggleBtn} setOffCanvasToggleBtn={setOffCanvasToggleBtn} closeSideBar={closeSideBar} />
  </>
);

export default UtilizeMenus;
