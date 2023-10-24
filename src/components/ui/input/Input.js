import { Input } from "antd";
import React from "react";

export default function BrannInput({ placeholder, ...rest }) {
  return <Input placeholder={placeholder} size="large" {...rest} />;
}
