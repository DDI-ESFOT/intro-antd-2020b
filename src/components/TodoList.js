/**
 * Created by chalosalvador on 18/2/21
 */
import React from "react";
import { Button, Space, Table, Tag, Typography } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

const Title = Typography.Title;

const TodoList = ({ todos }) => {
  console.log("todos", todos);

  const dataSource = todos.map((todo) => {
    return {
      key: todo.id,
      ...todo,
    };
  });

  console.log("dataSource", dataSource);

  const columns = [
    {
      title: "Descripción",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Estado",
      dataIndex: "completed",
      key: "completed",
      render: (value) => {
        console.log("value", value);
        return value ? (
          <Tag color="green">Completada</Tag>
        ) : (
          <Tag color="gold">Pendiente</Tag>
        );
      },
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      key: "actions",
      render: (value, row) => {
        return (
          <>
            <Space size="large">
              <Button type="primary" shape="circle" icon={<CheckOutlined />} />
              <Button danger shape="circle" icon={<DeleteOutlined />} />
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ marginTop: 20 }}>
      <Title>Lista de tareas</Title>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default TodoList;
