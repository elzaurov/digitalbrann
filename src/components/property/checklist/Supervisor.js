import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Avatar, Col, Form, Row, Space, Tag } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import BrannInput from "components/ui/input/Input";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import BrannText from "components/ui/typo/Text";
import BrannCheckbox from "components/ui/checkbox/Selector";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import BrannIcon from "components/ui/typo/Icon";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";
import View from "components/ui/box/View";
import { useMobileViewport } from "utils/responsive";

export default function Supervisor() {
  const isMobileView = useMobileViewport(768);
  return (
    <PropertySectionContainer>
      <PropertySectionHeader
        title="Sjekkliste for vaktmester/stedlig brannvernleder"
        description="Her kommer forklaring på hva dette er"
        hasHistoryAction
      />
      <Form layout="vertical">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={9}>
            <Form.Item label="Utfort av">
              <BrannInput placeholder="Skriv inn navn" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={9}>
            <Form.Item label="Maneden det gjelder for">
              <BrannDatePicker size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Form.Item label=" ">
              <Space
                style={{
                  borderLeft: isMobileView ? 0 : "1px solid #cdcdcd",
                  padding: isMobileView ? 0 : "0 1rem",
                }}
              >
                <BrannText text="Inviter" />
                <Avatar.Group
                  maxCount={3}
                  size="middle"
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  }}
                >
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                    }}
                  >
                    K
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                    }}
                    icon={<UserOutlined />}
                  />
                  <Avatar
                    style={{
                      backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Form>
        <View className="table-wrapper">
          <table className="noborder">
            <thead>
              <tr>
                <th width="60%">Sjekkpunkter</th>
                <th>Ja</th>
                <th>Nei</th>
                <th>Avviksdetaljer</th>
                <th>Avvikstatus</th>
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
                          <Space className="icon-input-wrapper">
                            <BrannIcon color="gray" icon={faTrashAlt} />
                            <Form.Item name={[field.name, "title"]}>
                              <BrannInput size="middle" />
                            </Form.Item>
                          </Space>
                        </td>
                        <td align="center">
                          <Form.Item name={[field.name, "value"]}>
                            <BrannCheckbox />
                          </Form.Item>
                        </td>
                        <td align="center">
                          <Form.Item name={[field.name, "value"]}>
                            <BrannCheckbox />
                          </Form.Item>
                        </td>
                        <td align="center">
                          <Form.Item name={[field.name, "value"]}>
                            <BrannTextWithIcon
                              text="Se detaljer"
                              icon={faEye}
                            />
                          </Form.Item>
                        </td>
                        <td align="center">
                          <Tag color="magenta">magenta</Tag>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td colSpan={5} className="noborder nopadding btn-groups">
                        <BrannPrimaryButton label="Lagre" />
                        <BrannSecondaryButton
                          label="Legg til ny linje"
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
