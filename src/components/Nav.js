import React from "react";
import { connect } from "react-redux";
import { LoginOutlined } from "@ant-design/icons";
import { setAuthUser } from "../actions/authUser";
import { Button, Avatar, Space, Row, Col, Menu, Layout, Divider } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({ authUser, setAuthUser }) => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthUser(null);
    navigate("/");
  };
  let activeStyle = {
    color: "#1890ff",
    fontSize: 16
  };

  const items = [
    {
      label: (
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      ),
      key: "Home",
    },
    {
      label: (
        <NavLink
          to="/NewPoll"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          New Poll
        </NavLink>
      ),
      key: "NewPoll",
    },
    {
      label: (
        <NavLink
          to="/LeaderBoard"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Leader Board
        </NavLink>
      ),
      key: "LeaderBoard",
    },
    {
      label: (
        <Row>
          <Col span={8} offset={24}></Col>
        </Row>
      ),
    },
  ];


  return (
    <Row>
      <Col span={18} offset={3}>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
          }}
        >
          <Menu
            selectedKeys={[]}
            mode="horizontal"
            items={items}
            style={{ width: 400, marginTop: 5, border: 0 }}
          />
          <Space align="baseline">
            {"Hello, " + authUser.name}
            <Avatar src={authUser.avatarURL} size={50} />
            <Button onClick={handleLogout} icon={<LoginOutlined />}>
              Logout
            </Button>
          </Space>
        </Header>
        <Divider style={{ marginTop: 0 }} />
      </Col>
    </Row>
  );
};

export default connect(
  ({ authUser }) => ({
    authUser,
  }),
  { setAuthUser }
)(Nav);
