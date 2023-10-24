import { Form } from "antd";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannCheckbox from "components/ui/checkbox/Selector";
import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";

export default function RiskFollowUp() {
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Oppfølging"
        description="Ble resultatet slik vi trodde? Hvis ikke ma vi gjore endringer og bli enige om nye tiltak og gjennomforing."
      />
      <Form>
        <Form.Item>
          <BrannCheckbox label="Ja" />
          <BrannCheckbox label="Nei" />
        </Form.Item>
        <Form.Item>
          <BrannPrimaryButton label="Large" />
        </Form.Item>
      </Form>
    </PropertySectionContainer>
  );
}
