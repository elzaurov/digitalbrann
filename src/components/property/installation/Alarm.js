import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Col, Form, Row } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannCheckbox from "components/ui/checkbox/Selector";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";
import BrannSelect from "components/ui/select/Select";
import ServicePartner from "./ServicePartner";

export default function Alarm({ isOpen, updateIsOpen }) {
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Brannalarmanlegg"
        isCollapsed={isOpen}
        hasCollapse={true}
        updateIsOpen={() => updateIsOpen("alarm")}
      />
      {isOpen && (
        <Form layout="vertical">
          <Form.Item label="Sentraltype">
            <BrannSelect options={[{ label: "Velg", value: 0 }]} />
          </Form.Item>
          <Form.Item label="Kommentar">
            <BrannInput placeholder="Kommentar" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Installasjonsar">
                <BrannSelect options={[{ label: "Velg", value: 0 }]} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Dekningsomrade">
                <BrannSelect options={[{ label: "Velg", value: 0 }]} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Kommentar">
            <BrannInput placeholder="Kommentar" />
          </Form.Item>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Krav iht.">
                <BrannInput placeholder="--- Velg ---" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Plassering av sentralenhet">
                <BrannInput placeholder="Skriv her..." />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={4}>
              <Form.Item label="Betjeningspaneler?">
                <BrannCheckbox label="Ja" />
                <BrannCheckbox label="Nei" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={20}>
              <Form.Item label="Antall">
                <BrannSelect options={[{ label: "Velg", value: 0 }]} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Tilknytninger">
            <BrannSelect options={[{ label: "Velg", value: 0 }]} />
          </Form.Item>
          <Form.Item label="Eventuelle merknader">
            <BrannInput placeholder="Skriv merknader her..." />
          </Form.Item>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={8}>
              <Form.Item label="Tegningssnitt av bygget">
                <BrannPrimaryUploader />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item label="Brukermanual for brannalarmanlegg">
                <BrannPrimaryUploader />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item label="Datablader">
                <BrannPrimaryUploader />
              </Form.Item>
            </Col>
          </Row>
          <ServicePartner />
        </Form>
      )}
    </PropertySectionContainer>
  );
}
