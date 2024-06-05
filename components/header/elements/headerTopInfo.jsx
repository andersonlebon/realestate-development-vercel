import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul className="flex items-center">
          <li>
            <Link href="mailto:info@webmail.com" className="flex items-center">
              <FaEnvelope />
              <i></i> info@webmail.com
            </Link>
          </li>
          <li>
            <Link href="/locations" className="flex items-center">
              <FaMapMarkerAlt />
              15/A, Nest Tower, NYC
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
