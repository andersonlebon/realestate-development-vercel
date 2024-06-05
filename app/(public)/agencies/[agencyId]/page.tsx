"use client";

import React from "react";
import Link from "next/link";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
// import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/service";
import TeamItem from "@/components/team";
import TeamData from "@/data/team";
import Accordion from "react-bootstrap/Accordion";
import PropertyItem from "@/components/product/property";
import {
  FaPlay,
  FaSearch,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import { useGetAgencyById } from "../../../../hooks/agency/agency-hook";
import AboutUsSectionOne from "../../../../components/aboutUs/AboutUsSectionOne";
import CounterUp from "../../../../components/counterUp";

interface AgencyIdParams {
  params: { agencyId: string };
}

const AgencyPage: React.FC<AgencyIdParams> = ({ params }: AgencyIdParams) => {
  const { data: agencyData, isPending: agencyPending } = useGetAgencyById(
    params.agencyId
  );

  const agents = getProducts(TeamData, "buying", "featured", 3);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

	const productsettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};


  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <ShopBreadCrumb
        title={`About ${agencyData?.name}`}
        sectionPace=""
        currentSlug="About agency"
      />

      <AboutUsSectionOne
        sectionSpace="pb-90"
        agencyId={params?.agencyId}
        agencyData={agencyData || {}}
        agencyPending={agencyPending}
      />

      <Feature
        classes="section-bg-1"
        servicebtn={true}
        iconTag={false}
        agencyId={params?.agencyId}
        data={featureData}
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />

      <div className="ltn__team-area pt-115 pb-90">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Team",
                  title: "Our Agents",
                }}
              />
            </Col>
          </Row>

          <Row>
            {agencyData?.agents && agencyData?.agents?.length > 0 ? (
              agencyData?.agents?.map((data, key) => {
                const slug = productSlug(data.full_name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4}>
                    <TeamItem
                      baseUrl="blog"
                      data={data}
                      // slug={slug}
                      additionalClassname=""
                    />
                  </Col>
                );
              })
            ) : (
              <p>No agents available</p>
            )}

          </Row>
          <Link
            className="ml-16 flex items-center	"
            href={`/agents/${params.agencyId}`}
          >
            <span>Se more Agents</span>
            <i className="flaticon-right-arrow px-2 leading-none"></i>
          </Link>
        </Container>
      </div>

      <div className="ltn__team-area pt-115 pb-90">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Properties",
                  title: "Some of our Properties",
                }}
              />
            </Col>
          </Row>

          <Row>
            {!!agencyData?.properties?.length ? (
              <Slider
                {...productsettings}
                className="ltn__product-slider-item-four-active-full-width slick-arrow-1 w-full"
              >
                {agencyData?.properties?.map((property, key) => {

                  return (
                    <PropertyItem
                      key={key}
                      property={property}
                      baseUrl={`/agencies/${params?.agencyId}/properties`}
                    />
                  );
                })}
              </Slider>
            ) : null}
          </Row>
          <Row className="flex justify-between items-center w-full">
            <div className="flex justify-between items-center w-full">
              <Link
                className="ml-16 flex items-center	"
                href={`/agents/${params?.agencyId}/properties`}
              >
                <span>Se more properties</span>
                <i className="flaticon-right-arrow px-2 leading-none"></i>
              </Link>

              <Link className="ml-16 flex items-center	" href={`properties/new`}>
                <span>Add new propertie</span>
                <i className="flaticon-right-arrow px-2 leading-none"></i>
              </Link>
            </div>
          </Row>
        </Container>
      </div>
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <Row>
            <Col xs={12} lg={8}>
              <div className="ltn__faq-inner ltn__faq-inner-2">
                {agencyPending ? (
                  <p>Loading...</p>
                ) : agencyData?.fa_questions &&
                  agencyData?.fa_questions?.length > 0 ? (
                  <Accordion defaultActiveKey={agencyData?.fa_questions[0]}>
                    {agencyData?.fa_questions?.map((question, index) => (
                      <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>{question.title}</Accordion.Header>
                        <Accordion.Body>
                          <p>{question.description}</p>
                          {question.video_explanation_url && (
                            <div className="ltn__video-img alignleft visible">
                              <img
                                src="/img/bg/17.jpg"
                                alt="video popup bg image"
                              />
                              <button
                                className="ltn__video-icon-2 ltn__video-icon-2-small"
                                onClick={() => setOpen(true)}
                              >
                                <FaPlay />
                              </button>
                            </div>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How to buy a product?</Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How can i make refund from your website?
                        </Accordion.Header>
                        <Accordion.Body >
                          <div className="ltn__video-img alignleft visible">
                            <img
                              src="/img/bg/17.jpg"
                              alt="video popup bg image"
                            />
                            <button
                              className="ltn__video-icon-2 ltn__video-icon-2-small"
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </button>
                          </div>
                          <p className="visible">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          I am a new user. How should I start?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="visible">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Returns and refunds</Accordion.Header>
                        <Accordion.Body>
                          <p className="visible">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          Are my details secured?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="visible">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          Sale code is not working
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="visible">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          How do I make payment by my credit card
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="visible">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis. Proin libero
                            nunc consequat interdum. Condimentum lacinia quis vel
                            eros donec ac. Mauris sit amet massa vitae tortor.
                            Quisque id diam vel quam elementum pulvinar. Gravida
                            in fermentum et sollicitudin ac orci phasellus.
                            Facilisis gravida neque convallis a cras semper. Non
                            arcu risus quis varius quam quisque id.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
                ) : (
                  <p>No FAQ questions available</p>
                )}

                <div className="need-support text-center mt-100">
                  <h2>Still need help? Reach out to support 24/7:</h2>
                  <div className="btn-wrapper mb-30">
                    <Link
                      href={`/agencies/${params.agencyId}/contact`}
                      className="theme-btn-1 btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <aside className="sidebar-area ltn__right-sidebar">
                {/* <!-- Newsletter Widget --> */}
                <div className="widget ltn__search-widget ltn__newsletter-widget">
                  <h6 className="ltn__widget-sub-title">{`// subscribe`}</h6>
                  <h4 className="ltn__widget-title">Get Newsletter</h4>
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                  <div className="ltn__newsletter-bg-icon">
                    <FaRegEnvelopeOpen />
                  </div>
                </div>
                {/* <!-- Banner Widget --> */}
                <div className="widget ltn__banner-widget">
                  <Link href="/shop">
                    <img src="/img/banner/banner-3.jpg" alt="Banner Image" />
                  </Link>
                </div>
              </aside>
            </Col>
          </Row>
        </div>
      </div>

      {/* <!-- FAQ AREA START --> */}

      {/* <!-- COUNTER UP AREA START -->  */}
      <CounterUp
        counterData={[
          {
            count: agencyData?.propertyTypes?.length || 0,
            title: "Total Areda Sq",
            icon: "flaticon-select",
          },
          {
            count: agencyData?.properties_counter || 0,
            title: "Total Properties",
            icon: "flaticon-office",
          },
          {
            count: agencyData?.agents_counter || 0 ,
            title: "Total Agents",
            icon: "flaticon-user",
          },
          {
            count: agencyData?.deals_counter || 0 ,
            title: "Total Deals",
            icon: "flaticon-deal",
          },
        ]}
      />
      {/* <!-- COUNTER UP AREA END -->


        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-70"
        style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Testimonial",
                  title: "Clients Feedback",
                }}
              />
            </Col>
          </Row>

          <Slider
            {...testiMonialsettings}
            className="ltn__testimonial-slider-5-active slick-arrow-1"
          >
            {testimonialData.map((data, key) => {
              return <TestimonialCarouselItem key={key} data={data} />;
            })}
          </Slider>
        </Container>
      </div>
      {/* <!-- TESTIMONIAL AREA END --> */}

      {/* <!-- BLOG AREA START (blog-3) -->  */}
      <div className="ltn__blog-area pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "News & Blogs",
                  title: "Leatest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider
            {...blogSettings}
            className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {blogData.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
              );
            })}
          </Slider>
        </Container>
      </div>
      {/* <!-- BLOG AREA END --> */}

      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AgencyPage;
