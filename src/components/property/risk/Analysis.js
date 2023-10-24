import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "antd";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";
import BrannCheckbox from "components/ui/checkbox/Selector";
import BrannInput from "components/ui/input/Input";
import BrannIcon from "components/ui/typo/Icon";
import React, { useState } from "react";
import PropertySectionHeader from "../common/SectionHeader";
import PropertySectionContainer from "../common/SectionContainer";
import View from "components/ui/box/View";

const riskCriteriaWeight = {
  happenedMultiple: 3,
  happenedOneTime: 2,
  mightHappen: 1,
  wasDead: 3,
  wasPermanentDamaged: 2,
  wasTransientDamanged: 1,
};

export default function RiskAnalysis() {
  const [product, setProduct] = useState(0);
  const [priority, setPriority] = useState(0);

  // Function to calculate Product and Priority based on checkbox changes
  const handleCheckboxChange = (checked, value) => {
    if (checked) {
      setProduct(product + riskCriteriaWeight[value] * 1); // Update Product
      setPriority(priority + 1); // Update Priority
    } else {
      setProduct(product - riskCriteriaWeight[value] * 1); // Update Product
      setPriority(priority - 1); // Update Priority
    }
  };
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Risikoanalyse"
        description="Sett inn kryss i hvert fagfelt for hver horisontale linje"
        hasHistoryAction
      />
      <Form>
        <View className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="noborder"></th>
                <th colSpan={3}>Sannsynlighet</th>
                <th colSpan={3} className="sky">
                  Konsekvens
                </th>
                <th colSpan={2} className="noborder"></th>
              </tr>
              <tr>
                <th className="noborder"></th>
                <th colSpan={3}>Kan skje</th>
                <th colSpan={3} className="sky">
                  Kan fore til
                </th>
                <th colSpan={2} className="noborder"></th>
              </tr>
              <tr>
                <th className="noborder"></th>
                <th className="vertical-align-text pink">
                  Har skjedd flere ganger - 1
                </th>
                <th className="vertical-align-text yellow">Har skjedd - 2</th>
                <th className="vertical-align-text gray">Tenkig - 3</th>
                <th className="vertical-align-text pink">Dod - 1</th>
                <th className="vertical-align-text yellow">Varig skade - 2</th>
                <th className="vertical-align-text gray">
                  Forbigaende skade - 3
                </th>
                <th colSpan={2} className="noborder"></th>
              </tr>
              <tr>
                <th width="50%">Forhold som kan medfore risiko</th>
                <th className="pink">3</th>
                <th className="yellow">2</th>
                <th className="gray">1</th>
                <th className="pink">3</th>
                <th className="yellow">2</th>
                <th className="gray">1</th>
                <th>Produkt</th>
                <th>Prioritet</th>
              </tr>
            </thead>
            <tbody>
              <Form.List
                name="risks"
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
                          <Row gutter={2} className="flex-row">
                            <Col span={1} className="align-items">
                              <BrannIcon
                                icon={faTrashAlt}
                                color="gray"
                                onClick={remove}
                              />
                            </Col>
                            <Col span={22}>
                              <Form.Item name={[field.name, "circumstance"]}>
                                <BrannInput size="middle" />
                              </Form.Item>
                            </Col>
                          </Row>
                        </td>
                        <td className="pink">
                          <Form.Item
                            name={[field.name, "happenedMultiple"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.checked,
                                  "happenedMultiple"
                                )
                              }
                            />
                          </Form.Item>
                        </td>
                        <td className="yellow">
                          <Form.Item
                            name={[field.name, "happenedOneTime"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.checked,
                                  "happenedOneTime"
                                )
                              }
                            />
                          </Form.Item>
                        </td>
                        <td className="gray">
                          <Form.Item
                            name={[field.name, "mightHappen"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.checked,
                                  "mightHappen"
                                )
                              }
                            />
                          </Form.Item>
                        </td>
                        <td className="pink">
                          <Form.Item
                            name={[field.name, "wasDead"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.checked,
                                  "wasDead"
                                )
                              }
                            />
                          </Form.Item>
                        </td>
                        <td className="yellow">
                          <Form.Item
                            name={[field.name, "wasPermanentDamaged"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.checked,
                                  "wasPermanentDamaged"
                                )
                              }
                            />
                          </Form.Item>
                        </td>
                        <td className="gray">
                          <Form.Item
                            name={[field.name, "wasTransientDamanged"]}
                            valuePropName="checked"
                          >
                            <BrannCheckbox
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e.target.checked,
                                  "wasTransientDamanged"
                                )
                              }
                            />
                          </Form.Item>
                        </td>
                        <td align="center">{product}</td>
                        <td align="center">{priority}</td>
                      </tr>
                    ))}

                    <tr>
                      <td colSpan={9} className="noborder nopadding btn-groups">
                        <BrannPrimaryButton label="Lagre" />
                        <BrannSecondaryButton label="Nytt felt" onClick={add} />
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
