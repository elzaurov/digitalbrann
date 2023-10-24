import React from "react";
import BrannPaper from "components/ui/box/Paper";
import PropertySectionContainer from "../common/SectionContainer";
import PropertySectionHeader from "../common/SectionHeader";
import { Divider, List, Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ServicePartner from "./ServicePartner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCheckCircle,
  faEllipsisV,
  faEnvelope,
  faHome,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import View from "components/ui/box/View";

export default function OrganizationIndex() {
  const TreeItem = ({ company, employees, name, position, email, phone }) => {
    const data = [
      {
        title: name,
        description: position,
        icon: <FontAwesomeIcon icon={faBuilding} />,
      },
      {
        title: company,
        icon: <FontAwesomeIcon icon={faHome} />,
      },
      {
        title: `${employees} ansatte`,
        icon: <FontAwesomeIcon icon={faUsers} />,
      },
      {
        title: email,
        icon: <FontAwesomeIcon icon={faEnvelope} />,
      },
      {
        title: phone,
        icon: <FontAwesomeIcon icon={faPhone} />,
      },
    ];
    return (
      <View className="tree-item">
        <View className="tree-item-detail">
          <FontAwesomeIcon icon={faEllipsisV} />
        </View>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <View className="tree-item-status">
          <FontAwesomeIcon icon={faCheckCircle} color="green" />
        </View>
      </View>
    );
  };
  const treeData = [
    {
      title: (
        <TreeItem
          name="Cecilie Jonsen"
          position="Stedlig brannvernleder"
          company="Vinmonopolet AS"
          employees={10}
          email="cecilie@vinmonopolet.no"
          phone="95312133"
        />
      ),
      key: "0-0",
      children: [
        {
          title: (
            <TreeItem
              name="Cecilie Jonsen"
              position="Stedlig brannvernleder"
              company="Vinmonopolet AS"
              employees={10}
              email="cecilie@vinmonopolet.no"
              phone="95312133"
            />
          ),
          key: "0-0-0",
          children: [
            {
              title: (
                <TreeItem
                  name="Cecilie Jonsen"
                  position="Stedlig brannvernleder"
                  company="Vinmonopolet AS"
                  employees={10}
                  email="cecilie@vinmonopolet.no"
                  phone="95312133"
                />
              ),
              key: "0-0-0-0",
            },
            {
              title: (
                <TreeItem
                  name="Cecilie Jonsen"
                  position="Stedlig brannvernleder"
                  company="Vinmonopolet AS"
                  employees={10}
                  email="cecilie@vinmonopolet.no"
                  phone="95312133"
                />
              ),
              key: "0-0-0-1",
            },
          ],
        },
      ],
    },
  ];
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  return (
    <BrannPaper>
      <PropertySectionContainer>
        <PropertySectionHeader
          title="Organisering av brannvernet"
          description="Her kommer forklaring pa hva organisering av brannvernet er"
          hasHistoryAction
        />
        <View className="tree-view-wrapper">
          <Tree
            showLine
            switcherIcon={<DownOutlined />}
            defaultExpandedKeys={["0-0-0"]}
            onSelect={onSelect}
            treeData={treeData}
          />
        </View>
      </PropertySectionContainer>
      <Divider />
      <ServicePartner />
    </BrannPaper>
  );
}
