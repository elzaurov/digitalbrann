import React from "react";
import { Col, Row, Select, Space } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import BrannText from "components/ui/typo/Text";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import OrganizationTable from "components/organization/Table";

export default function OrganizationIndex() {
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Brannvernorganisasjon" />
              <BrannText text="Se full oversikt over alle brukere i brannvernorganisasjon" />
            </Col>
            <Col>
              <Space wrap>
                <Select
                  style={{
                    width: 150,
                  }}
                  value={0}
                  size="large"
                  options={[
                    { label: "All", value: 0 },
                    { label: "David Gulbrandsen", value: 1 },
                  ]}
                />
                <Select
                  style={{
                    width: 150,
                  }}
                  size="large"
                  value={0}
                  options={[
                    { label: "All", value: 0 },
                    { label: "Gabels Gate 19, 0272 Oslo", value: 1 },
                  ]}
                />
                <BrannPrimaryButton label="Ny bruker" />
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <OrganizationTable />
        </Col>
      </Row>
    </AppLayout>
  );
}
