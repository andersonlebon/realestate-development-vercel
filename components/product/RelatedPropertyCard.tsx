import React, { useState } from "react";
import Link from "next/link";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { PropertyResponsetDTO } from "../../hooks/properties";
import { getRadom } from '../../lib/utils'

type PropertyCardProps = {
  productData: PropertyResponsetDTO;
  // slug: string;
  baseUrl: string;
  discountedPrice: number;
  productPrice: number;
  cartItem: any;
  wishlistItem: any;
  compareItem: any;
};

const RelatedPopertyCard: React.FC<PropertyCardProps> = ({
  productData,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}: PropertyCardProps) => {
  // let badgeText = "";
  const slug = productData.id;


  // if (productData.) {
  //   badgeText = "For Rent";
  // } else {
  //   badgeText = "For Sale";
  // }
  const [modalShow, setModalShow] = useState(false);

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

  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          <Link href={`/${baseUrl}/${productData.id}`}>
            <img
              // src={`/img/product-3/${productData.productImg}`}
              src={`${getRadom(productData.images).url}` || '/img/blog/author.jpg'}
              alt={`${productData.title}`}
              className="h-[350px] w-full object-cover"
            />
          </Link>
          <div className="real-estate-agent">
            <div className="agent-img">

              {<Link href={`/agents/${productData?.agent?.id || productData?.agency?.id}`}>
                <img
                  src={ productData?.agent?.avatar_url || productData?.agency?.logo_url || `/img/blog/author.jpg`}
                  alt={`${productData.title}`}
                  className="w-[50px] h-[50px]"
                />
              </Link>}
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-badge">
            <ul>
              <li
                className={`sale-badge ${productData.flag === "rent" ? "bg-green" : ""}`}

              >
                {productData.flag === "rent" ? "For Rent" : "For Sale"}
                
              </li>
              <li>
              <span>{productData.status}</span>
              </li>
            </ul>
          </div>
          <h2 className="product-title">
            <Link href={`/${baseUrl}/${productData.id}`}>{productData.title}</Link>
          </h2>
          <div className="product-img-location">
            <ul>
              <li>
                <Link href={`/${baseUrl}/${slug}`} className="flex items-center">
                  <i className="flaticon-pin"></i>
                  {productData.location.city}, {productData.location.country} {productData?.location?.state}
                </Link>
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief flex">
            <li>
              <span>{productData?.details?.bedrooms}</span>
              <span className="ms-1">{} Bedrooms</span>
            </li>
            <li>
              <span>{productData?.details?.bedrooms}</span>
              <span className="ms-1">Bathrooms</span>
            </li>
          </ul>
          
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            Rwf
            {
            productData.flag === 'rent' ?
            <span>
              {` ${productData.price}`}
              <label>/Month</label>
            </span>
            :<span>
            {` ${productData.price}`}
          </span>
            }
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
        productData={productData}
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

export default RelatedPopertyCard;
