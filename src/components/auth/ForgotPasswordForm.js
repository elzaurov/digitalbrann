import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "antd";

import { email, required } from "config/Validation";

import BrannInput from "components/ui/input/Input";
import BrannSubmitButton from "components/ui/button/SubmitButton";

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values:", values);
    navigate("/autentisering/tilbakestill-passord/:token");
  };

  return (
    <Form className="auth-form" name="forgot-password-form" onFinish={onFinish}>
      <Form.Item name="email" rules={[required, email]}>
        <BrannInput placeholder="E-post *" />
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton fullWidth label="Send tilbakestilling lenke" />
      </Form.Item>
    </Form>
  );
}
