import React from "react";
import { Col, Row } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import BrannText from "components/ui/typo/Text";
import CustomerForm from "components/customer/Form";

export default function CustomerCreate() {
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Ny Kunde" />
              <BrannText text="Her kan du opprette nye kunde" />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <CustomerForm />
        </Col>
      </Row>
    </AppLayout>
  );
}
