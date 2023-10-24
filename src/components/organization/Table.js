import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/organization/actions";

export default function OrganizationTable() {
  const dispatch = useDispatch();
  const { organizations, isFetchingOrganizations } = useSelector(
    (state) => state.organization
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_ORGANIZATIONS,
    });
  }, [dispatch]);

  const columns = [
    {
      title: "Rolle",
      dataIndex: "role",
      key: "role",
      responsive: ["md"],
    },
    {
      title: "Navn",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Organisasjon",
      dataIndex: "organization",
      key: "organization",
      responsive: ["md"],
    },
    {
      title: "E-post",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      key: "phone",
      responsive: ["md"],
    },
    {
      title: "Eiendom",
      dataIndex: "property",
      key: "property",
      responsive: ["md"],
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
      rowKey={"id"}
      loading={isFetchingOrganizations}
      columns={columns}
      dataSource={organizations}
    />
  );
}
