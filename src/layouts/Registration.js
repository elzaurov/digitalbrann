import React from "react";

import { Layout, Steps } from "antd";
import View from "components/ui/box/View";
import BrannLogo from "components/common/Logo";
import BrannIcon from "components/ui/typo/Icon";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import BrannLink from "components/ui/typo/Link";
import { useMobileViewport } from "utils/responsive";

const { Content, Sider } = Layout;

const RegistrationLayout = ({ step, children }) => {
  const isMobileView = useMobileViewport();
  const description = "Lorem ipsum dolor sit amet consec";
  const items = [
    {
      title: "Opprett bygg",
      description,
    },
    {
      title: "Eier av bygget",
      description,
    },
    {
      title: "Branntekniske installasjoner",
      description,
    },
    {
      title: "Opprett passord",
      description,
    },
  ];

  return (
    <Layout className="app-layout">
      {!isMobileView && (
        <Sider width={470} theme="dark" className="brann-registeration-sider">
          <View className="brann-logo-wrapper">
            <BrannLogo />
          </View>
          <View className="brann-registeration-step-wrapper">
            <Steps direction="vertical" current={step}>
              {items.map((item, index) => (
                <Steps.StepItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={<BrannIcon icon={faCheckCircle} />}
                />
              ))}
            </Steps>
          </View>
          <View className="brann-registeration-back">
            <BrannLink href="/autentisering/logginn">
              Har du allerede konto?
            </BrannLink>
          </View>
        </Sider>
      )}
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default RegistrationLayout;
