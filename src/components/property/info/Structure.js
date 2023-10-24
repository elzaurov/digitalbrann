import { Col, Form, Row } from "antd";
import React from "react";
import BrannSubTitle from "components/ui/typo/SubTitle";
import { required } from "config/Validation";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import BrannPrimaryUploader from "components/ui/upload/PrimaryUploader";

export default function Structure() {
  return (
    <React.Fragment>
      <Form.Item>
        <BrannSubTitle text="Bygningskonstruksjoner" />
      </Form.Item>
      <Form.Item>
        <BrannTextWithIcon
          text="Oversikten forteller om dagens krav. Minimumskravene er hentet fra teknisk forskift med veiledning."
          icon={faInfoCircle}
        />
        <BrannTextWithIcon
          text="Denne informasjonen finnes i brannteknisktilstandsanalyse og/eller brannkonsept for eiendommen."
          icon={faInfoCircle}
        />
      </Form.Item>
      <Row gutter={16}>
        <Col md={12} xs={24} sm={24}>
          <Form.Item
            name="first_name"
            rules={[required]}
            label="Last opp brannkonsept"
          >
            <BrannPrimaryUploader />
          </Form.Item>
        </Col>
        <Col md={12} xs={24} sm={24}>
          <Form.Item
            name="last_name"
            rules={[required]}
            label="Last opp brannteknisktilstandsanalyse"
          >
            <BrannPrimaryUploader />
          </Form.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
}
