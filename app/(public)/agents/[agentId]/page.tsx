'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShopBreadCrumb from '@/components/breadCrumbs/shop';
import { useGetAgentById } from '@/hooks/agent';
import Loading from '@/components/loadings';
import AgentDetails from '@/components/pages/agent/AgentDetails';
import AgentPropertiesSlider from '@/components/pages/agent/AgentPropertiesSlider';
import AgentContactForm from '@/components/pages/agent/AgentContactForm';
import Link from 'next/link';

interface AgentIdParams {
  params: { agentId: string };
}

const AgentPage: React.FC<AgentIdParams> = ({ params }: AgentIdParams) => {
  const { data: agentItem, isPending: agentPending } = useGetAgentById(params.agentId);

  const handleFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <ShopBreadCrumb
        title={`Agent ${agentItem?.full_name}`}
        sectionPace=""
        currentSlug="Agent Details"
      />

      {agentItem ? (
        <div className="ltn__team-details-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={4}>
                <div className="ltn__team-details-member-info text-center mb-40">
                  <AgentDetails agent={agentItem} />

                  {!!agentItem?.properties?.length && (
                    <AgentPropertiesSlider properties={agentItem?.properties} />
                  )}
                  <Link className="ml-16 flex items-center" href={`/agents/${agentItem?.id}/properties`}>
                    <span>See more properties</span>
                    <i className="flaticon-right-arrow px-2 leading-none"></i>
                  </Link>
                </div>
              </Col>
              <Col xs={12} lg={8}>
                <div className="ltn__team-details-member-info-details">
                  <div className="ltn__team-details-member-about bg-white p-10 rounded">
                    <ul>
                      {Object.entries(agentItem.personal_details).map(([detailsName, detail]) => (
                        <li key={detailsName}>
                          <strong className="capitalize">{detailsName}:</strong>
                          {typeof detail === 'object' ? (
                            detail.length > 0 ? detail.join(', ') : 'No practice area'
                          ) : (
                            detail
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="title-2">
                    About
                    <p className="text-sm">{agentItem?.about_me}</p>
                  </div>
                  <div className="ltn__form-box contact-form-box box-shadow white-bg mt-50">
                    <h4 className="title-2">Contact for any {agentItem.full_name}</h4>
                    <AgentContactForm onFinish={handleFinish} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AgentPage;
