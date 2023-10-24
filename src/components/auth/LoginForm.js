import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "antd";

import { email, required } from "config/Validation";

import BrannLink from "components/ui/typo/Link";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import Box from "components/ui/box/Box";
import BrannInput from "components/ui/input/Input";
import BrannPasswordInput from "components/ui/input/PasswordInput";

import actions from "states/auth/actions";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isAuthenticating } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch({
      type: actions.LOGIN,
      payload: values,
    });
  };

  return (
    <Form className="auth-form" name="login-form" onFinish={onFinish}>
      <Form.Item name="email" rules={[required, email]}>
        <BrannInput placeholder="E-post eller telefon *" />
      </Form.Item>
      <Form.Item name="password" rules={[required]}>
        <BrannPasswordInput placeholder="Passord *" />
      </Form.Item>

      <Form.Item>
        <Box textAlign="left" marginTop={1} marginBottom={10}>
          <BrannLink href="/autentisering/glemt-passord" underline>
            Glemt passord?
          </BrannLink>
        </Box>
        <BrannSubmitButton
          loading={isAuthenticating}
          fullWidth
          label="Logg inn"
        />
      </Form.Item>
    </Form>
  );
}
