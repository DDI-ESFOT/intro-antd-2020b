/**
 * Created by chalosalvador on 18/2/21
 */
import React from "react";
import { Descriptions } from "antd";

const UserInfo = ({ user }) => {
  return (
    <div>
      <Descriptions title="Información del usuario" bordered>
        <Descriptions.Item label="Nombre">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Web">{user.website}</Descriptions.Item>
        <Descriptions.Item label="Teléfono">{user.phone}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default UserInfo;
