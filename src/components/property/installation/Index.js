import React, { useState } from "react";
import BrannPaper from "components/ui/box/Paper";
import { Divider, Form } from "antd";
import Installation from "./Installation";
import Alarm from "./Alarm";
import Equipment from "./Equipment";
import Emergency from "./Emergency";
import Smoke from "./Smoke";
import Sprinkler from "./Sprinkler";
import Other from "./Other";

const sections = [
  { key: "installation", Component: Installation },
  { key: "alarm", Component: Alarm },
  { key: "equipment", Component: Equipment },
  { key: "emergency", Component: Emergency },
  { key: "smoke", Component: Smoke },
  { key: "sprinkler", Component: Sprinkler },
  { key: "other", Component: Other },
];

export default function InstallationIndex() {
  const initialIsOpenState = sections.reduce(
    (acc, { key }) => {
      if (key !== "installation") {
        return { ...acc, [key]: false };
      }
      return acc;
    },
    { installation: true }
  );

  const [isOpen, setIsOpen] = useState(initialIsOpenState);

  const updateIsOpen = (field) => {
    setIsOpen({ ...isOpen, [field]: !isOpen[field] });
  };

  return (
    <BrannPaper>
      <Form>
        {sections.map(({ key, Component }, index) => (
          <React.Fragment key={key}>
            <Component
              isOpen={isOpen[key]}
              updateIsOpen={() => updateIsOpen(key)}
            />
            {index < sections.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Form>
    </BrannPaper>
  );
}
