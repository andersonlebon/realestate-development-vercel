"use client"
import React from 'react';
import { Row, Col, Tab } from "react-bootstrap";

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
                        
      <Tab.Pane eventKey="dashboard">
          <div className="ltn__myaccount-tab-content-inner">
            <p>
              Hello <strong>UserName</strong> (not
              <strong>UserName</strong>?
              <small>
                <Link href="/auth">Log out</Link>
              </small>
              )
            </p>
            <p>
              From your account dashboard you can view your
              <span>recent orders</span>, manage your
              <span>shipping and billing addresses</span>, and
              <span>
                edit your password and account details
              </span>
              .
            </p>
          </div>
        </Tab.Pane>
    </>
  );
}

export default MyAccount;
