import React from "react";
import BrannPaper from "components/ui/box/Paper";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Col, Form, Row, Space, Tag } from "antd";
import BrannInput from "components/ui/input/Input";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import BrannIcon from "components/ui/typo/Icon";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";
import BrannSelect from "components/ui/select/Select";
import BrannStrongText from "components/ui/typo/StrongText";
import View from "components/ui/box/View";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import { useMobileViewport } from "utils/responsive";

export default function TrainingIndex() {
  const isMobileView = useMobileViewport(768);
  return (
    <BrannPaper>
      <PropertySectionContainer>
        <PropertySectionHeader
          title="Opplæring og øvelser"
          description="Her kommer forklaring på hva opplæring og øvelser er"
          hasFilter
        />
        {isMobileView && (
          <Form layout="vertical">
            <Space>
              <Form.Item label="Type">
                <BrannSelect
                  size="middle"
                  options={[{ label: "Brannovelse", value: 0 }]}
                />
              </Form.Item>
              <Form.Item label="Arkiv">
                <BrannDatePicker size="middle" />
              </Form.Item>
            </Space>
          </Form>
        )}
        <Row gutter={16} style={{ marginBottom: 10 }}>
          <Col xs={24} sm={24} md={12}>
            <BrannStrongText text="Brannovelse, 25,07.23" />
          </Col>
          <Col xs={24} sm={24} md={12} align="right">
            <Space>
              <Tag color="green">23 PAMELDT</Tag>
              <Tag color="warning">5 INVITERT</Tag>
              <Tag color="red">3 AVMELDT</Tag>
            </Space>
          </Col>
        </Row>
        <Form>
          <View className="table-wrapper">
            <table className="noborder">
              <thead>
                <tr>
                  <th>Navn</th>
                  <th>Stilling</th>
                  <th>Ansatt hos</th>
                  <th>Type ovelse</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <Form.List
                  name="ovelsers"
                  initialValue={[
                    {
                      name: 1,
                      score: "Daglig leder",
                      employee: "Elkjop AS",
                      type: "Brannalarm ovelse",
                      status: 0,
                    },
                    {
                      name: 1,
                      score: "Styreleder",
                      employee: "Elkjop AS",
                      type: "Brannalarm ovelse",
                      status: 0,
                    },
                    {
                      name: 1,
                      score: "Konsernsjef",
                      employee: "Elkjop AS",
                      type: "Brannalarm ovelse",
                      status: 0,
                    },
                  ]}
                >
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <tr key={index}>
                          <td>
                            <Space className="icon-input-wrapper">
                              <BrannIcon
                                color="gray"
                                icon={faTrashAlt}
                                onClick={remove}
                              />
                              <Form.Item name={[field.name, "name"]}>
                                <BrannSelect
                                  size="middle"
                                  options={[{ label: "Linda Frid", value: 1 }]}
                                />
                              </Form.Item>
                            </Space>
                          </td>
                          <td align="center">
                            <Form.Item name={[field.name, "score"]}>
                              <BrannInput size="middle" />
                            </Form.Item>
                          </td>
                          <td align="center">
                            <Form.Item name={[field.name, "employee"]}>
                              <BrannInput size="middle" />
                            </Form.Item>
                          </td>
                          <td align="center">
                            <Form.Item name={[field.name, "type"]}>
                              <BrannInput size="middle" />
                            </Form.Item>
                          </td>
                          <td align="center">
                            <Tag color="green">PAMELDT</Tag>
                          </td>
                        </tr>
                      ))}

                      <tr>
                        <td
                          colSpan={3}
                          className="noborder nopadding btn-groups"
                        >
                          <BrannPrimaryButton label="Lagre" />
                          <BrannSecondaryButton
                            label="Legg til person"
                            onClick={add}
                          />
                        </td>
                        <td
                          align="right"
                          colSpan={2}
                          className="noborder nopadding btn-groups"
                        >
                          <BrannSecondaryButton label="Importer ansatte" />
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
    </BrannPaper>
  );
}
