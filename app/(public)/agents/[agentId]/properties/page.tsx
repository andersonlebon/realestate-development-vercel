"use client";
import Image from 'next/image';

import React, { useState, useEffect } from "react";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { getSortedProducts, productSlug,getDiscountPrice } from "@/lib/product";

import {
  FaThLarge,
  FaThList,
  FaSearch,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import RelatedPropertyCard from "@/components/product/RelatedPropertyCard";
import PropertyCard from "@/components/product/PropertyCard";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";
import { useGetAgentProperties } from '../../../../../hooks/agent';
function Properties({params}) {
  const {data: propertiesData, isPending } = useGetAgentProperties(params.agentId)
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const pageLimit = 6;
  const [currentItems, setCurrentItems] = useState(propertiesData?.items);

  const [pageCount, setPageCount] = useState(0);
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data?.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(
      propertiesData?.items,
      sortType,
      sortValue
    );

    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;


    setCurrentItems(sortedProducts?.slice(offset, offset + pageLimit));

    setCurrentItems(
      SearchProduct(sortedProducts?.slice(offset, offset + pageLimit))
    );
  }, [
    offset,
    propertiesData?.items,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    query,
  ]);

  useEffect(() => {
    console.log(propertiesData)
    const endOffset = offset + pageLimit;
    setCurrentItems(propertiesData?.items?.slice(offset, endOffset));
    setPageCount(Math.ceil(propertiesData?.items?.length / pageLimit));
  }, [offset, pageLimit]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * pageLimit) % propertiesData?.items?.length;
    setOffset(newOffset);
  };
  return (
    <>
      {/* <!-- BREADCRUMB AREA START --> */}

      <ShopBreadCrumb
        title="Property List"
        sectionPace=""
        currentSlug="Property List"
      />
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}

<div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <h3 className="mb-10">Properties <small>({propertiesData?.items?.length || 0})</small></h3>
            <Col xs={12} lg={{ span: 12, order: 1 }} className="mx-auto">
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <ul className="justify-content-between">
                    <li>
                      <div className="ltn__grid-list-tab-menu">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">
                            <FaThLarge />
                          </Nav.Link>
                          <Nav.Link eventKey="second">
                            <FaThList />
                          </Nav.Link>
                        </Nav>
                      </div>
                    </li>

                    {/* <li>
                      <div className="short-by text-center">
                        <Form.Select
                          className="form-control nice-select"
                          onChange={(e) =>
                            getFilterSortParams("filterSort", e.target.value)
                          }
                        >
                          <option value="default">Default</option>
                          <option value="priceHighToLow">
                            Price - High to Low
                          </option>
                          <option value="priceLowToHigh">
                            Price - Low to High
                          </option>
                        </Form.Select>
                      </div>
                    </li> */}
                  </ul>
                </div>

                <Search spaceBottom="mb-30" setQuery={setQuery} />

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                        {currentItems?.map((product: PropertyResponsetDTO, key) => {
                          const slug = productSlug(product.title);
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);
                          const productPrice = product.price.toFixed(2);

                          return (
                            <Col key={key} xs={12} sm={4}>
                              <RelatedPropertyCard
                                baseUrl="properties"
                                productData={product}
                                discountedPrice={discountedPrice}
                                productPrice={productPrice}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <Row>
                        {currentItems?.map((product, key) => {
                          const slug = productSlug(product.title);
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);
                          const productPrice = product.price.toFixed(2);
                          return (
                            <Col key={key} xs={12}>
                                <PropertyCard
                                  slug={slug}
                                  baseUrl="properties"
                                  propertyData={product}
                                  discountedPrice={discountedPrice}
                                  productPrice={productPrice}
                                />
                              </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

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

export default Properties;
