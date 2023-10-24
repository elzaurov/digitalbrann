import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Avatar, Dropdown } from "antd";
import {
  faBell,
  faSearch,
  faUser,
  faBuilding,
  faClipboard,
  faCog,
  faDashboard,
  faExclamationTriangle,
  faScrewdriverWrench,
  faSignOut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { useMobileViewport } from "utils/responsive";

import BrannSider from "components/common/Sider";
import BrannAdminSider from "components/common/AdminSider";

import BrannIconInput from "components/ui/input/IconInput";
import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";
import { useNavigate } from "react-router-dom";
import BrannIconButtonWithBadge from "components/ui/button/IconButtonWithBadge";

const { Header, Content } = Layout;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobileView = useMobileViewport();
  const { user } = useSelector((state) => state.auth);
  const menuItems = [
    {
      key: "/oversikt",
      icon: <BrannIcon icon={faDashboard} size={16} />,
      label: "Oversikt",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: false,
      onClick: () => onClickMenuItem("/oversikt"),
    },
    {
      key: "/bygg",
      icon: <BrannIcon icon={faBuilding} size={16} />,
      label: "Bygg",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: false,
      onClick: () => onClickMenuItem("/bygg"),
    },
    {
      key: "/oppgaver",
      icon: <BrannIcon icon={faClipboard} size={16} />,
      label: "Oppgaver",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: false,
      onClick: () => onClickMenuItem("/oppgaver"),
    },
    {
      key: "/avvik",
      icon: <BrannIcon icon={faExclamationTriangle} size={16} />,
      label: "Avvik",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: false,
      onClick: () => onClickMenuItem("/avvik"),
    },
    {
      key: "/brannvernorganisasjon",
      icon: <BrannIcon icon={faUserGroup} size={16} />,
      label: "Brannvernorganisasjon",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: false,
      onClick: () => onClickMenuItem("/brannvernorganisasjon"),
    },
    {
      key: "/lovsamling",
      icon: <BrannIcon icon={faScrewdriverWrench} size={16} />,
      label: "Lovsamling",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: false,
      onClick: () => onClickMenuItem("/lovsamling"),
    },
    {
      key: "/admin/oversikt",
      icon: <BrannIcon icon={faDashboard} size={16} />,
      label: "Oversikt",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/oversikt"),
    },
    {
      key: "/admin/bygg",
      icon: <BrannIcon icon={faBuilding} size={16} />,
      label: "Bygg",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/bygg"),
    },
    {
      key: "/admin/oppgaver",
      icon: <BrannIcon icon={faClipboard} size={16} />,
      label: "Oppgaver",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/oppgaver"),
    },
    {
      key: "/admin/avvik",
      icon: <BrannIcon icon={faExclamationTriangle} size={16} />,
      label: "Avvik",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/avvik"),
    },
    {
      key: "/admin/kunder",
      icon: <BrannIcon icon={faUserGroup} size={16} />,
      label: "Kunder",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/kunder"),
    },
    {
      key: "/admin/lovsamling",
      icon: <BrannIcon icon={faScrewdriverWrench} size={16} />,
      label: "Lovsamling",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/lovsamling"),
    },
    {
      type: "divider",
      style: { background: "#333" },
    },
    {
      key: "/innstillinger",
      icon: <BrannIcon icon={faCog} size={16} />,
      label: "Innstillinger",
      showInMobile: true,
      showInDesktop: true,
      isAdmin: false,
      onClick: () => onClickMenuItem("/innstillinger"),
    },
    {
      key: "/admin/innstillinger",
      icon: <BrannIcon icon={faCog} size={16} />,
      label: "Innstillinger",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/admin/innstillinger"),
    },
    {
      key: "/loggut",
      icon: <BrannIcon icon={faSignOut} size={16} />,
      label: "Logg ut",
      onClick: () => onClickMenuItem("/loggut"),
    },
  ];

  const items = menuItems
    .filter((item) => {
      if (item.key === "/loggut") return true;
      if (isMobileView) {
        if (item.type === "divider") return true;
        return (
          item.showInMobile && (user.isAdmin ? item.isAdmin : !item.isAdmin)
        );
      } else {
        return (
          item.showInDesktop && (user.isAdmin ? item.isAdmin : !item.isAdmin)
        );
      }
    })
    .map((item) => {
      if (item.type === "divider") {
        return {
          type: item.type,
          style: item.style,
        };
      } else {
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          onClick: item.onClick,
        };
      }
    });

  const onClickMenuItem = (key) => {
    if (key === "/loggut") {
      dispatch({
        type: "LOGOUT",
      });
    } else {
      navigate(key);
    }
  };

  return (
    <Layout className="app-layout">
      {!isMobileView && (user.isAdmin ? <BrannAdminSider /> : <BrannSider />)}
      <Layout>
        <Header>
          <BrannIconInput
            icon={<BrannIcon icon={faSearch} size={14} />}
            placeholder="Søk etter bygg, oppgaver, avvik m.m"
            width="350px"
          />
          <View className="nav">
            <BrannIconButtonWithBadge icon={faBell} />
            <Dropdown
              menu={{ items }}
              overlayClassName="header-menu"
              trigger={["click"]}
              arrow
            >
              <Avatar size="large" icon={<BrannIcon icon={faUser} />} />
            </Dropdown>
          </View>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
