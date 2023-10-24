import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Col, Form, Row } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ServicePartner from "./ServicePartner";

export default function Sprinkler({ isOpen, updateIsOpen }) {
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Sprinkler"
        isCollapsed={isOpen}
        hasCollapse={true}
        updateIsOpen={() => updateIsOpen("sprinkler")}
      />
      {isOpen && (
        <Form layout="vertical">
          <Form.Item>
            <BrannTextWithIcon
              text="Det er ikke et automatisk krav, med mindre det har blitt har stilt som krav i en tilstandsanalyse eller brannkonsept."
              icon={faInfoCircle}
            />
          </Form.Item>
          <Form.Item label="Dekningsomrade">
            <BrannInput placeholder="Skriv dekningsomrade her..." />
          </Form.Item>
          <Form.Item label="Eventuelle merknader">
            <BrannInput placeholder="Skriv merknader her..." />
          </Form.Item>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={8}>
              <Form.Item label="Branntekniske tegninger">
                <BrannPrimaryUploader />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item label="Brukermanual">
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
