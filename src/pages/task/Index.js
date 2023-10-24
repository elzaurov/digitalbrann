import React, { useState } from "react";
import { Col, Row, Select, Space } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import TaskTable from "components/task/Table";
import TaskModal from "components/task/Modal";
import BrannText from "components/ui/typo/Text";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";

export default function TaskIndex() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Oppgaver" />
              <BrannText text="Se full oversikt over alle oppgaver" />
            </Col>
            <Col>
              <Space wrap>
                <Select
                  style={{
                    width: 150,
                  }}
                  value={0}
                  size="large"
                  options={[
                    { label: "All", value: 0 },
                    { label: "David Gulbrandsen", value: 1 },
                  ]}
                />
                <Select
                  style={{
                    width: 150,
                  }}
                  size="large"
                  value={0}
                  options={[
                    { label: "All", value: 0 },
                    { label: "Gabels Gate 19, 0272 Oslo", value: 1 },
                  ]}
                />
                <Select
                  style={{
                    width: 150,
                  }}
                  size="large"
                  value={"All"}
                  options={[
                    { label: "All", value: "All" },
                    { label: "Solved", value: "Solved" },
                    { label: "InProgress", value: "InProgress" },
                    { label: "Open", value: "Open" },
                    { label: "Expired", value: "Expired" },
                  ]}
                />
                <BrannPrimaryButton label="Ny oppgave" onClick={showModal} />
              </Space>
            </Col>
          </Row>
          <TaskModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </Col>
        <Col span={24}>
          <TaskTable />
        </Col>
      </Row>
    </AppLayout>
  );
}
