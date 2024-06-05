import React from 'react';
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Image from 'next/image';
import { AgencyItemResponseDTO } from "../../hooks/agency/dtos/agency.dto.res";

type AboutUsOneProps = {
  sectionSpace: string;
  agencyId: string;
  agencyData: AgencyItemResponseDTO;
  agencyPending?: boolean;
};

function AboutUsSectionOne({ 
  sectionSpace, agencyId, agencyData
}: AboutUsOneProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                   {agencyData.header_intro || "No header provided"}<span>.</span>
                  </h1>
                  <p>
                    {agencyData?.about || "No about us description found"}
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  {/* <li>
                    <i className="flaticon-home-2"></i>
                    Smart Home Design
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Beautiful Scene Around
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Exceptional Lifestyle
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Complete 24/7 Security
                  </li> */}

                  {agencyData?.services && agencyData?.services?.length > 0 ? (
                      agencyData.services.map((service, index) => (
                      <li key={index}>
                        <i className={service.icon || "flaticon-house"}></i>
                        {service.title}
                      </li>
                    ))
                  ) : (
                    <li>
                      <i className="flaticon-house"></i>
                      No services found
                    </li>
                  )}

                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Enimad minim veniam quis nostrud exercitation <br />
                    llamco laboris. Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href={`/agencies/${agencyId}/service`}
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsSectionOne;
