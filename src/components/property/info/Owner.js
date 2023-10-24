import React from "react";
import { Col, Form, Row } from "antd";

import BrannInput from "components/ui/input/Input";
import BrannSubTitle from "components/ui/typo/SubTitle";
import { email, required } from "config/Validation";

export default function Owner() {
  return (
    <React.Fragment>
      <Form.Item>
        <BrannSubTitle text="Informasjon om eier" />
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
          <Form.Item
            name="company_name"
            rules={[required]}
            label="Selskapsnavn"
          >
            <BrannInput placeholder="Selskapsnavn" />
          </Form.Item>
        </Col>
        <Col md={12} xs={24} sm={24}>
          <Form.Item
            name="contact_person"
            rules={[required]}
            label="Kontaktperson"
          >
            <BrannInput placeholder="Kontaktperson" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={8} xs={24} sm={24}>
          <Form.Item name="address" rules={[required]} label="Adresse">
            <BrannInput placeholder="Adresse" />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item name="postal_code" rules={[required]} label="Postnummer">
            <BrannInput placeholder="Postnummer" />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item name="post_area" rules={[required]} label="Poststed">
            <BrannInput placeholder="Poststed" />
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
