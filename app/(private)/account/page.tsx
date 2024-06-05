"use client"
import React from 'react';
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
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
                          <Tab.Pane eventKey="ltn_tab_1_3">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                The following addresses will be used on the
                                checkout page by default.
                              </p>
                              <Row>
                                <div className="col-md-6 col-12 learts-mb-30">
                                  <h4>
                                    Billing Address
                                    <small>
                                      <Link href="#">edit</Link>
                                    </small>
                                  </h4>
                                  <address>
                                    <p>
                                      <strong>Alex Tuntuni</strong>
                                    </p>
                                    <p>
                                      1355 Market St, Suite 900 <br />
                                      San Francisco, CA 94103
                                    </p>
                                    <p>Mobile: (123) 456-7890</p>
                                  </address>
                                </div>
                                <div className="col-md-6 col-12 learts-mb-30">
                                  <h4>
                                    Shipping Address
                                    <small>
                                      <Link href="#">edit</Link>
                                    </small>
                                  </h4>
                                  <address>
                                    <p>
                                      <strong>Alex Tuntuni</strong>
                                    </p>
                                    <p>
                                      1355 Market St, Suite 900 <br />
                                      San Francisco, CA 94103
                                    </p>
                                    <p>Mobile: (123) 456-7890</p>
                                  </address>
                                </div>
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_4">
                            <div className="ltn__myaccount-tab-content-inner">
                              <p>
                                The following addresses will be used on the
                                checkout page by default.
                              </p>
                              <div className="ltn__form-box">
                                <form action="#">
                                  <div className="row mb-50">
                                    <Col xs={12} md={6}>
                                      <label>First name:</label>
                                      <input type="text" name="ltn__name" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Last name:</label>
                                      <input type="text" name="ltn__lastname" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Display Name:</label>
                                      <input
                                        type="text"
                                        name="ltn__lastname"
                                        placeholder="Ethan"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Display Email:</label>
                                      <input
                                        type="email"
                                        name="ltn__lastname"
                                        placeholder="example@example.com"
                                      />
                                    </Col>
                                  </div>
                                  <fieldset>
                                    <legend>Password change</legend>
                                    <Row>
                                      <div className="col-md-12">
                                        <label>
                                          Current password (leave blank to leave
                                          unchanged):
                                        </label>
                                        <input
                                          type="password"
                                          name="ltn__name"
                                        />
                                        <label>
                                          New password (leave blank to leave
                                          unchanged):
                                        </label>
                                        <input
                                          type="password"
                                          name="ltn__lastname"
                                        />
                                        <label>Confirm new password:</label>
                                        <input
                                          type="password"
                                          name="ltn__lastname"
                                        />
                                      </div>
                                    </Row>
                                  </fieldset>
                                  <div className="btn-wrapper">
                                    <button
                                      type="submit"
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                          
                          <Tab.Pane eventKey="ltn_tab_1_6">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__my-properties-table table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Top Property</th>
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
                                  <ul>
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
                          
                          <Tab.Pane eventKey="ltn_tab_1_8">
                            <div className="ltn__myaccount-tab-content-inner">
                              <Row>
                                <div className="col-lg-12">
                                  <div className="ltn__checkout-inner">
                                    <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                                      <h5>
                                        Returning customer?
                                        <a
                                          className="ltn__secondary-color"
                                          href="#ltn__returning-customer-login"
                                          data-toggle="collapse"
                                        >
                                          Click here to login
                                        </a>
                                      </h5>
                                      <div
                                        id="ltn__returning-customer-login"
                                        className="collapse ltn__checkout-single-content-info"
                                      >
                                        <div className="ltn_coupon-code-form ltn__form-box">
                                          <p>Please login your accont.</p>
                                          <form action="#">
                                            <Row>
                                              <Col xs={12} md={6}>
                                                <div className="input-item input-item-name ltn__custom-icon">
                                                  <input
                                                    type="text"
                                                    name="ltn__name"
                                                    placeholder="Enter your name"
                                                  />
                                                </div>
                                              </Col>
                                              <Col xs={12} md={6}>
                                                <div className="input-item input-item-email ltn__custom-icon">
                                                  <input
                                                    type="email"
                                                    name="ltn__email"
                                                    placeholder="Enter email address"
                                                  />
                                                </div>
                                              </Col>
                                            </Row>
                                            <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                                              Login
                                            </button>
                                            <label className="input-info-save mb-0">
                                              <input
                                                type="checkbox"
                                                name="agree"
                                              />
                                              Remember me
                                            </label>
                                            <p className="mt-30">
                                              <Link href="/register">
                                                Lost your password?
                                              </Link>
                                            </p>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                                      <h5>
                                        Have a coupon?
                                        <a
                                          className="ltn__secondary-color"
                                          href="#ltn__coupon-code"
                                          data-toggle="collapse"
                                        >
                                          Click here to enter your code
                                        </a>
                                      </h5>
                                      <div
                                        id="ltn__coupon-code"
                                        className="collapse ltn__checkout-single-content-info"
                                      >
                                        <div className="ltn__coupon-code-form">
                                          <p>
                                            If you have a coupon code, please
                                            apply it below.
                                          </p>
                                          <form action="#">
                                            <input
                                              type="text"
                                              name="coupon-code"
                                              placeholder="Coupon code"
                                            />
                                            <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                                              Apply Coupon
                                            </button>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ltn__checkout-single-content mt-50">
                                      <h4 className="title-2">
                                        Billing Details
                                      </h4>
                                      <div className="ltn__checkout-single-content-info">
                                        <form action="#">
                                          <h6>Personal Information</h6>
                                          <Row>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-name ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__name"
                                                  placeholder="First name"
                                                />
                                                <span className="inline-icon">
                                                  <FaUserAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-name ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__lastname"
                                                  placeholder="Last name"
                                                />
                                                <span className="inline-icon">
                                                  <FaUserAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-email ltn__custom-icon">
                                                <input
                                                  type="email"
                                                  name="ltn__email"
                                                  placeholder="email address"
                                                />
                                                <span className="inline-icon">
                                                  <FaEnvelope />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-phone ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__phone"
                                                  placeholder="phone number"
                                                />
                                                <span className="inline-icon">
                                                  <FaPhoneAlt />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-website ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__company"
                                                  placeholder="Company name (optional)"
                                                />
                                                <span className="inline-icon">
                                                  <FaGlobe />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                              <div className="input-item input-item-website ltn__custom-icon">
                                                <input
                                                  type="text"
                                                  name="ltn__phone"
                                                  placeholder="Company address (optional)"
                                                />
                                                <span className="inline-icon">
                                                  <FaGlobe />
                                                </span>
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Country</h6>
                                              <div className="input-item ltn__custom-icon">
                                                <select className="nice-select">
                                                  <option>
                                                    Select Country
                                                  </option>
                                                  <option>Australia</option>
                                                  <option>Canada</option>
                                                  <option>China</option>
                                                  <option>Morocco</option>
                                                  <option>Saudi Arabia</option>
                                                  <option>
                                                    United Kingdom (UK)
                                                  </option>
                                                  <option>
                                                    United States (US)
                                                  </option>
                                                </select>
                                                <span className="inline-icon">
                                                  <FaArrowDown />
                                                </span>
                                              </div>
                                            </Col>
                                            <Col xs={12}>
                                              <h6>Address</h6>
                                              <Row>
                                                <Col xs={12} md={6}>
                                                  <div className="input-item">
                                                    <input
                                                      type="text"
                                                      placeholder="House number and street name"
                                                    />
                                                  </div>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                  <div className="input-item">
                                                    <input
                                                      type="text"
                                                      placeholder="Apartment, suite, unit etc. (optional)"
                                                    />
                                                  </div>
                                                </Col>
                                              </Row>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Town / City</h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="City"
                                                />
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>State </h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="State"
                                                />
                                              </div>
                                            </Col>
                                            <Col xs={12} md={6} lg={4}>
                                              <h6>Zip</h6>
                                              <div className="input-item">
                                                <input
                                                  type="text"
                                                  placeholder="Zip"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <p>
                                            <label className="input-info-save mb-0">
                                              <input
                                                type="checkbox"
                                                name="agree"
                                              />
                                              Create an account?
                                            </label>
                                          </p>
                                          <h6>Order Notes (optional)</h6>
                                          <div className="input-item input-item-textarea ltn__custom-icon">
                                            <textarea
                                              name="ltn__message"
                                              placeholder="Notes about your order, e.g. special notes for delivery."
                                            ></textarea>
                                            <span className="inline-icon">
                                              <FaPencilAlt />
                                            </span>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Col xs={12} lg={6}>
                                  <div className="ltn__checkout-payment-method mt-50">
                                    <h4 className="title-2">Payment Method</h4>
                                    <Accordion defaultActiveKey="2">
                                      <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                          Check payments
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>
                                            Please send a check to Store Name,
                                            Store Street, Store Town, Store
                                            State / County, Store Postcode.
                                          </p>
                                        </Accordion.Body>
                                      </Accordion.Item>

                                      <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                          Cash on delivery
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>Pay with cash upon delivery.</p>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                      <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                          PayPal
                                          <img
                                            src="/img/icons/payment-3.png"
                                            alt="#"
                                          />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <p>
                                            Pay via PayPal; you can pay with
                                            your credit card if you don’t have a
                                            PayPal account.
                                          </p>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                    <div className="ltn__payment-note mt-30 mb-30">
                                      <p>
                                        Your personal data will be used to
                                        process your order, support your
                                        experience throughout this website, and
                                        for other purposes described in our
                                        privacy policy.
                                      </p>
                                    </div>
                                    <button
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                      type="submit"
                                    >
                                      Place order
                                    </button>
                                  </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                  <div className="shoping-cart-total mt-50">
                                    <h4 className="title-2">Cart Totals</h4>
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td>
                                            3 Rooms Manhattan
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$298.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            OE Replica Wheels
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$170.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Wheel Bearing Retainer
                                            <strong>× 2</strong>
                                          </td>
                                          <td>$150.00</td>
                                        </tr>
                                        <tr>
                                          <td>Shipping and Handing</td>
                                          <td>$15.00</td>
                                        </tr>
                                        <tr>
                                          <td>Vat</td>
                                          <td>$00.00</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <strong>Order Total</strong>
                                          </td>
                                          <td>
                                            <strong>$633.00</strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_9">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="account-login-inner">
                                <form
                                  action="#"
                                  className="ltn__form-box contact-form-box"
                                >
                                  <h5 className="mb-30">Change Password</h5>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Current Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="New Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm New Password*"
                                  />
                                  <div className="btn-wrapper mt-0">
                                    <button
                                      className="theme-btn-1 btn btn-block"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
    </>
  );
}

export default MyAccount;
