import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Select, Space } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import CustomerTable from "components/customer/Table";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannText from "components/ui/typo/Text";

export default function CustomerIndex() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Kunder" />
              <BrannText text="Se oversikt over alle kunder på plattformen" />
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
                    { label: "Organisasjon", value: 1 },
                  ]}
                />
                <BrannPrimaryButton
                  label="Ny kunde"
                  onClick={() => navigate("/admin/kunder/opprett")}
                />
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <CustomerTable />
        </Col>
      </Row>
    </AppLayout>
  );
}
