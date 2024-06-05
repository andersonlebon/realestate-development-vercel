"use client"
import React from 'react';
import {Row, Col, Tab } from "react-bootstrap";
import {
  FaUserAlt,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,

} from "react-icons/fa";
import Link from "next/link";

function MyAccount() {
  return (
    <>
      <Tab.Pane eventKey="profile">
        <div className="ltn__myaccount-tab-content-inner">
          <div className="ltn__comment-area mb-50">
            <div className="ltn-author-introducing clearfix">
              <div className="author-img">
                <img
                  src="img/blog/author.jpg"
                  alt="Author Image"
                />
              </div>
              <div className="author-info">
                <h6>Agent of Property</h6>
                <h2>Rosalina D. William</h2>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-placeholder"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          Brooklyn, New York, United States
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-call"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <Link href="tel:+0123-456789">
                            +0123-456789
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-mail"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <Link href="mailto:example@example.com">
                            example@example.com
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">Get A Quote</h4>
              <form
                id="contact-form"
                action="#"
                method="post"
              >
                <Row>
                  <Col xs={12} md={6}>
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
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
                        name="email"
                        placeholder="Enter email address"
                      />
                      <span className="inline-icon">
                        <FaEnvelope />
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="input-item ltn__custom-icon">
                      <select className="nice-select">
                        <option>Select Service Type</option>
                        <option>Property Management</option>
                        <option>Mortgage Service </option>
                        <option>Consulting Service</option>
                        <option>Home Buying</option>
                        <option>Home selling</option>
                        <option>Escrow Services</option>
                      </select>
                      <span className="inline-icon">
                        <FaArrowDown />
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                      <span className="inline-icon">
                        <FaPhoneAlt />
                      </span>
                    </div>
                  </Col>
                </Row>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    name="message"
                    placeholder="Enter message"
                  ></textarea>
                  <span className="inline-icon">
                    <FaPencilAlt />
                  </span>
                </div>
                <p>
                  <label className="input-info-save mb-0">
                    <input type="checkbox" name="agree" />
                    Save my name, email, and website in this
                    browser for the next time I comment.
                  </label>
                </p>
                <div className="btn-wrapper mt-0">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    get a free service
                  </button>
                </div>
                <p className="form-messege mb-0 mt-20"></p>
              </form>
            </div>
          </div>
        </div>
      </Tab.Pane>
                      

    </>
  );
}

export default MyAccount;
