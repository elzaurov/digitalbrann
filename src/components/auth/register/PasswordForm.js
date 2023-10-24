import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "antd";

import { required } from "config/Validation";

import BrannPasswordInput from "components/ui/input/PasswordInput";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannCheckbox from "components/ui/checkbox/Selector";

export default function PasswordForm({ updateStep }) {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values:", values);
    updateStep(0);
    navigate("/");
  };

  return (
    <Form className="auth-form" name="register-form" onFinish={onFinish}>
      <Form.Item name="password" rules={[required]}>
        <BrannPasswordInput placeholder="Nytt passord *" />
      </Form.Item>
      <Form.Item name="confirm_password" rules={[required]}>
        <BrannPasswordInput placeholder="Gjenta passord *" />
      </Form.Item>
      <Form.Item name="privacyTerms" valuePropName="checked">
        <BrannCheckbox label="Jeg bekrefter å ha lest Digital Brann's personvern og kjøpsvilkår." />
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton label="Opprett konto" fullWidth />
      </Form.Item>
    </Form>
  );
}
