import { DatePicker } from "antd";
import React from "react";
import BrannIcon from "../typo/Icon";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function BrannDatePicker({ size }) {
  return (
    <DatePicker
      size={size}
      style={{ width: "100%" }}
      suffixIcon={<BrannIcon icon={faCalendar} />}
    />
  );
}
