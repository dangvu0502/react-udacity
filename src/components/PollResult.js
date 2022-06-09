import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Divider,
  Image,
  Space,
  Row,
  Col,
  Badge,
  Statistic,
  Progress,
  Button,
} from "antd";

const PollResult = ({ users, questions }) => {
  const { Meta } = Card;
  const { id } = useParams();
  const navigate = useNavigate();
  const question = questions[id];

  const author = users[question.author];

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
              <Divider type="vertical" style={{ height: 300 }} />
              <Space
                direction="vertical"
                style={{ width: 300, marginLeft: 16 }}
              >
                <Meta
                  title="Results: "
                  description="Would you rather"
                  style={{
                    marginBottom: 8,
                  }}
                />
                <Badge>
                  <Card
                    style={{
                      color: "black",
                      width: 300,
                    }}
                  >
                    {question.optionOne.text}
                    <Progress percent={0} />
                    <Statistic value={"0 of 3 votes"} />
                  </Card>
                </Badge>
                <Badge.Ribbon text="Your Vote" color="green">
                  <Card
                    style={{
                      width: 300,
                    }}
                  >
                    {question.optionTwo.text}
                    <Progress percent={100} />
                    <Statistic value={"3 of 3 votes"} />
                  </Card>
                </Badge.Ribbon>
                <Button onClick={() => navigate(-1)} block>
                  Back
                </Button>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default connect(({ users, questions }) => ({
  users,
  questions,
}))(PollResult);
