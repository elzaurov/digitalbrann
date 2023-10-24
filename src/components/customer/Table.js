import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/customer/actions";

export default function CustomerTable() {
  const dispatch = useDispatch();
  const { customers, isFetchingCustomers } = useSelector(
    (state) => state.customer
  );

  const columns = [
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

  useEffect(() => {
    dispatch({
      type: actions.FETCH_CUSTOMERS,
    });
  }, [dispatch]);

  return (
    <Table
      rowKey={"id"}
      loading={isFetchingCustomers}
      columns={columns}
      dataSource={customers}
    />
  );
}
