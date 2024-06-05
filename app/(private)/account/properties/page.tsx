"use client"
import React from 'react';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import {
  FaHome,
  FaUserAlt,
  FaMapMarkerAlt,
  FaList,
  FaHeart,
  FaMapMarked,
  FaDollarSign,
  FaSignOutAlt,
  FaLock,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,
  FaTrashAlt,
  FaStar,
  FaRegStarHalf,
  FaRegStar,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

function MyAccount() {
  return (
    <>
      <Tab.Pane eventKey="properties">
        <div className="ltn__myaccount-tab-content-inner">
          <div className="ltn__my-properties-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">My Properties</th>
                  <th scope="col"></th>
                  <th scope="col">Date Added</th>
                  <th scope="col">Actions</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ltn__my-properties-img">
                    <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                      <img
                        src="/img/product-3/2.jpg"
                        alt="#"
                      />
                    </Link>
                  </td>
                  <td>
                    <div className="ltn__my-properties-info">
                      <h6 className="mb-10">
                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                          sdfasdfdsfsdafs
                        </Link>
                      </h6>
                      <small>
                        <i className="icon-placeholder"></i>
                        Brooklyn, New York, United States
                      </small>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaRegStarHalf />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaRegStar />
                              </span>
                            </Link>
                          </li>
                          <li className="review-total">
                            <Link href="#"> ( 95 Reviews )</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>Feb 22, 2022</td>
                  <td>
                    <Link href="#">Edit</Link>
                  </td>
                  <td>
                    <Link href="#">
                      <span>
                        <FaTrashAlt />
                      </span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="ltn__my-properties-img">
                    <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                      <img
                        src="/img/product-3/3.jpg"
                        alt="#"
                      />
                    </Link>
                  </td>
                  <td>
                    <div className="ltn__my-properties-info">
                      <h6 className="mb-10">
                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                          sdfasdfdsfsdafs
                        </Link>
                      </h6>
                      <small>
                        <i className="icon-placeholder"></i>
                        Brooklyn, New York, United States
                      </small>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaRegStarHalf />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaRegStar />
                              </span>
                            </Link>
                          </li>
                          <li className="review-total">
                            <Link href="#"> ( 95 Reviews )</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>Feb 22, 2022</td>
                  <td>
                    <Link href="#">Edit</Link>
                  </td>
                  <td>
                    <Link href="#">
                      <span>
                        <FaTrashAlt />
                      </span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="ltn__my-properties-img">
                    <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                      <img
                        src="/img/product-3/7.jpg"
                        alt="#"
                      />
                    </Link>
                  </td>
                  <td>
                    <div className="ltn__my-properties-info">
                      <h6 className="mb-10">
                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                          sdfasdfdsfsdafs
                        </Link>
                      </h6>
                      <small>
                        <i className="icon-placeholder"></i>
                        Brooklyn, New York, United States
                      </small>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaStar />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaRegStarHalf />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <span>
                                <FaRegStar />
                              </span>
                            </Link>
                          </li>
                          <li className="review-total">
                            <Link href="#"> ( 95 Reviews )</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td>Feb 22, 2022</td>
                  <td>
                    <Link href="#">Edit</Link>
                  </td>
                  <td>
                    <Link href="#">
                      <span>
                        <FaTrashAlt />
                      </span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ltn__pagination-area text-center">
            <div className="ltn__pagination">
              <ul className='flex w-full justify-center'>
                <li>
                  <Link href="#">
                    <i className="fas fa-angle-double-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li className="active">
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#">...</Link>
                </li>
                <li>
                  <Link href="#">10</Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fas fa-angle-double-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Tab.Pane>  

    </>
  );
}

export default MyAccount;
