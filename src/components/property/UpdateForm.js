import React from "react";
import { Tabs } from "antd";
import CircleProgress from "components/ui/progress/CircleProgress";
import { useMobileViewport } from "utils/responsive";
import RiskIndex from "./risk/Index";
import AlterationIndex from "./alteration/Index";
import InfoIndex from "./info/Index";
import DrawingIndex from "./drawing/Index";
import InstallationIndex from "./installation/Index";
import OrganizationIndex from "./organization/Index";
import TrainingIndex from "./training/Index";
import ChecklistIndex from "./checklist/Index";

export default function PropertyUpdateForm() {
  const isMobile = useMobileViewport(768);
  const items = [
    {
      key: "info",
      label: <CircleProgress text="Beskrivelse av bygget" percent={0} />,
      children: <InfoIndex />,
    },
    {
      key: "risk",
      label: (
        <CircleProgress text="Risikoanalyse, rapporter, tilsyn" percent={25} />
      ),
      children: <RiskIndex />,
    },
    {
      key: "alteration",
      label: <CircleProgress text="Bygningsmessige endringer" percent={45} />,
      children: <AlterationIndex />,
    },
    {
      key: "drawing",
      label: <CircleProgress text="branntegninger" percent={65} />,
      children: <DrawingIndex />,
    },
    {
      key: "installation",
      label: (
        <CircleProgress text="Branntekniske installasjoner" percent={100} />
      ),
      children: <InstallationIndex />,
    },
    {
      key: "organization",
      label: <CircleProgress text="Organisering av brannvernet" percent={25} />,
      children: <OrganizationIndex />,
    },
    {
      key: "training",
      label: <CircleProgress text="Opplæring og øvelser" percent={45} />,
      children: <TrainingIndex />,
    },
    {
      key: "checklist",
      label: <CircleProgress text="Sjekkliste" percent={100} />,
      children: <ChecklistIndex />,
    },
  ];
  return <Tabs tabPosition={isMobile ? "top" : "left"} items={items} />;
}
