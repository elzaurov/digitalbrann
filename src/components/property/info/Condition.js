import React from "react";
import { Col, Form, Row, Space } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannSubTitle from "components/ui/typo/SubTitle";
import { required } from "config/Validation";
import BrannCheckbox from "components/ui/checkbox/Selector";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import BrannLink from "components/ui/typo/Link";

export default function Condition() {
  return (
    <React.Fragment>
      <Form.Item>
        <BrannSubTitle text="Bygningsmessige forhold" />
      </Form.Item>
      <Form.Item>
        <Space wrap>
          <BrannTextWithIcon text="Hva er dette?" icon={faInfoCircle} />
          <BrannLink underline>Klikk her</BrannLink>
        </Space>
      </Form.Item>
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
        <Col md={8} xs={24} sm={24}>
          <Form.Item
            name="address"
            rules={[required]}
            label="Gårds- og bruksnummer"
          >
            <BrannInput placeholder="Gårds- og bruksnummer" />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item
            name="postal_code"
            rules={[required]}
            label="Byggeår / Størreombygging"
          >
            <BrannInput placeholder="Byggeår / Størreombygging" />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item name="post_area" rules={[required]} label="Antall etasjer">
            <BrannInput placeholder="Antall etasjer" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={8} xs={24} sm={24}>
          <Form.Item name="address" rules={[required]} label="Grunnflate m2">
            <BrannInput placeholder="Grunnflate m2" />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item
            name="postal_code"
            rules={[required]}
            label="Totalareal m2"
          >
            <BrannInput placeholder="Totalareal m2" />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item name="post_area" rules={[required]} label="Bruksområder">
            <BrannInput placeholder="Bruksområder" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col md={12} xs={24} sm={24}>
          <Form.Item name="email" rules={[required]} label="Risikoklasse">
            <BrannInput placeholder="Risikoklasse" />
          </Form.Item>
        </Col>
        <Col md={12} xs={24} sm={24}>
          <Form.Item name="phone" rules={[required]} label="Brannklasse">
            <BrannInput placeholder="Brannklasse" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Er det et særskilt brannokjekt?">
        <BrannCheckbox label="Ja" />
        <BrannCheckbox label="Nei" />
      </Form.Item>
    </React.Fragment>
  );
}
