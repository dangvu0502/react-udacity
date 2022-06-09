import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import logo from "../logo.svg";
import { Card, Col, Row, Image, Select, Button, Form, Divider } from "antd";

const Login = ({ users, setAuthUser }) => {
  const [userID, setUserID] = useState(null);
  const { Meta } = Card;
  const { Option } = Select;


  const handleChange = (value) => {
    setUserID(value);
  };

  const handleSubmit = () => {
    const authUser = users.filter((user) => user.id === userID)[0];
    if (authUser)
      new Promise((res, rej) => {
        setTimeout(() => res(), 500);
      }).then(() => setAuthUser(authUser));
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <Card type="flex" align="center" bordered={true}>
          <Meta
            title="Welcome to the Would You Rather App!"
            description="Please sign in to continue"
          />
          <Divider />
          <Image src={logo} preview={false} />
          <Form onFinish={handleSubmit}>
            <Form.Item>
              <Select
                size={"large"}
                onChange={handleChange}
                style={{ width: "100%" }}
                required={true}
              >
                {users.map((user) => (
                  <Option key={user.id} value={user.id}>
                    {user.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default connect(
  ({ users }) => ({
    users: Object.values(users),
  }),
  { setAuthUser }
)(Login);
