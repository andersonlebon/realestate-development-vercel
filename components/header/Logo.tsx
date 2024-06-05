import Link from "next/link";
import style from "./header.module.scss";

const Logo = () => (
  <div className="site-logo-wrap">
    <div className="site-logo">
      <Link href="/">
        <div className={style.logo_container}>
          <div className={style.logo}></div>
          <div className="logo_text">LOGO</div>
        </div>
      </Link>
    </div>
  </div>
);

export default Logo;
