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

const PollResult = ({ users, questions, authUser }) => {
  const { Meta } = Card;
  const { id } = useParams();
  const navigate = useNavigate();
  const question = questions[id];
  const author = users[question.author];
  const votes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const votedOption = users[authUser.id].answers[question.id];
  const optionOne = (
    <Card
      style={{
        color: "black",
        width: 300,
      }}
    >
      {question.optionOne.text}
      <Progress
        percent={Math.round((question.optionOne.votes.length / votes) * 100)}
      />
      <Statistic
        value={`${question.optionOne.votes.length} of ${votes} votes`}
      />
    </Card>
  );

  const optionTwo = (
    <Card
      style={{
        width: 300,
      }}
    >
      {question.optionTwo.text}
      <Progress
        percent={Math.round((question.optionTwo.votes.length / votes) * 100)}
      />
      <Statistic
        value={`${question.optionTwo.votes.length} of ${votes} votes`}
      />
    </Card>
  );
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
                {votedOption === "optionTwo" ? (
                  <>
                    <Badge>{optionOne}</Badge>
                    <Badge.Ribbon text="Your Vote" color="green">
                      {optionTwo}
                    </Badge.Ribbon>
                  </>
                ) : (
                  <>
                    <Badge.Ribbon text="Your Vote" color="green">
                      {optionOne}
                    </Badge.Ribbon>
                    <Badge>{optionTwo}</Badge>
                  </>
                )}
                <Button onClick={() => navigate("/")} block>
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

export default connect(({ users, questions, authUser }) => ({
  authUser,
  users,
  questions,
}))(PollResult);
