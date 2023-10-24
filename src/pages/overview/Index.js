import React from "react";
import { Col, Row, Typography } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import Documentations from "components/overview/Documentations";
import Tasks from "components/overview/Tasks";
import Deviations from "components/overview/Deviations";
import Notifications from "components/overview/Notifications";
import News from "components/overview/News";
import BrannPrimaryDropDown from "components/ui/select/DropDown";

export default function Overview() {
  const items = [
    {
      key: "1",
      label: "Submit and continue",
    },
  ];

  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Hei David!" />
              <Typography.Text>
                Oversikt over branndokumentasjon, gjøremål, siste nytt og
                varslinger.
              </Typography.Text>
            </Col>
            <Col>
              <BrannPrimaryDropDown label="Opprett" items={items} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[32, 32]}>
            <Col xl={8} lg={12} md={24} sm={24} xs={24}>
              <Documentations />
            </Col>
            <Col xl={8} lg={12} md={24} sm={24} xs={24}>
              <Row gutter={[0, 32]}>
                <Col span={24}>
                  <Tasks />
                </Col>
                <Col span={24}>
                  <Deviations />
                </Col>
              </Row>
            </Col>
            <Col xl={8} lg={12} md={24} sm={24} xs={24}>
              <Notifications />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <News />
            </Col>
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
}
