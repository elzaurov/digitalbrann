import React from "react";
import BrannPaper from "components/ui/box/Paper";
import { Form } from "antd";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";

export default function DrawingIndex() {
  return (
    <BrannPaper>
      <PropertySectionContainer>
        <PropertySectionHeader title="Brannteknisk tegning" hasHistoryAction />
        <Form layout="vertical">
          <Form.Item label="Brannteknisk tegning">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Orienteringsplan (kun pakrevd dersom brannalamrn er etter 2009 - se kapittel 5)">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Romingsplan">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Situasjonskart">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Tegningssnitt av bygget">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item>
            <BrannPrimaryButton label="Lagre" />
          </Form.Item>
        </Form>
      </PropertySectionContainer>
    </BrannPaper>
  );
}
