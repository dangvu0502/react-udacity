import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  Divider,
  Space,
  Row,
  Col,
  Input,
  Form,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ handleAddQuestion }) => {
  const { Meta } = Card;
  const key = "updatable";
  const navigate = useNavigate();
  const onFinish = (value) => {
    const { optionOne, optionTwo } = value;
    handleAddQuestion({ optionOne, optionTwo });
    message.loading({
      content: "Loading...",
      key,
      duration: 6,
    });
    setTimeout(() => {
      message.success({
        content: "Submit success",
        key,
        duration: 2,
      });
      navigate("/");
    }, 1000);
  };

  const onFinishFailed = () => {
    message.error({
      content: "Submit failed!",
      duration: 2,
    });
  };

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Card
            title="Create a New Poll"
            type="inner"
            description="Complete the question"
          >
            <Space
              direction="vertical"
              style={{ width: 250, marginBottom: 16 }}
            >
              <p>Complete the question: </p>
              <Meta title="Would you rather... " />
            </Space>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item name="optionOne" rules={[{ required: true }]}>
                <Input placeholder="Enter option one..." size="large" />
              </Form.Item>
              <Divider style={{ marginTop: -8 }}>OR</Divider>
              <Form.Item name="optionTwo" rules={[{ required: true }]}>
                <Input placeholder="Enter option two..." size="large" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default connect(null, { handleAddQuestion })(NewPoll);
