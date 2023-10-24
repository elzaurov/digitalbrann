import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Layout, Menu } from "antd";
import {
  faBuilding,
  faClipboard,
  faCog,
  faDashboard,
  faExclamationTriangle,
  faScrewdriverWrench,
  faSignOut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import BrannLogo from "components/common/Logo";
import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";

const { Sider } = Layout;

const items = [
  {
    key: "/oversikt",
    icon: <BrannIcon icon={faDashboard} size={16} />,
    label: "Oversikt",
  },
  {
    key: "/bygg",
    icon: <BrannIcon icon={faBuilding} size={16} />,
    label: "Bygg",
  },
  {
    key: "/oppgaver",
    icon: <BrannIcon icon={faClipboard} size={16} />,
    label: "Oppgaver",
  },
  {
    key: "/avvik",
    icon: <BrannIcon icon={faExclamationTriangle} size={16} />,
    label: "Avvik",
  },
  {
    key: "/brannvernorganisasjon",
    icon: <BrannIcon icon={faUserGroup} size={16} />,
    label: "Brannvernorganisasjon",
  },
  {
    key: "/lovsamling",
    icon: <BrannIcon icon={faScrewdriverWrench} size={16} />,
    label: "Lovsamling",
  },
  { type: "divider", style: { background: "#333" } },
  {
    key: "/innstillinger",
    icon: <BrannIcon icon={faCog} size={16} />,
    label: "Innstillinger",
  },
  {
    key: "/loggut",
    icon: <BrannIcon icon={faSignOut} size={16} />,
    label: "Logg ut",
  },
];

export default function BrannSider() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [currentMenuItem, setCurrentMenuItem] = useState("/oversikt");

  useEffect(() => {
    if (location.pathname.includes("oversikt")) {
      setCurrentMenuItem("/oversikt");
    }
    if (location.pathname.includes("bygg")) {
      setCurrentMenuItem("/bygg");
    }
    if (location.pathname.includes("oppgaver")) {
      setCurrentMenuItem("/oppgaver");
    }
    if (location.pathname.includes("brannvernorganisasjon")) {
      setCurrentMenuItem("/brannvernorganisasjon");
    }
  }, [location.pathname]);

  const onClickMenuItem = (e) => {
    if (e.key === "/loggut") {
      dispatch({
        type: "LOGOUT",
      });
    } else {
      navigate(e.key);
    }
  };

  return (
    <Sider width={270} theme="dark">
      <View className="brann-logo-wrapper">
        <BrannLogo />
      </View>
      <Menu
        onClick={onClickMenuItem}
        items={items}
        theme="dark"
        mode="inline"
        selectedKeys={[currentMenuItem]}
      />
    </Sider>
  );
}
