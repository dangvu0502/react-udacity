import { Button, Card, Divider, Image, Space, Row, Col, Radio } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

const PollDetails = ({ users, questions }) => {
  const { Meta } = Card;
  const { id } = useParams();
  const question = questions[id];

  const author = users[question.author];

  const handleClick = () => {};

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Card
            type="inner"
            title={author.name + " asks: "}
            bodyStyle={{ display: "flex", justifyContent: "start" }}
          >
            <Space size="middle">
              <Image src={author.avatarURL} preview={false} width={100} />
              <Divider type="vertical" style={{ height: 100 }} />
              <Space
                direction="vertical"
                style={{ width: 250, marginLeft: 16 }}
              >
                <Meta
                  title="Would you rather... "
                  style={{
                    marginBottom: 8,
                  }}
                />
                <Radio value={question.optionOne.text}>
                  {question.optionOne.text}
                </Radio>
                <Radio value={question.optionTwo.text}>
                  {question.optionTwo.text}
                </Radio>
                <Button
                  onClick={handleClick}
                  type="primary"
                  block
                  style={{
                    marginTop: 8,
                  }}
                >
                  Submit
                </Button>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default connect(({ users, questions }) => ({ users, questions }))(
  PollDetails
);
