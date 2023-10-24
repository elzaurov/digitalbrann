import React from "react";
import { Col, Form, Row } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannSubTitle from "components/ui/typo/SubTitle";
import { required } from "config/Validation";
import BrannCheckbox from "components/ui/checkbox/Selector";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";

export default function Renter() {
  return (
    <React.Fragment>
      <Form.Item>
        <BrannSubTitle text="Informasjon om leietakere" />
      </Form.Item>
      <Form.Item label="Har bygget leietakere?">
        <BrannCheckbox label="Ja" />
        <BrannCheckbox label="Nei" />
      </Form.Item>
      <Form.List
        name="tenant"
        initialValue={[{ first_name: "", last_name: "" }]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <React.Fragment key={index}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name={[field.name, "first_name"]}
                      rules={[required]}
                      label="Fornavn"
                    >
                      <BrannInput placeholder="Fornavn" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={[field.name, "last_name"]}
                      rules={[required]}
                      label="Etternavn"
                    >
                      <BrannInput placeholder="Etternavn" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="contact_person"
                  rules={[required]}
                  label="Kontaktperson"
                >
                  <BrannInput placeholder="Kontaktperson" />
                </Form.Item>
                <Row gutter={16}>
                  <Col md={8} xs={24} sm={24}>
                    <Form.Item name="address" rules={[required]} label="E-post">
                      <BrannInput placeholder="E-post" />
                    </Form.Item>
                  </Col>
                  <Col md={8} xs={24} sm={24}>
                    <Form.Item
                      name="postal_code"
                      rules={[required]}
                      label="Telefon"
                    >
                      <BrannInput placeholder="Telefon" />
                    </Form.Item>
                  </Col>
                  <Col md={8} xs={24} sm={24}>
                    <Form.Item
                      name="post_area"
                      rules={[required]}
                      label="Areal"
                    >
                      <BrannInput placeholder="Areal" />
                    </Form.Item>
                  </Col>
                </Row>
              </React.Fragment>
            ))}
            <Form.Item>
              <BrannSecondaryButton label="+ Legg til fler" />
            </Form.Item>
          </>
        )}
      </Form.List>
    </React.Fragment>
  );
}
