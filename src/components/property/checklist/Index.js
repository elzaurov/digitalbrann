import React from "react";
import BrannPaper from "components/ui/box/Paper";
import { Divider } from "antd";
import Renter from "./Renter";
import Supervisor from "./Supervisor";
import FireProtectionManager from "./FireProtectionManager";

export default function ChecklistIndex() {
  return (
    <BrannPaper>
      <Renter />
      <Divider />
      <Supervisor />
      <Divider />
      <FireProtectionManager />
    </BrannPaper>
  );
}
