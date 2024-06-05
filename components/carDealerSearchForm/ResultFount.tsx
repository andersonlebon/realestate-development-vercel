"use client";
import { useState, useEffect } from "react";
// import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import {
  getSortedProducts,
  productSlug,
  getDiscountPrice,
} from "@/lib/product";
import { LayoutOne } from "@/layouts";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import SideBar from "@/components/shopSideBar";
import RelatedPropertyCard from "@/components/product/RelatedPropertyCard";
import PropertyCard from "@/components/product/PropertyCard";
// import ProductList from "@/components/product/list";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
// import { PropertiesFilterParams, PropertyResponsetDTO } from "@P/hooks/properties";
import { PropertiesFilterParams, PropertiesListResponseDTO, PropertyResponsetDTO } from "../../hooks/properties";
import React from 'react'
type ResultFountProps = {
  propertiesData?: PropertiesListResponseDTO;
  setFilterParams: (params: PropertiesFilterParams) => void;
};


export const ResultFount: React.FC<ResultFountProps> = ({
  propertiesData, setFilterParams
}) => {

  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);

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

    setSortedProducts(sortedProducts);

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
    const endOffset = offset + pageLimit;
    setCurrentItems(propertiesData?.items.slice(offset, endOffset));
    setPageCount(Math.ceil(propertiesData?.items?.length / pageLimit));
  }, [offset, pageLimit]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * pageLimit) % propertiesData?.items?.length;
    setOffset(newOffset);
  };

  return (
    <>
      {/* <ShopBreadCrumb title={`Results`} sectionPace="" currentSlug="Results" /> */}

      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <h3 className="mb-10">Results <small>({propertiesData?.items?.length || 0})</small></h3>
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
                          const productPrice = product.price.toFixed(2)
                          return (
                            <Col key={key} xs={12} sm={4}>
                              <RelatedPropertyCard
                                // slug={slug}
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
            {/* <Col xs={12} lg={{ span: 4, order: 0 }}>
              <SideBar resultCount={propertiesData?.items?.length} products={products} getSortParams={getSortParams} />
            </Col> */}
          </Row>
        </Container>
      </div>
      {/* <!-- PRODUCT DETAILS AREA END --> */}

    </>
  );
}
