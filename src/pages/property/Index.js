import React from "react";
import { Col, Row, Select, Space } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import PropertyTable from "components/property/Table";
import BrannText from "components/ui/typo/Text";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function PropertyIndex() {
  const navigate = useNavigate();

  const onAddNewProperty = () => {
    navigate("/bygg/opprett");
  };

  const onUpdateProperty = (id) => {
    navigate(`/admin/bygg/${id}`);
  };

  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Bygg" />
              <BrannText text="Se full oversikt over alle bygg" />
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
                    { label: "Status", value: 1 },
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
                    { label: "Progress", value: 1 },
                  ]}
                />
                <BrannPrimaryButton
                  label="Ny bygg"
                  onClick={onAddNewProperty}
                />
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <PropertyTable onUpdateProperty={onUpdateProperty} />
        </Col>
      </Row>
    </AppLayout>
  );
}
