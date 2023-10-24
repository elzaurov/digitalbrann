import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Col, Form, Row } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannMultiSelect from "components/ui/select/MultiSelect";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import BrannSelect from "components/ui/select/Select";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";

export default function ServicePartner() {
  const responsiblities = [
    { label: "Brannalarmanlegg", value: 1 },
    { label: "Nodlys", value: 2 },
    { label: "Slokkeutstyr", value: 3 },
    { label: "Roykluker", value: 4 },
    { label: "Sprinkler", value: 5 },
  ];
  const equipments = [
    { label: "Brannslanger", value: 1 },
    { label: "Pulverapparater", value: 2 },
    { label: "CO2 apparater", value: 3 },
    { label: "Skumapparater", value: 4 },
    { label: "Frityrapparater", value: 5 },
  ];
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Servicepartner"
        description="Her kommer forklaring pa hva servicepartner er"
      />
      <Form layout="vertical">
        <Form.Item label="Selskapsnavn">
          <BrannInput placeholder="Selskapsnavn" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="E-post">
              <BrannInput placeholder="E-post" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Telefon kontor">
              <BrannInput placeholder="Telefonnummer kontor" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Kontaktperson">
          <BrannInput placeholder="Kontaktperson" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Direkte telefon">
              <BrannInput placeholder="Direkte telefon" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Direkte e-post">
              <BrannInput placeholder="Direkte e-post" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Ansvarsområder">
          <BrannMultiSelect
            options={responsiblities}
            defaultValue={[1, 2, 3, 4]}
          />
        </Form.Item>
        <Form.Item label="Type">
          <BrannMultiSelect options={equipments} defaultValue={[1, 2, 3, 4]} />
        </Form.Item>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Last app arskontroll">
              <BrannPrimaryUploader />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Last app avtale">
              <BrannPrimaryUploader />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Last app serviceapporter">
              <BrannPrimaryUploader />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Dato siste kontroll">
              <BrannDatePicker size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Avtalens varighet">
              <BrannDatePicker size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Registrerte avvik">
              <BrannSelect
                options={[{ label: "Registrerte avvik", value: 0 }]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Form.Item label="Utlopsdato">
              <BrannDatePicker size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <BrannPrimaryButton label="Lagre" />
        </Form.Item>
      </Form>
    </PropertySectionContainer>
  );
}
