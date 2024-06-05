"use client";

import React from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import AgentItem from "@/components/team";
import { useGetAllAgents } from "@/hooks/agent/agent-hook";
import { Empty } from 'antd'
import Loading from "@/components/loadings";

function AgentsPage() {
  // import TeamItem from "@/components/team";
  // const agents = getProducts(TeamData, "buying", "featured", 6);

  const { data: agentListData, isPending: agentsPending } =
    useGetAllAgents();

  return (
    <>
      <ShopBreadCrumb title="Our Agent" sectionPace="" currentSlug="Agent" />

      <div className="ltn__team-area pb-90">
        <Container>
          {agentsPending ? (
            <div><Loading/></div>
          ) : (
            <Row>
              {agentListData && agentListData?.items?.map((data, key) => {
                const slug = productSlug(data.full_name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4}>
                    <AgentItem
                      baseUrl="agents"
                      data={data}
                      slug={slug}
                      additionalClassname=""
                    />
                  </Col>
                );
              })}

              {agentListData?.meta.total_count === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            </Row>
          )}
        </Container>
      </div>
    </>
  );
}

export default AgentsPage;
