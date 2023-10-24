import React from "react";
import PropertySectionHeader from "../common/SectionHeader";
import PropertySectionContainer from "../common/SectionContainer";
import { Form } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannCheckbox from "components/ui/checkbox/Selector";
import View from "components/ui/box/View";

export default function Installation({ isOpen, updateIsOpen }) {
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Branntekniske installasjoner"
        hasHistoryAction
        isCollapsed={isOpen}
        hasCollapse={true}
        updateIsOpen={() => updateIsOpen("installation")}
      />
      {isOpen && (
        <View className="table-wrapper">
          <table className="noborder">
            <thead>
              <tr>
                <th align="left">Har eiendommen folgende installert?</th>
                <th>Ja</th>
                <th>Nei</th>
              </tr>
            </thead>
            <tbody>
              <Form.List
                name="installation"
                initialValue={[
                  { title: "Brannalarmanlegg iht NS3960", value: 0 },
                  { title: "Manuelt slokkeutstyr", value: 0 },
                  { title: "Nodlys", value: 0 },
                  { title: "Sprinkelsystemer", value: 0 },
                  { title: "Kjokkenslokkeutstyr", value: 0 },
                  { title: "Roykluker", value: 0 },
                ]}
              >
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Item name={[field.name, "title"]}>
                            <BrannInput />
                          </Form.Item>
                        </td>
                        <td align="center">
                          <Form.Item
                            name={[field.name, "yes"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox />
                          </Form.Item>
                        </td>
                        <td align="center">
                          <Form.Item
                            name={[field.name, "no"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox />
                          </Form.Item>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </Form.List>
            </tbody>
          </table>
        </View>
      )}
    </PropertySectionContainer>
  );
}
