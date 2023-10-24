import React from "react";
import BrannPaper from "components/ui/box/Paper";
import { Form } from "antd";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannCheckbox from "components/ui/checkbox/Selector";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";

export default function AlterationIndex() {
  return (
    <BrannPaper>
      <PropertySectionContainer>
        <PropertySectionHeader
          title="Bygningsmessige endringer"
          hasHistoryAction
        />
        <Form layout="vertical">
          <Form.Item label="Alle tigjengelige byggesaker">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Ferdigattester">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Brukstillatelser">
            <BrannPrimaryUploader />
          </Form.Item>
          <Form.Item label="Prosjekteringsgrunnlag?">
            <BrannCheckbox label="Ja" />
            <BrannCheckbox label="Nei" />
          </Form.Item>
          <Form.Item label="Legg inn prosjekteringsgrunnlaget">
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
