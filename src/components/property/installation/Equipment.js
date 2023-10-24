import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Col, Form, Row } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";
import BrannMultiSelect from "components/ui/select/MultiSelect";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ServicePartner from "./ServicePartner";

export default function Equipment({ isOpen, updateIsOpen }) {
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
        title="Slokkeutstyr"
        isCollapsed={isOpen}
        hasCollapse={true}
        updateIsOpen={() => updateIsOpen("equipment")}
      />
      {isOpen && (
        <Form layout="vertical">
          <Form.Item>
            <BrannTextWithIcon
              text="Det er krav til slokkeutstyr i alle type bygg."
              icon={faInfoCircle}
            />
          </Form.Item>
          <Form.Item label="Velg type slokkeutstyr">
            <BrannMultiSelect
              options={equipments}
              defaultValue={[1, 2, 3, 4]}
            />
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
