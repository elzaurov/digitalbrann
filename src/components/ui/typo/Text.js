import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function BrannText({ text, align, color, ...rest }) {
  return (
    <Text
      ellipsis
      {...rest}
      style={{ marginTop: 0, textAlign: align, color: color }}
    >
      {text}
    </Text>
  );
}
