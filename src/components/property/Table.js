import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Table, Tag } from "antd";
import LineProgress from "components/ui/progress/LineProgress";
import actions from "states/property/actions";

export default function PropertyTable({ onUpdateProperty }) {
  const dispatch = useDispatch();
  const { properties, isFetchingProperties } = useSelector(
    (state) => state.property
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_PROPERTIES,
    });
  }, [dispatch]);

  const columns = [
    {
      title: "Eiendom",
      dataIndex: "property",
      key: "property",
      width: 400,
    },
    {
      title: "Åpen",
      dataIndex: "open",
      key: "open",
      width: 100,
      responsive: ["xl"],
      render: (open) => {
        return (
          <Tag color={open === 0 ? "gray" : "orange"} key="open">
            {open}
          </Tag>
        );
      },
    },
    {
      title: "Pågår",
      dataIndex: "ongoing",
      key: "ongoing",
      width: 100,
      responsive: ["xl"],
      render: (ongoing) => {
        return (
          <Tag color={ongoing === 0 ? "gray" : "blue"} key="ongoing">
            {ongoing}
          </Tag>
        );
      },
    },
    {
      title: "Forfalt",
      dataIndex: "expired",
      key: "expired",
      width: 100,
      responsive: ["xl"],
      render: (expired) => {
        return (
          <Tag color={expired === 0 ? "gray" : "red"} key="expired">
            {expired}
          </Tag>
        );
      },
    },
    {
      title: "Løst",
      key: "solved",
      dataIndex: "solved",
      width: 100,
      responsive: ["xl"],
      render: (solved) => {
        return (
          <Tag color={solved === 0 ? "gray" : "green"} key="solved">
            {solved}
          </Tag>
        );
      },
    },
    {
      title: "Progress",
      key: "progress",
      dataIndex: "progress",
      align: "center",
      responsive: ["xl"],
      render: (progress) => <LineProgress percent={progress} text="utfort" />,
    },
    {
      title: "Handling",
      dataIndex: "id",
      key: "id",
      align: "right",
      width: 200,
      render: (id) => (
        <Button onClick={() => onUpdateProperty(id)}>Se detaljer</Button>
      ),
    },
  ];

  return (
    <Table
      rowKey={"id"}
      loading={isFetchingProperties}
      columns={columns}
      dataSource={properties}
    />
  );
}
