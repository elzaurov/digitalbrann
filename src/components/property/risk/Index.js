import React from "react";
import BrannPaper from "components/ui/box/Paper";
import RiskAnalysis from "./Analysis";
import RiskPlan from "./Plan";
import RiskFollowUp from "./FollowUp";
import { Divider } from "antd";

export default function RiskIndex() {
  return (
    <BrannPaper>
      <RiskAnalysis />
      <Divider />
      <RiskPlan />
      <Divider />
      <RiskFollowUp />
    </BrannPaper>
  );
}
