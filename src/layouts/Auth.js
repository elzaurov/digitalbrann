import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Col, Layout, Row, Space } from "antd";

import { useMobileViewport } from "utils/responsive";

import BrannTitle from "components/ui/typo/Title";
import BrannLogo from "components/common/Logo";

export default function AuthLayout({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isMobileView = useMobileViewport();

  useEffect(() => {
    if (isAuthenticated) {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <Layout className="auth-layout">
      <Layout.Content>
        <Row className="container">
          {!isMobileView && (
            <Col span={12} className="banner">
              <Layout.Content className="logo">
                <BrannLogo />
              </Layout.Content>
              <Space className="caption">
                <BrannTitle
                  text="Vi sørger for at våre kunder føler seg godt ivaretatt når det
                kommer brannsikkerhet"
                  color="white"
                />
              </Space>
            </Col>
          )}
          <Col sm={24} xs={24} md={12} className="content">
            {children}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
