import { Form } from "antd";
import React from "react";

import BrannPaper from "components/ui/box/Paper";
import BrannInput from "components/ui/input/Input";
import BrannSubmitButton from "components/ui/button/SubmitButton";

export default function PropertyCreateForm() {
  return (
    <BrannPaper>
      <Form layout="vertical" name="contact-form">
        <Form.Item name="property" label="Navn">
          <BrannInput placeholder="Navn" />
        </Form.Item>
        <Form.Item>
          <BrannSubmitButton label="Lagre" />
        </Form.Item>
      </Form>
    </BrannPaper>
  );
}
