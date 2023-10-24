import { Form, Tabs } from "antd";
import React from "react";

import BrannPaper from "components/ui/box/Paper";
import BrannSubTitle from "components/ui/typo/SubTitle";
import BrannInput from "components/ui/input/Input";
import BrannPasswordInput from "components/ui/input/PasswordInput";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import { useMobileViewport } from "utils/responsive";

export default function CustomerForm() {
  const isMobile = useMobileViewport(768);
  const items = [
    {
      key: "contact",
      label: "Kontaktinformasjon",
      children: (
        <BrannPaper>
          <Form layout="vertical" name="contact-form">
            <Form.Item>
              <BrannSubTitle text="Kontaktinformasjon" />
            </Form.Item>
            <Form.Item name="first_name" label="Fornavn">
              <BrannInput placeholder="Fornavn" />
            </Form.Item>
            <Form.Item name="last_name" label="Etternavn">
              <BrannInput placeholder="Etternavn" />
            </Form.Item>
            <Form.Item name="phone" label="Telefon">
              <BrannInput placeholder="Telefon" />
            </Form.Item>
            <Form.Item name="email" label="E-post">
              <BrannInput placeholder="E-post" />
            </Form.Item>
            <Form.Item>
              <BrannSubmitButton label="Lagre" />
            </Form.Item>
          </Form>
        </BrannPaper>
      ),
    },
    {
      key: "company",
      label: "Selskapsinformasjon",
      children: (
        <BrannPaper>
          <Form layout="vertical" name="company-form">
            <Form.Item>
              <BrannSubTitle text="Selskapsinformasjon" />
            </Form.Item>
            <Form.Item label="Selskapsnavn">
              <BrannInput placeholder="Selskapsnavn" />
            </Form.Item>
            <Form.Item label="Organisasjonsnummer">
              <BrannInput placeholder="Organisasjonsnummer" />
            </Form.Item>
            <Form.Item>
              <BrannSubmitButton label="Lagre" />
            </Form.Item>
          </Form>
        </BrannPaper>
      ),
    },
    {
      key: "password",
      label: "Opprett passord",
      children: (
        <BrannPaper>
          <Form layout="vertical" name="password-form">
            <Form.Item>
              <BrannSubTitle text="Opprett passord" />
            </Form.Item>
            <Form.Item label="Nytt passord">
              <BrannPasswordInput placeholder="Nytt passord" />
            </Form.Item>
            <Form.Item label="Gjenta passord">
              <BrannPasswordInput placeholder="Gjenta passord" />
            </Form.Item>
            <Form.Item>
              <BrannSubmitButton label="Lagre" />
            </Form.Item>
          </Form>
        </BrannPaper>
      ),
    },
  ];
  return <Tabs tabPosition={isMobile ? "top" : "left"} items={items} />;
}
