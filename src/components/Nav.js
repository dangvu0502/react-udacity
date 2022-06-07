import React from "react";
import { connect } from "react-redux";
import { LoginOutlined } from "@ant-design/icons";

import { Button, Tabs, Avatar, Row, Col, Space } from "antd";

const { TabPane } = Tabs;

const Nav = ({ users, authUser }) => {
  const operations = (
    <Space className="tabs-extra-content" align="baseline" size="middle">
      <Avatar src={authUser.avatarURL} size={50} />
      {"Hello, " + authUser.name}
      <Button icon={<LoginOutlined />}>Logout</Button>
    </Space>
  );

  return (
    <>
      <Tabs
        defaultActiveKey="Home"
        tabBarExtraContent={operations}
        centered={true}
        tabBarStyle={{ height: 100 }}
      >
        <TabPane tab="Home" key="Home">
          Content of Home
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

export default connect(({ users, authUser }) => ({
  authUser,
  users,
}))(Nav);
