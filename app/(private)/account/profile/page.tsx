"use client"
import React, { useState } from 'react';
import {Row, Col, Tab } from "react-bootstrap";
import {
  FaUserAlt,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,

} from "react-icons/fa";
import Link from "next/link";
import ImageUpload from '@/components/shared/images/upload';
import { UploadFile, UploadProps } from 'antd';
import { useUpdateUser } from '../../../../hooks/users';
import { useAuthContext } from '@/context/auth';
import { generateImage } from '../../../../lib/utils';






function MyAccount() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { user, role } = useAuthContext()
  const { mutateAsync } = useUpdateUser()
  


  const handleUploardAvata: UploadProps['onChange'] = async({ fileList: newFileList }) => {
    setFileList(newFileList);
  }

  return (
    <>
      <Tab.Pane eventKey="profile">
        <div className="ltn__myaccount-tab-content-inner">
          <div className="ltn__comment-area mb-50">
            <div className="ltn-author-introducing bg-white clearfix">
              <div className="author-img ">
               <ImageUpload 
                fileList={fileList}
                setFileList={setFileList}
                onChange={handleUploardAvata}
                fileNumber={1}
               />
              </div>
              <div className="author-info">
                <h6 className='capitalize'>{role.name}</h6>
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
          </div>
        </div>
      </Tab.Pane>
                      

    </>
  );
}

export default MyAccount;
