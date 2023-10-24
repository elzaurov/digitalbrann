import React from "react";

import { Form } from "antd";

import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannCheckbox from "components/ui/checkbox/Selector";
import BrannText from "components/ui/typo/Text";

export default function InstallationForm({ updateStep }) {
  const onFinish = (values) => {
    updateStep((prevStep) => prevStep + 1);
  };

  const predefinedInstallations = [
    "Brannalarmanlegg iht NS3960",
    "Manuelt slokkeutstyr",
    "Nødlys",
    "Sprinkelsystemer",
    "Kjøkkenslukkeutstyr",
    "Røykluker",
  ];

  return (
    <Form className="auth-form" name="register-form" onFinish={onFinish}>
      <table className="noborder">
        <thead>
          <tr>
            <th align="left">Har bygget følgende installert?</th>
            <th>Ja</th>
            <th>Nei</th>
          </tr>
        </thead>
        <tbody>
          {predefinedInstallations.map((item, index) => (
            <tr key={index}>
              <td>
                <Form.Item>
                  <BrannText text={item} />
                </Form.Item>
              </td>
              <td>
                <Form.Item name={[item, "yes"]} valuePropName="checked">
                  <BrannCheckbox />
                </Form.Item>
              </td>
              <td>
                <Form.Item name={[item, "no"]} valuePropName="checked">
                  <BrannCheckbox />
                </Form.Item>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form.Item>
        <BrannSubmitButton label="Fortsett" fullWidth />
      </Form.Item>
    </Form>
  );
}
