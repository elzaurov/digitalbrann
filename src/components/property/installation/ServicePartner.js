import React from "react";
import PropertySectionContainer from "../common/SectionContainer";
import { Form, Space } from "antd";
import BrannInput from "components/ui/input/Input";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import {
  faEye,
  faInfoCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import BrannSelect from "components/ui/select/Select";
import BrannIcon from "components/ui/typo/Icon";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import View from "components/ui/box/View";
import BrannSubTitle from "components/ui/typo/SubTitle";

export default function ServicePartner() {
  return (
    <PropertySectionContainer>
      <Form.Item>
        <BrannSubTitle size={4} text="Serviceparnter" />
      </Form.Item>
      <Form.Item>
        <BrannTextWithIcon
          text="Her kommer forklaring pa hva servicepartner er"
          icon={faInfoCircle}
        />
      </Form.Item>
      <Form.Item label="Selskapsnavn">
        <BrannInput placeholder="Selskapsnavn" />
      </Form.Item>
      <View className="table-wrapper">
        <table className="noborder">
          <thead>
            <tr>
              <th>Siste kontroll</th>
              <th>Antall avvik</th>
              <th>Utfort av</th>
              <th>Avviksdetaljer</th>
            </tr>
          </thead>
          <tbody>
            <Form.List
              name="installation"
              initialValue={[
                { date: "2023-09-10", numberOfDeviations: 2, partner: 1 },
                { date: "--- velg ---", numberOfDeviations: 0, partner: 1 },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <tr key={index}>
                      <td>
                        <Space className="icon-input-wrapper">
                          <BrannIcon
                            icon={faTrashAlt}
                            color="gray"
                            onClick={remove}
                          />
                          <Form.Item name={[field.name, "date"]}>
                            <BrannDatePicker />
                          </Form.Item>
                        </Space>
                      </td>
                      <td align="center">
                        <Form.Item name={[field.name, "numberOfDeviations"]}>
                          <BrannSelect
                            size="middle"
                            options={[{ label: "1", value: 1 }]}
                          />
                        </Form.Item>
                      </td>
                      <td align="center">
                        <Form.Item name={[field.name, "partner"]}>
                          <BrannSelect
                            size="middle"
                            options={[{ label: "Servicepartner AS", value: 1 }]}
                          />
                        </Form.Item>
                      </td>
                      <td>
                        <Form.Item>
                          <BrannTextWithIcon text="Se detaljer" icon={faEye} />
                        </Form.Item>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan={5} className="noborder nopadding btn-groups">
                      <BrannPrimaryButton label="Lagre" />
                      <BrannSecondaryButton label="Ny kontroll" onClick={add} />
                    </td>
                  </tr>
                </>
              )}
            </Form.List>
          </tbody>
        </table>
      </View>
    </PropertySectionContainer>
  );
}
