import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Col, Form, Row, Space } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";
import BrannSelect from "components/ui/select/Select";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannActiveButton from "components/ui/button/ActiveButton";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import ServicePartner from "./ServicePartner";

export default function Other({ isOpen, updateIsOpen }) {
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Andre byggtekniske installasjoner"
        isCollapsed={isOpen}
        hasCollapse={true}
        updateIsOpen={() => updateIsOpen("other")}
      />
      {isOpen && (
        <Form layout="vertical">
          <Form.Item>
            <BrannTextWithIcon
              text="Her kommer forklaring pa andre byggtekniske installasjoner"
              icon={faInfoCircle}
            />
          </Form.Item>
          <Form.Item label="Andre byggtekniske installasjoner">
            <BrannSelect options={[{ label: "Velg", value: 0 }]} />
          </Form.Item>
          <Form.Item label="Dekningsomrade">
            <BrannInput placeholder="Skriv dekningsomrade her..." />
          </Form.Item>
          <Form.Item label="Eventuelle merknader">
            <BrannInput placeholder="Skriv merknader her..." />
          </Form.Item>
          <Form.Item label="Last opp arskontroll">
            <BrannPrimaryUploader />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Dato siste kontroll">
                <BrannDatePicker size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Registrerte avvik">
                <BrannSelect options={[{ label: "Velg antall", value: 0 }]} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
              <BrannPrimaryButton label="Lagre" />
              <BrannActiveButton label="Aktiver modul" />
            </Space>
          </Form.Item>
          <ServicePartner />
        </Form>
      )}
    </PropertySectionContainer>
  );
}
