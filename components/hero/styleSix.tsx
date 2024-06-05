import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCarAlt,
  FaCookie,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";
import CarDealerSearchFormTwo from '@/components/carDealerSearchForm';
import { useQueryClient } from "@tanstack/react-query";
import { useGetPropertiesFilter } from "@/hooks/properties";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createQueryStrings } from "@/utils";


function HeroSectionStyleSix() {

	const queryClient = useQueryClient();
	const [filterParams, setFilterParams] =
		useState<PropertiesFilterParams>(null);
	const [flag, setFlag] = useState('sell');
	const [range, setRange] = useState([0, 1000000]);


	const [min_price, max_price] = range;
  const router = useRouter();

	const onFinishFilter = (values: any) => {
		const queryString = createQueryStrings({ ...values, flag, max_price, min_price });

    router.push(`/search?${queryString}`);
	};



	const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="ltn__slider-area ltn__slider-4 position-relative fix">
        <div className="ltn__slide-animation-active">
          {/* <!-- HTML5 VIDEO --> */}

        

          {/* <!-- YouTube VIDEO --> */}

          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-overlay-theme-black-30">
            <div className="ltn__slide-item-inner text-center">
              <Container>
                <Row>
                  <Col xs={12} className="align-self-center">
                    <div className="slide-item-car-dealer-form">
                      <div className="section-title-area ltn__section-title-2 text-center">
                        <h1 className="section-title  text-color-white">
                          Find Your
                          <span className="ltn__secondary-color-3 px-2  ">
                            Perfect
                          </span>
                          Home
                        </h1>
                      </div>
                      <div className='ltn__car-dealer-form-area  mb-120'>
                      <Container className='bg-[#FBF8E2] relative z-100 p-5 rounded'>
                        <Row>
                          <Col xs={12}>
                            <div className='ltn__car-dealer-form-tab'>
                              <CarDealerSearchFormTwo
                                onFinishFilter={onFinishFilter}
                                flag={flag}
                                setFlag={setFlag}
                                range={range}
                                setRange={setRange}
                              />
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionStyleSix;
