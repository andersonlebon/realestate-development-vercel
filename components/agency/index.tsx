import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AgencyItemResponseDTO } from "../../hooks/agency/dtos/agency.dto.res";

type AgencyItemProps = {
  agencyData: AgencyItemResponseDTO;
  isPending?: boolean;
  baseUrl: string;
  discountedPrice?: number;
  productPrice?: number;
  cartItem?: any;
  wishlistItem?: any;
  compareItem?: any;
};

const AgencyItem: React.FC<AgencyItemProps> = ({
  agencyData,
  // slug,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}) => {

  const slug = agencyData?.id;

  let badgeText = "";
  if (agencyData?.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }
  const [modalShow, setModalShow] = useState(false);

  const wishListTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Save in favorite
    </Tooltip>
  );
  const quickViewTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      View details
    </Tooltip>
  );
  const addToCartTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Join
    </Tooltip>
  );
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          <Link href={`/${baseUrl}/${slug}`}>
            <img
              src={agencyData?.logo_url || `/img/blog/author.jpg`}
              alt={`${agencyData?.name}`}
            />
          </Link>
        </div>

        <div className="product-info">
          {/* <div className="product-badge-price">
            <div className="product-badge">
              <ul>
                <li
                  className={`sale-badge ${agencyData?.rent ? "bg-green" : ""}`}
                >
                  {badgeText}
                </li>
              </ul>
            </div>

            <div className="product-price">
              <span>
                {`$ ${agencyData?.price}`}
                <label>/Month</label>
              </span>
            </div>
          </div> */}

          <h2 className="product-title flex items-center">
            <div className="real-estate-agent">
              <div className="agent-img">
                <Link href={`/${baseUrl}/${slug}`}>
                  <img src={`/kuku/Gold.png`} alt={`${agencyData?.name}`} />
                </Link>
              </div>
            </div>
            <Link href={`/${baseUrl}/${slug}`}>{agencyData?.name}</Link>
          </h2>

          <div className="product-img-location">
            <ul>
              <li>
                <Link href={`/${baseUrl}/${slug}`}>
                  <i className="flaticon-pin"></i>
                  {agencyData?.location.address}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-info-bottom">
          <div className="real-estate-agent">
            <h6 className="flex justify-between">
              Our Agents{" "}
              <Link
                className="ml-16 flex items-center	"
                href={`agencies/${slug}/agents`}
              >
                <span>See more</span>
                <i className="flaticon-right-arrow  leading-none"></i>
              </Link>
            </h6>
            <ul className="agent-img flex">
              <li className="">
                <Link href={`/${baseUrl}/${slug}`}>
                  <img
                    src={`/img/blog/author.jpg`}
                    alt={`${agencyData?.name}`}
                  />
                </Link>
              </li>
              <li>
                <Link href={`/${baseUrl}/${slug}`}>
                  <img
                    src={`/img/blog/author.jpg`}
                    alt={`${agencyData?.name}`}
                  />
                </Link>
              </li>
              <li>
                <Link href={`/${baseUrl}/${slug}`}>
                  <img
                    src={`/img/blog/author.jpg`}
                    alt={`${agencyData?.name}`}
                  />
                </Link>
              </li>
              <li>
                <Link href={`/${baseUrl}/${slug}`}>
                  <img
                    src={`/img/blog/author.jpg`}
                    alt={`${agencyData?.name}`}
                  />
                </Link>
              </li>
            </ul>
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
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={addToCartTooltip}
                >
                  <button>
                    <i className="flaticon-add"></i>
                  </button>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <QuickViewtModal
        agencyData={agencyData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice || 0}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      /> */}
    </>
  );
};

export default AgencyItem;
