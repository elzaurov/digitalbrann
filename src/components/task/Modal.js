import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import BrannInput from "components/ui/input/Input";
import BrannIcon from "components/ui/typo/Icon";
import BrannText from "components/ui/typo/Text";
import BrannTitle from "components/ui/typo/Title";

export default function TaskModal({ isModalOpen, handleOk, handleCancel }) {
  const [value, setValue] = React.useState("");
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      title={null}
      closable={false}
      footer={null}
      width={1000}
    >
      <Form layout="vertical">
        <Row gutter={{ xs: 0, sm: 8, md: 16, lg: 16 }}>
          <Col
            md={14}
            sm={24}
            xs={24}
            style={{ background: "#f1f1f1", padding: 24 }}
          >
            <Form.Item>
              <BrannText text="Oppgaver / Ny oppgave" />
              <BrannTitle text="Ny Oppgave" />
            </Form.Item>
            <Form.Item name="name" label="Oppgavenavn">
              <BrannInput placeholder="Skriv oppgavenavn her" />
            </Form.Item>
            <Form.Item name="comment" label="Kommentar">
              <ReactQuill
                style={{ height: "200px" }}
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </Form.Item>
          </Col>
          <Col md={10} sm={24} xs={24} style={{ padding: 24 }}>
            <Form.Item name="type">
              <Select
                style={{ width: "100%" }}
                size="large"
                value={1}
                options={[{ label: "Velg eiendom", value: 1 }]}
              />
            </Form.Item>
            <Divider />
            <Form.Item name="status">
              <Row align="middle">
                <Col span={6} offset={3}>
                  <label>Status</label>
                </Col>
                <Col span={15}>
                  <Select
                    style={{ width: 150 }}
                    value={0}
                    size="large"
                    options={[
                      { label: "Åpen", value: 0 },
                      { label: "Pågår", value: 1 },
                      { label: "Løst", value: 2 },
                    ]}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="status">
              <Row align="middle">
                <Col span={6} offset={3}>
                  <label>Prioritet</label>
                </Col>
                <Col span={15}>
                  <Select
                    style={{ width: 150 }}
                    value={0}
                    size="large"
                    options={[
                      { label: "Høy", value: 0 },
                      { label: "Midten", value: 1 },
                      { label: "Lav", value: 2 },
                    ]}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="status">
              <Row align="middle">
                <Col span={6} offset={3}>
                  <label>Ansvarlig</label>
                </Col>
                <Col span={15}>
                  <Select
                    style={{ width: 150 }}
                    value={1}
                    size="large"
                    options={[
                      { label: "All", value: 0 },
                      { label: "David Gulbrandsen", value: 1 },
                    ]}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="status">
              <Row align="middle">
                <Col span={6} offset={3}>
                  <label>Forfaller</label>
                </Col>
                <Col span={15}>
                  <DatePicker size="large" onChange={onChange} />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name="status">
              <Row align="middle">
                <Col span={6} offset={3}>
                  <label>Gjentakelse</label>
                </Col>
                <Col span={15}>
                  <Select
                    style={{ width: 150 }}
                    value={0}
                    size="large"
                    options={[
                      { label: "Årlig", value: 0 },
                      { label: "Månedlig", value: 1 },
                    ]}
                  />
                </Col>
              </Row>
            </Form.Item>

            <Divider />
            <Form.Item>
              <Space
                wrap
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button size="large" onClick={handleCancel}>
                  Avbryt
                </Button>
                <Button
                  icon={<BrannIcon icon={faPlus} />}
                  type="primary"
                  size="large"
                >
                  Opprett
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
