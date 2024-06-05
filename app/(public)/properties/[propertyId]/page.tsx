
"use client";
import Image from 'next/image';
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import dayjs from 'dayjs';
import { FadeLoader } from "react-spinners";
import ImageGallery from "react-image-gallery";


import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaStarHalfAlt,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaCalendarAlt
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import FollowUs from "@/components/followUs";
import Tags from "@/components/tags";
import CallToAction from "@/components/callToAction";
import { useGetPropertyById } from '../../../../hooks/properties';
// import imageKitLoader from '../../../../utils/imageKitLoader';
import imageKitLoader from '@/utils/imageKitLoader';
import Loading from '@/components/loadings';

function ProductDetails({  params }) {

  const { data: propertyData, isPending: propertyPending } = useGetPropertyById(
    params.propertyId
  )

  const isAgency = propertyData?.role_user === "agency"

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
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };
  const [isOpen, setOpen] = useState(false);

  if (propertyPending || !propertyPending) return <Loading />;
  

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      {/* <!-- BREADCRUMB AREA START --> */}

      <BreadCrumb
        title={propertyData?.title}
        sectionPace="mb-0"
        currentSlug={propertyData?.title}
      />

      {/* <!-- BREADCRUMB AREA END --> */}

      {
        <>
          {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
          <div className="ltn__img-slider-area mb-90">
            <Container fluid>
              <Slider
                {...productDetailsCarouselSettings}
                className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all g-0"
              >
                {propertyData?.images.map((single, key) => {
                  return (
                    <div className="col-lg-12" key={key}>
                      <div className="ltn__img-slide-item-4">
                        <Link href="#?" className='lg:w-[1000px] lg:h-[700px]'>
                          <img
                            src={single.url}
                            alt={`${single.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Container>
          </div>
          {/* <!-- IMAGE SLIDER AREA END -->

        <!-- SHOP DETAILS AREA START --> */}
          <div className="ltn__shop-details-area pb-10">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    <div className="ltn__blog-meta">
                      <ul className="flex">

                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>
                          {dayjs(propertyData?.created_at).format('MMMM D, YYYY')}
                        </li>
                        <li>
                          <a href="#" className="flex">
                            <i className="far fa-comments"></i>
                            {propertyData?.reviews_counter}{' '}
                            Comments
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h2>{propertyData?.title}</h2>

                    <label>
                      <span className="ltn__secondary-color">
                        <i className="flaticon-pin"></i>
                      </span>{" "}
                      {propertyData?.location?.city} {propertyData?.location?.city + ','} {propertyData?.location?.city}
                    </label>

                    <h4 className="title-2">Description</h4>
                    <p>{propertyData?.description}</p>
                    {/* <p>{product?.description.shortDescription}</p> */}

                    <h4 className="title-2">Property Detail</h4>

                    <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul className='flex flex-wrap p-0 px-3'>
						{Object.entries(propertyData?.details || {}).map(([detailsName, detail]) => {
							if (typeof detail === 'object') return false;
							return (
								<li className='px-2 m-0' key={detailsName}>
									<strong className='capitalize'>{detailsName}: {' '}</strong>
									{typeof detail === 'string' && <> {detail}</>}
									{typeof detail === 'number' && <> {detail}</>}
								</li>
							);
						})}
					</ul>
                    </div>

                

                    <h4 className="title-2">From Our Gallery</h4>
                    <div className="ltn__property-details-gallery mb-30">
                      <div className="row maxh-[30vh]">
                       <ImageGallery
                        items={propertyData?.images.map((image) => ({
                          original: image.url,
                          thumbnail: image.url,
                        }))}
                      />

                      </div>
                    </div>

                    <h4 className="title-2 mb-10">Amenities</h4>
                    <div className="property-details-amenities mb-60">
                            <ul className='flex flex-wrap p-0 px-3 gap-x-10'>
                              {propertyData?.features.map((single, key) => {
                                return (
                                  <li key={key}>
                                    <label className="checkbox-item">
                                      {single}
                                      <input
                                        type="checkbox"
                                        defaultChecked="checked"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </li>
                                );
                              })}
                            </ul>
                    </div>

                    <h4 className="title-2">Location</h4>
                    <div className="property-details-google-map mb-60">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen=""
                      ></iframe>
                    </div>


                    {/* <!-- APARTMENTS PLAN AREA END --> */}

                    <h4 className="title-2">Property Video</h4>
                    <div
                      className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                      style={{ backgroundImage: `url("${propertyData?.images[0].url}")` }}
                    >
                      <button
                        className="ltn__video-icon-2 ltn__video-icon-2-border---"
                        onClick={() => setOpen(true)}
                      >
                        <FaPlay />
                      </button>
                    </div>

                    <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                      <h4 className="title-2">Customer Reviews</h4>
                      <div className="product-ratting">
                        <ul className='flex items-center'>


                          {[...Array(5)].map((_, index) => (
                            <li key={index}>
                              {index < (propertyData?.review_average || 0) ? (
                                <a href="#">
                                  <FaStar />
                                </a>
                              ) : (
                                <a href="#">
                                  <FaRegStar />
                                </a>
                              )}
                            </li>
                          ))}
                          <li className="review-total">
                            <a href="#"> ({propertyData?.reviews?.length || 0} Reviews )</a>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      {/* <!-- comment-area --> */}
                      <div className="ltn__comment-area mb-30">
                        <div className="ltn__comment-inner">
                          <ul>

                            {propertyData?.reviews && propertyData?.reviews?.length > 0 ? (
                              propertyData?.reviews.map((review, key) => (
                                <li key={review.id}>
                                  <div className="ltn__comment-item clearfix">
                                    <div className="ltn__commenter-img">
                                      <img src="/img/testimonial/1.jpg" alt="Image" />
                                    </div>
                                    <div className="ltn__commenter-comment">
                                      <h6>
                                        <a href="#">{review.owner}</a>
                                      </h6>
                                      <div className="product-ratting">
                                        <ul>
                                          {[...Array(5)].map((_, index) => (
                                            <li key={index}>
                                              {index < review.rate ? (
                                                <a href="#">
                                                  <FaStar />
                                                </a>
                                              ) : (
                                                <a href="#">
                                                  <FaRegStar />
                                                </a>
                                              )}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <p>
                                        {review.comment || 'No Comment'}
                                      </p>
                                      <span className="ltn__comment-reply-btn">
                                        {dayjs(review.created_at).format('MMMM D, YYYY')}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <p>No Reviews</p>
                            )}
                          </ul>
                        </div>
                      </div>
                      {/* <!-- comment-reply --> */}
                      <div className="ltn__comment-reply-area ltn__form-box mb-30">
                        <form action="#">
                          <h4>Add a Review</h4>
                          <div className="mb-30">
                            <div className="add-a-review">
                              <h6>Your Ratings:</h6>
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="input-item input-item-textarea ltn__custom-icon">
                            <textarea placeholder="Type your comments...."></textarea>
                            <span className="inline-icon">
                              <FaPencilAlt />
                            </span>
                          </div>
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input type="text" placeholder="Type your name...." />
                            <span className="inline-icon">
                              <FaUserAlt />
                            </span>
                          </div>
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input
                              type="email"
                              placeholder="Type your email...."
                            />
                            <span className="inline-icon">
                              <FaEnvelope />
                            </span>
                          </div>
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              name="website"
                              placeholder="Type your website...."
                            />
                            <span className="inline-icon">
                              <FaGlobe />
                            </span>
                          </div>
                          <label className="mb-0">
                            <input type="checkbox" name="agree" /> Save my name,
                            email, and website in this browser for the next time I
                            comment.
                          </label>
                          <div className="btn-wrapper">
                            <button
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>










                <div className="col-lg-4">
                  <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                    {/* <!-- Author Widget --> */}
                    <div className="widget ltn__author-widget">
                      <div className="ltn__author-widget-inner text-center flex flex-col items-center">
                        {isAgency ? (
                          <img
                            src={propertyData?.agency?.logo_url}
                            alt={`${propertyData?.agency?.name} logo`}
                          />
                        ) : (
                          <img
                            src={propertyData?.agent?.avatar_url}
                            alt={`${propertyData?.agent?.name} photo`}
                          />
                        )}
                        <h5>
                          {isAgency ? propertyData?.agency?.name : propertyData?.agent?.name}
                        </h5>

                        <small>{isAgency ? propertyData?.agency?.email : propertyData?.agent?.email}</small>
                        <div className="product-ratting items-center">
                          <ul className="items-center">
                            <li>
                              <a href="#">
                                <FaStar />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaStar />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaStar />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaStar />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <FaRegStar />
                              </a>
                            </li>
                            <li className="review-total">
                              {" "}
                              <Link href="#">
                                {" "}
                                ( {isAgency
                                  ? propertyData?.agency?.reviews_counter
                                  : propertyData?.agent?.reviews_counter} Reviews )
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <p>
                          {isAgency ? propertyData?.agency?.header_intro : propertyData?.agent?.about}
                        </p>

                        <div className="ltn__social-media">
                          <ul className="flex">
                            <li>
                              <Link title="Facebook"
                                href={isAgency
                                  ? propertyData?.agency?.social_media_links?.facebook || '#'
                                  : propertyData?.agent?.social_media_links?.facebook || '#'}>
                                <FaFacebookF />
                              </Link>
                            </li>
                            <li>
                              <Link  title="Twitter"
                                href={isAgency
                                  ? propertyData?.agency?.social_media_links?.twitter || '#'
                                  : propertyData?.agent?.social_media_links?.twitter || '#'}>
                                <FaTwitter />
                              </Link>
                            </li>
                            <li>
                              <Link  title="Linkedin"
                                href={isAgency
                                  ? propertyData?.agency?.social_media_links?.linkedin || '#'
                                  : propertyData?.agent?.social_media_links?.linkedin || '#'}>
                                <FaInstagram />
                              </Link>
                            </li>

                            <li>
                              <a title="Youtube"
                                href={isAgency
                                  ? propertyData?.agency?.social_media_links?.youtube || '#'
                                  : propertyData?.agent?.social_media_links?.youtube || '#'}>
                                <FaDribbble />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* <!-- Form Widget --> */}
                    <div className="widget ltn__form-widget">
                      <h4 className="ltn__widget-title ltn__widget-title-border-2">
                        Drop Messege For Book
                      </h4>
                      <form action="#">
                        <input
                          type="text"
                          name="yourname"
                          placeholder="Your Name*"
                        />
                        <input
                          type="text"
                          name="youremail"
                          placeholder="Your e-Mail*"
                        />
                        <textarea
                          name="yourmessage"
                          placeholder="Write Message..."
                        ></textarea>
                        <button type="submit" className="btn theme-btn-1">
                          Send Messege
                        </button>
                      </form>
                    </div>
                  

                    <FollowUs title="Follow Us" />
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- SHOP DETAILS AREA END -->

             <!-- CALL TO ACTION START (call-to-action-6) --> */}
        </>
      }

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
}

export default ProductDetails;

// export async function getStaticProps({ params }) {
//   // get product data based on slug
//   const product = products.filter(
//     (single) => productSlug(single.title) === params.slug
//   )[0];

//   return { props: { product } };
// }

// export async function getStaticPaths() {
//   // get the paths we want to pre render based on products
//   const paths = products.map((product) => ({
//     params: { slug: productSlug(product?.title) },
//   }));

//   return { paths, fallback: false };
// }
