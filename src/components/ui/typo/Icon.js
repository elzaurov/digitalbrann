import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BrannIcon({ icon, size = 20, ...rest }) {
  return <FontAwesomeIcon icon={icon} style={{ fontSize: size }} {...rest} />;
}
