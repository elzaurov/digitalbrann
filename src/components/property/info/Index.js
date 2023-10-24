import React from "react";
import { Divider, Form } from "antd";
import BrannPaper from "components/ui/box/Paper";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import Owner from "./Owner";
import Manager from "./Manager";
import Supervisor from "./Supervisor";
import FireProtectionManager from "./FireProtectionManager";
import Renter from "./Renter";
import Condition from "./Condition";
import Structure from "./Structure";
import Emergency from "./Emergency";

const SECTIONS = [
  Owner,
  Manager,
  Supervisor,
  FireProtectionManager,
  Renter,
  Condition,
  Structure,
  Emergency,
];

export default function InfoIndex() {
  return (
    <BrannPaper>
      <Form layout="vertical" name="contact-form">
        {SECTIONS.map((Section, index) => (
          <React.Fragment key={index}>
            <Section />
            {index < SECTIONS.length - 1 && <Divider />}{" "}
            {/* Avoid extra Divider after the last section */}
          </React.Fragment>
        ))}
        <Form.Item>
          <BrannSubmitButton label="Lagre" />
        </Form.Item>
      </Form>
    </BrannPaper>
  );
}
