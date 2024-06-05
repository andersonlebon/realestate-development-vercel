import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome, FaAngleRight } from "react-icons/fa";

const BreadCrumb = ({ title, currentSlug, sectionPace }) => {
  return (
    <>
      <div
        className={`ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image ${sectionPace}`}
        style={{ backgroundImage: `url("../img/bg/14.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title">{title}</h1>
                <div className="ltn__breadcrumb-list">
                  <ul className="flex items-center">
                    <li className="flex justify-center items-center">
                      <Link href="/" className="flex justify-center items-center">
                        <span className="ltn__secondary-color">
                          <FaHome className="me-2" />
                        </span>
                        <span className="me-2">Home</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link href="/properties" className="flex justify-center items-center">
                        <span className="me-2">Properties</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>{currentSlug}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BreadCrumb;
