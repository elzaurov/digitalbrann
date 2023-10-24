import React from "react";
import { Col, Row } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import BrannText from "components/ui/typo/Text";
import PropertyCreateForm from "components/property/CreateForm";

export default function PropertyCreate() {
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Ny Bygg" />
              <BrannText text="Her kan du opprette nye bygg" />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <PropertyCreateForm />
        </Col>
      </Row>
    </AppLayout>
  );
}
