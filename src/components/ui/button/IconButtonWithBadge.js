import { Badge, Button } from "antd";
import React from "react";
import BrannIcon from "../typo/Icon";

export default function BrannIconButtonWithBadge({
  icon,
  badgePos = [-3, 20],
}) {
  return (
    <Badge color="#f0ae89" dot={true} offset={badgePos}>
      <Button shape="circle" icon={<BrannIcon icon={icon} size={20} />} />
    </Badge>
  );
}
