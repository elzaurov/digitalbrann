import React from "react";

import { Form, Radio, Space } from "antd";

import { required } from "config/Validation";

import BrannInput from "components/ui/input/Input";
import BrannSubmitButton from "components/ui/button/SubmitButton";

export default function BuildingForm({ updateStep }) {
  const onFinish = (values) => {
    updateStep((prevStep) => prevStep + 1);
  };

  return (
    <Form className="auth-form" name="register-form" onFinish={onFinish}>
      <Form.Item name="address" rules={[required]}>
        <BrannInput placeholder="Adresse *" />
      </Form.Item>
      <Form.Item name="post_code" rules={[required]}>
        <BrannInput placeholder="Postnummer *" />
      </Form.Item>
      <Form.Item name="post_area" rules={[required]}>
        <BrannInput placeholder="Poststed *" />
      </Form.Item>
      <Form.Item>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="0">Et rent næringsbygg uten beboere</Radio>
            <Radio value="1">Et borettslag med næringsseksjoner</Radio>
            <Radio value="2">Et borettslag uten næringsseksjoner</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton label="Fortsett" fullWidth />
      </Form.Item>
    </Form>
  );
}
