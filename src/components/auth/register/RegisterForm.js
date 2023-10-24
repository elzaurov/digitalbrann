import React from "react";

import { Form } from "antd";

import { email, required } from "config/Validation";

import BrannInput from "components/ui/input/Input";
import BrannSubmitButton from "components/ui/button/SubmitButton";

export default function RegisterForm({ updateStep }) {
  const onFinish = (values) => {
    updateStep((prevStep) => prevStep + 1);
  };

  return (
    <Form className="auth-form" name="register-form" onFinish={onFinish}>
      <Form.Item name="first_name" rules={[required]}>
        <BrannInput placeholder="Fornavn *" />
      </Form.Item>
      <Form.Item name="last_name" rules={[required]}>
        <BrannInput placeholder="Etternavn *" />
      </Form.Item>
      <Form.Item name="company_name" rules={[required]}>
        <BrannInput placeholder="Selskapsnavn *" />
      </Form.Item>
      <Form.Item name="contact_person" rules={[required]}>
        <BrannInput placeholder="Kontaktperson *" />
      </Form.Item>
      <Form.Item name="email" rules={[required, email]}>
        <BrannInput placeholder="E-post *" />
      </Form.Item>
      <Form.Item name="phone" rules={[required]}>
        <BrannInput placeholder="Telefon *" />
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton label="Fortsett" fullWidth />
      </Form.Item>
    </Form>
  );
}
