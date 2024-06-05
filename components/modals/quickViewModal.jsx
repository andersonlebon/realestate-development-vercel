import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";

import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import ProductRating from "../product/ProductRating";
import { getRadom } from '@/lib/utils'
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden='true'
    aria-disabled={currentSlide === 0 ? true : false}
    type='button'
  >
    <FaArrowLeft />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden='true'
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type='button'
  >
    <FaArrowRight />
  </button>
);

const productsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
  responsive: [
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

const QuickViewModal = ({
  productData,
  onHide,
  show,
}) => {
  const modalClose = () => {
    onHide();
  };

  // const facebook_url = productData?.socialLinks?.facebook;
  // const facebook_share = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(facebook_url)}`;

  // const twitter_url = productData?.socialLinks?.twitter;
  // const twitter_share = `https://twitter.com/intent/tweet?url=${encodeURIComponent(twitter_url)}&text=${textShare}&hashtags=${hash_tags}`;




  return (
    <Modal
      show={show}
      onHide={modalClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="ltn__modal-area ltn__quick-view-modal-area"
    >
      <Modal.Header>
        <Button className="close" variant="secondary" onClick={modalClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="ltn__quick-view-modal-inner">
          <div className="modal-product-item">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="modal-product-img">
                <Slider
                      {...productsettings}
                      className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
                    >
                      {
                        productData?.images?.map(image => (
                          <img src={image.url || "/img/product/4.png"} alt="#" key={image.fileId} />
                        ))
                      }
                    </Slider>
                </div>

              
              </div>
              <div className="col-lg-6 col-12">
                <div className="modal-product-info">
                  <h3 className="capitalize">
                    <Link onClick={modalClose} href={`/property/${productData.id}`}>
                      {productData.title}
                    </Link>
                  </h3>
                  <div className="product-price">
                    <div>
                      <span> RWF {productData.price - productData.discount}</span>
                      <del>{productData.price}</del> &nbsp;
                      <span className="on-sale">
                        {productData.discount || 0}% Off
                      </span>
                    </div>
                    {productData.rating && productData.rating > 0 ? (
                      <div className="product-quickview__rating-wrap">
                        <div className="product-quickview__rating">
                          <ProductRating ratingValue={productData.rating} />
                          <span>({productData.ratingCount})</span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <hr />

                  <div className="modal-product-brief">
                    <p>{productData.description}</p>
                  </div>
                  <ul className='text-xs flex flex-wrap'>
						{Object.entries(productData.details || {}).map(([detailsName, detail]) => {
							if (typeof detail === 'object') return false;
							return (
								<li className='px-2 m-0' key={detailsName}>
									<strong className='capitalize'>{detailsName}: </strong>
									{typeof detail === 'string' && <>{detail}</>}
									{typeof detail === 'number' && <>{detail}</>}
								</li>
							);
						})}
					</ul>
                  <hr />
                  <div className="ltn__social-media">
                    <ul className="flex items-center">
                      <li>Share:</li>
                      <li>
                        <Link
                          href="#"
                          title="Facebook"
                          target="_blank"
                          rel="noreferrer"
                          // href={thread_share}
                          // onClick={() => window.open(thread_share, 'thread', params)}
                        >
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaDribbble />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Instagram">
                          <FaInstagram />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <label className="float-end mb-0">
                    <Link
                      onClick={modalClose}
                      className="text-decoration"
                      href={`/properties/${productData.id}`}
                    >
                      <small>View Details</small>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default QuickViewModal;
