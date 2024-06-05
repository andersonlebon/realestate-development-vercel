import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderTopInfo from "../elements/headerTopInfo";
import HeaderSocialLinks from "../elements/headerSocialLinks";

const HeaderTopBarOne = function () {
  return (
    <>
      <div className="ltn__header-top-area top-area-color-white---">
        <Container>
          <Row>
            <Col xs={12} md={7}>
              <HeaderTopInfo/>
            </Col>
            <Col xs={12} md={5}>
              <div className="top-bar-right text-end">
                <div className="ltn__top-bar-menu mx-auto">
                  <ul>
                    <li className="flex items-center">
                      <HeaderSocialLinks/>
                    </li>
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

export default HeaderTopBarOne;
