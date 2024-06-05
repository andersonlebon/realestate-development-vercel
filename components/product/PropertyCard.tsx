import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { PropertyResponsetDTO } from "../../hooks/properties/dtos/property.dto.res";
import { getRadom } from "../../lib/utils";

type PropertyCardProps = {
  propertyData: PropertyResponsetDTO;
  // slug: string;
  baseUrl: string;
  discountedPrice: number;
  productPrice: number;
  cartItem: any;
  wishlistItem: any;
  compareItem: any;
};

const PropertyCard = ({
  propertyData,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}: PropertyCardProps) => {
  
  const [modalShow, setModalShow] = useState(false);
  const slug = propertyData.id;

  const wishListTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Wishlist
    </Tooltip>
  );
  const quickViewTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Quick View
    </Tooltip>
  );
  const addToCartTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Add To Cart
    </Tooltip>
  );
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img h-[300px]">
          <Link href={`/${baseUrl}/${propertyData.id}`}>
          <img
              // src={`/img/product-3/${productData.productImg}`}
              src={`${getRadom(propertyData.images).url}` || '/img/blog/author.jpg'}
              alt={`${propertyData.title}`}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="product-info">
          <div className="product-badge-price">
            <div className="product-badge">
              <ul>
                <li
                  className={`sale-badge ${propertyData.flag === "rent" ? "bg-green" : ""}`}
                >
                  {propertyData.flag === "rent" ? "For Rent" : "For Sale"}
                </li>
                <li>
              <span>{propertyData.status}</span>
              </li>
              </ul>
            </div>

            <div className="product-price">
              <span className="capitalize">
                {`$ ${propertyData.price}`}
                <label>/{propertyData.rate}</label>
              </span>
            </div>
          </div>

          <h2 className="product-title capitalize">
            <Link href={`/${baseUrl}/${slug}`}>{propertyData.title}</Link>
          </h2>

          <div className="product-img-location">
            <ul>
              <li>
                <Link href={`/${baseUrl}/${propertyData.id}`} className="capitalize">
                  <i className="flaticon-pin"></i>
                  {propertyData.location.city}, {propertyData.location.country} {propertyData?.location?.state}
                </Link>
              </li>
            </ul>
          </div>

          <ul className="ltn__plot-brief flex">
            <li>
              <span>{propertyData?.details?.bedrooms}</span>
              <span className="ms-1">Bedrooms</span>
            </li>
            <li>
              <span>{propertyData?.details?.bathrooms}</span>
              <span className="ms-1">Bathrooms</span>
            </li>
            
          </ul>
        </div>
        <div className="product-info-bottom">
          <div className="real-estate-agent">
            <div className="agent-img">
            {<Link href={`/agents/${propertyData?.agent?.id || propertyData?.agency?.id}`}>
                <img
                  src={ propertyData?.agent?.avatar_url || propertyData?.agency?.logo_url || `/img/blog/author.jpg`}
                  alt={`${propertyData.title}`}
                  className="w-[50px] h-[50px]"
                />
              </Link>}
            </div>
          </div>

          <div className="product-hover-action">
            <ul>
              <li>
              <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={quickViewTooltip}
                >
                <button onClick={() => setModalShow(true)}>
                  <i className="flaticon-expand"></i>
                </button>


                </OverlayTrigger>
              </li>
              <li>

              <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={wishListTooltip}
                >
                <button
                >
                  <i className="flaticon-heart-1"></i>
                </button>

                  
                </OverlayTrigger>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <QuickViewtModal
        productData={propertyData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </>
  );
};

export default PropertyCard;
