import React, { useEffect } from "react";
import { Button, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/task/actions";

export default function TaskTable() {
  const dispatch = useDispatch();
  const { tasks, isFetchingTasks } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch({
      type: actions.FETCH_TASKS,
    });
  }, [dispatch]);

  const columns = [
    {
      title: "Tittel",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Forfallsdato",
      dataIndex: "date",
      key: "date",
      responsive: ["md"],
    },
    {
      title: "Ansvarlig",
      dataIndex: "owner",
      key: "owner",
      responsive: ["md"],
    },
    {
      title: "Eiendom",
      dataIndex: "property",
      key: "property",
      responsive: ["md"],
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      align: "right",
      responsive: ["sm"],
      render: (status) => {
        let color = "orange";
        if (status === "InProgress") {
          color = "blue";
        }
        if (status === "Expired") {
          color = "red";
        }
        if (status === "Solved") {
          color = "green";
        }
        return (
          <Tag color={color} key={status}>
            {status?.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Handling",
      key: "id",
      align: "right",
      render: (id) => <Button>Se detaljer</Button>,
    },
  ];

  return (
    <Table
      loading={isFetchingTasks}
      rowKey={"id"}
      columns={columns}
      dataSource={tasks}
    />
  );
}
