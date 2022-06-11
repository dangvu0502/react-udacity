import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Divider, Image, Space, Row, Col, Radio } from "antd";
import { handleAddAnswerToQuestion } from "../actions/questions";

const PollDetails = ({ users, questions, handleAddAnswerToQuestion }) => {
  const { Meta } = Card;
  const { id } = useParams();
  const navigate = useNavigate();
  const question = questions[id];

  const author = users[question?.author];

  const [value, setValue] = useState("optionOne");

  useEffect(() => {
    if (!question) navigate("notfound");
  });

  const handleRadioGroupChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    handleAddAnswerToQuestion({ qid: question.id, answer: value });
    navigate(`/questions/${question.id}`);
  };

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Card
            type="inner"
            title={author?.name + " asks: "}
            bodyStyle={{ display: "flex", justifyContent: "start" }}
          >
            <Space size="middle">
              <Image src={author?.avatarURL} preview={false} width={100} />
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
                <Radio.Group onChange={handleRadioGroupChange} value={value}>
                  <Space direction="vertical">
                    <Radio value="optionOne">{question?.optionOne.text}</Radio>
                    <Radio value="optionTwo">{question?.optionTwo.text}</Radio>
                  </Space>
                </Radio.Group>
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

export default connect(
  ({ users, questions }) => ({
    users,
    questions,
  }),
  { handleAddAnswerToQuestion }
)(PollDetails);
