import React from "react";
import { Col, Form, Row } from "antd";

import BrannInput from "components/ui/input/Input";
import BrannSubTitle from "components/ui/typo/SubTitle";
import { email, required } from "config/Validation";
import BrannCheckbox from "components/ui/checkbox/Selector";

export default function Supervisor() {
  return (
    <React.Fragment>
      <Form.Item>
        <BrannSubTitle text="Informasjon om vaktmester" />
      </Form.Item>
      <Form.Item label="Har bygget vaktmester?">
        <BrannCheckbox label="Ja" />
        <BrannCheckbox label="Nei" />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="first_name" rules={[required]} label="Fornavn">
            <BrannInput placeholder="Fornavn" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="last_name" rules={[required]} label="Etternavn">
            <BrannInput placeholder="Etternavn" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={12} xs={24} sm={24}>
          <Form.Item name="email" rules={[required, email]} label="E-post">
            <BrannInput placeholder="E-post" />
          </Form.Item>
        </Col>
        <Col md={12} xs={24} sm={24}>
          <Form.Item name="phone" rules={[required]} label="Telefon">
            <BrannInput placeholder="Telefon" />
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
}
