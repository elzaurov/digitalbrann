import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "antd";

import { match, min, required } from "config/Validation";

import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannPasswordInput from "components/ui/input/PasswordInput";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values:", values);
    navigate("/autentisering/logginn");
  };
  return (
    <Form className="auth-form" name="reset-password-form" onFinish={onFinish}>
      <Form.Item name="password" rules={[required, min]} hasFeedback>
        <BrannPasswordInput placeholder="Nytt passord *" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        rules={[required, match]}
        hasFeedback
      >
        <BrannPasswordInput placeholder="Bekreft passord *" />
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton fullWidth label="Tilbakestill passord" />
      </Form.Item>
    </Form>
  );
}
