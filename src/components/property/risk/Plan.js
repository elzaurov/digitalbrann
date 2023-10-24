import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Form, Space } from "antd";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import BrannInput from "components/ui/input/Input";
import BrannIcon from "components/ui/typo/Icon";
import BrannText from "components/ui/typo/Text";
import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import BrannSelect from "components/ui/select/Select";
import View from "components/ui/box/View";

export default function RiskPlan() {
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Handlingsplan"
        description="Her kommer forklaring pa hva handlingsplan er."
        hasHistoryAction
      />

      <Form>
        <View className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Risiko</th>
                <th>Tiltak</th>
                <th>Start Dato</th>
                <th>Varighet</th>
                <th>Ansvarlig</th>
                <th>Sist revidert</th>
              </tr>
            </thead>
            <tbody>
              <Form.List
                name="plans"
                initialValue={[
                  {
                    circumstance: "",
                    happenedMultiple: 0,
                    happenedOneTime: 0,
                    mightHappen: 0,
                    wasDead: 0,
                    wasPermanentDamaged: 0,
                    wasTransientDamanged: 0,
                  },
                ]}
              >
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <tr key={index}>
                        <td>
                          <Space>
                            <BrannIcon
                              color="gray"
                              icon={faTrashAlt}
                              onClick={remove}
                            />
                            <Form.Item name={[field.name, "circumstance"]}>
                              <BrannInput size="middle" />
                            </Form.Item>
                          </Space>
                        </td>
                        <td>
                          <Form.Item name={[field.name, "circumstance"]}>
                            <BrannInput size="middle" />
                          </Form.Item>
                        </td>
                        <td>
                          <Form.Item name={[field.name, "circumstance"]}>
                            <BrannDatePicker />
                          </Form.Item>
                        </td>
                        <td>
                          <Form.Item name={[field.name, "circumstance"]}>
                            <BrannSelect size="middle" />
                          </Form.Item>
                        </td>
                        <td>
                          <Form.Item name={[field.name, "circumstance"]}>
                            <BrannSelect size="middle" />
                          </Form.Item>
                        </td>
                        <td>
                          <Form.Item name={[field.name, "circumstance"]}>
                            <BrannText text="David Gulbrandsen" />
                          </Form.Item>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td colSpan={9} className="noborder nopadding btn-groups">
                        <BrannPrimaryButton label="Lagre" />
                        <BrannSecondaryButton
                          label="Hent data fra risikoanalyse"
                          onClick={add}
                        />
                      </td>
                    </tr>
                  </>
                )}
              </Form.List>
            </tbody>
          </table>
        </View>
      </Form>
    </PropertySectionContainer>
  );
}
