import { Input } from "antd";
import React from "react";

export default function BrannPasswordInput({ placeholder, ...rest }) {
  return <Input.Password placeholder={placeholder} size="large" {...rest} />;
}
