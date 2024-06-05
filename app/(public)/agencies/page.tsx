"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from 'next/image';
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import Agency from "@/components/agency";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";
import { useGetAllAgencies } from '../../../hooks/agency/agency-hook';
import { AgencyItemResponseDTO } from '../../../hooks/agency/dtos/res/agency.dto.res';

function ShopGrid() {
  const { data: agenciesData, isPending: agenciesPending } = useGetAllAgencies(
    { pageSize: 6, search: ""}
  );
  const [offset, setOffset] = useState(0);
  const pageLimit = 6;
  const [pageCount, setPageCount] = useState(0);

  const [query, setQuery] = useState("");
  const keys = ["title"];

  const SearchProduct = (data) => {
    return data?.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(query))
    );
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % agenciesData?.items?.length;
    setOffset(newOffset);
  };

  return (
    <>
      {/* <!-- BREADCRUMB AREA START --> */}

      <ShopBreadCrumb
        title="Find an agency"
        sectionPace=""
        currentSlug="agencies"
      />
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}

      <div className="ltn__product-area ltn__product-gutter mb-120 agencies">
        <Container>
          <Row>
            <Col xs={12}>
                <Search spaceBottom="mb-30" setQuery={setQuery} />

                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    {agenciesPending ? (
                      <p>Loading...</p>
                    ) : (
                      <Row>
                        {agenciesData?.items?.map((agency: AgencyItemResponseDTO) => {
                          // const slug = productSlug(agency.name);
                          // const discountedPrice = getDiscountPrice(
                          //   agency.price || 0,
                          //   agency.discount || 0
                          // ).toFixed(2);
                          // const productPrice = 99.98; // agency.price.toFixed(2);
                          // const cartItem = cartItems.find(
                          //   (cartItem) => cartItem.id === agency.id
                          // );
                          // const wishlistItem = wishlistItems.find(
                          //   (wishlistItem) => wishlistItem.id === agency.id
                          // );
                          // const compareItem = compareItems.find(
                          //   (compareItem) => compareItem.id === agency.id
                          // );

                          return (
                            <Col key={agency.id} xs={12}>
                              <Agency
                                baseUrl="agencies"
                                agencyData={agency}
                                // agenciesData={agenciesData}
                                isPending={agenciesPending}
                                // discountedPrice={discountedPrice}
                                // productPrice={productPrice}
                                // cartItem={cartItem}
                                // wishlistItem={wishlistItem}
                                // compareItem={compareItem}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    )}

                    </div>
              <div className="ltn__pagination-area text-center">
                <ReactPaginate
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  nextLabel={<FaAngleDoubleRight />}
                  previousLabel={<FaAngleDoubleLeft />}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination ltn__pagination justify-content-center"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- PRODUCT DETAILS AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </>
  );
}

export default ShopGrid;
