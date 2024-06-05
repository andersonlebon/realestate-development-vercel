"use client"
import React, { useState, useEffect } from "react";

import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import {
  FaThLarge,
  FaThList,
  FaSearch,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";
import { useGetAllProperties } from "../../../hooks/properties";
import RelatedProduct from "@/components/product/RelatedPropertyCard";
import PropertyCard from "@/components/product/PropertyCard";
import { useSearchParams } from 'next/navigation';
import { Empty } from 'antd'
import Loading from "../../../components/loadings";
import Pagination from "@/components/shared/pagination";
import { responseMetaData } from "@/hooks/type";

function ShopList() {
  const pageLimit = 6;
  const [query, setQuery] = useState({page: 1, limit: pageLimit});
  const [pageCount, setPageCount] = useState(0);

  const searchParams = useSearchParams()

  const location =  searchParams.get('location')
  const aminity =  searchParams.get('aminity')



    const {
    data: propertiesData,
    isPending: propertiesPending,
    isError, error,
    refetch
  } = useGetAllProperties(query);


  useEffect(() => {    
    if (aminity) setQuery({...query, aminity: aminity.toLocaleLowerCase() })
 }, [])


 useEffect(() => {    
  if (location) setQuery({...query, location: location.toLocaleLowerCase() })
}, [])

 
  useEffect(() => {
    console.log(query);
    refetch()
  }, [query]);


  const handlePageChange = (page: number) => {
    setQuery({ ...query, page: page.selected + 1 });
  }


  return (
    <>
      {/* <!-- BREADCRUMB AREA START --> */}
       
      <ShopBreadCrumb
        title={aminity ? `Property List with ${aminity}`: 'Property List'}
        sectionPace=""
        currentSlug="Property List"
      />
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}

      {propertiesPending ? <Loading/> 
      : (
        <div className="ltn__product-area ltn__product-gutter mb-120">
          <Container>
            <Row>
              <Col xs={12}>
                <Tab.Container defaultActiveKey="second">
                  <div className="ltn__shop-options">
                    <ul>
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
                      <li>
                        <div className="showing-product-number text-right">
                          <span>
                            {`Results(${propertiesData?.items?.length
                              })`}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>,

                  {/* <Search spaceBottom="mb-30" setQuery={setQuery} /> */}


                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                        <Row>
                        {propertiesData?.items?.map((product, key) => {

                          return (
                            <Col key={key} xs={12} sm={6} lg={4}>
                              <RelatedProduct
                                baseUrl="properties"
                                productData={product}
                                discountedPrice={product.discountedPrice}
                                productPrice={product.productPrice}
    
                              />
                            </Col>
                          );
                        })}

                        <Pagination
                                meta={propertiesData?.meta}
                                onPageChange={handlePageChange}
                              />
                      </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__product-tab-content-inner ltn__product-list-view">

                        <Row>
                          {propertiesData?.items?.map((product, key) => {

                            return (
                              <Col key={key} xs={12}>
                                <PropertyCard
                                  baseUrl="properties"
                                  propertyData={product}
                                  discountedPrice={product?.discountedPrice}
                                  productPrice={product?.productPrice}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                {propertiesData?.items?.length === 0  && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}


                <div className="ltn__pagination-area text-center">
                  <ReactPaginate
                    onPageChange={() => console.log('ey')}
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
      )}

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

export default ShopList;
