import {
  faChevronDown,
  faChevronUp,
  faHistory,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Space } from "antd";
import View from "components/ui/box/View";
import BrannIconButtonWithBadge from "components/ui/button/IconButtonWithBadge";
import BrannDatePicker from "components/ui/datetime/DatePicker";
import BrannSelect from "components/ui/select/Select";
import BrannSubTitle from "components/ui/typo/SubTitle";
import BrannTextWithIcon from "components/ui/typo/TextWithIcon";
import React from "react";
import { useMobileViewport } from "utils/responsive";

export default function PropertySectionHeader({
  title,
  description = null,
  hasHistoryAction = null,
  hasFilter = null,
  updateIsOpen,
  isCollapsed,
  hasCollapse,
}) {
  const isMobileView = useMobileViewport(768);
  return (
    <View className="header">
      <View style={{ width: "90%" }}>
        <View className="title" onClick={hasCollapse ? updateIsOpen : null}>
          {hasCollapse && (
            <FontAwesomeIcon icon={isCollapsed ? faChevronUp : faChevronDown} />
          )}
          <BrannSubTitle text={title} />
        </View>
        {description && (
          <BrannTextWithIcon text={description} icon={faInfoCircle} />
        )}
      </View>
      {hasHistoryAction && (
        <BrannIconButtonWithBadge icon={faHistory} badgePos={[-4, 4]} />
      )}
      {hasFilter && !isMobileView && (
        <Form layout="vertical">
          <Space>
            <Form.Item label="Type">
              <BrannSelect
                size="middle"
                options={[{ label: "Brannovelse", value: 0 }]}
              />
            </Form.Item>
            <Form.Item label="Arkiv">
              <BrannDatePicker size="middle" />
            </Form.Item>
          </Space>
        </Form>
      )}
    </View>
  );
}
