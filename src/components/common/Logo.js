import React from "react";
import { Image, Space } from "antd";
import LogoImage from "assets/images/logo.png";

export default function BrannLogo() {
  const spaceProps = {
    align: "center",
    block: "true",
    style: { justifyContent: "center", width: "100%" },
  };

  const imageProps = {
    height: 35,
    alt: "Digitalbrann",
    preview: false,
  };

  return (
    <Space {...spaceProps}>
      <Image src={LogoImage} {...imageProps} />
    </Space>
  );
}
