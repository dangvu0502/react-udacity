import React, { useState } from "react";
import { connect } from "react-redux";
import { LoginOutlined } from "@ant-design/icons";
import { setAuthUser } from "../actions/authUser";
import { Button, Avatar, Space, Row, Col, Menu, Layout, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ authUser, setAuthUser }) => {
  const { Header } = Layout;
  const [current, setCurrent] = useState("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthUser(null);
    navigate("/");
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/NewPoll">New Poll</Link>,
      key: "NewPoll",
    },
    {
      label: <Link to="/LeaderBoard">Leader Board</Link>,
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
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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
            onClick={onClick}
            selectedKeys={[current]}
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
