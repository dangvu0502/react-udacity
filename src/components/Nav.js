import React from "react";
import { connect } from "react-redux";
import { LoginOutlined } from "@ant-design/icons";
import { setAuthUser } from "../actions/authUser";
import { Button, Tabs, Avatar, Space } from "antd";
import Home from "./Home";

const Nav = ({ users, authUser, setAuthUser }) => {
  const { TabPane } = Tabs;

  const handleLogout = () => {
    setAuthUser(null);
  };

  const avatarAndLogout = (
    <Space className="tabs-extra-content" align="baseline">
      {"Hello, " + authUser.name}
      <Avatar src={authUser.avatarURL} size={50} />
      <Button danger onClick={handleLogout} icon={<LoginOutlined />}>
        Logout
      </Button>
    </Space>
  );

  return (
    <>
      <Tabs
        defaultActiveKey="Home"
        tabBarExtraContent={avatarAndLogout}
        tabBarStyle={{ height: 80 }}
      >
        <TabPane tab="Home" key="Home">
          <Home />
        </TabPane>
        <TabPane tab="New Poll" key="NewPoll">
          Content of New Poll
        </TabPane>
        <TabPane tab="Leader Board" key="LeaderBoard">
          Content of Leader Board
        </TabPane>
      </Tabs>
    </>
  );
};

export default connect(
  ({ users, authUser }) => ({
    authUser,
    users,
  }),
  { setAuthUser }
)(Nav);
