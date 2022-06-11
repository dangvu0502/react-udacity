import { Button, Card, Divider, Image, Space, Row, Col } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const PollPreview = ({ question, users, answered }) => {
  const { Meta } = Card;
  const navigate = useNavigate();

  const author = users[question.author];

  const handleClick = () => {
    navigate(`/questions/${question.id}`);
  };

  const description = (
    <div style={{ width: 250, marginLeft: 16 }}>
      <p>{`...${question.optionOne.text}...`}</p>
      {!answered ? (
        <Button onClick={handleClick} type="primary" block>
          View Poll
        </Button>
      ) : (
        <Button onClick={handleClick} type="primary" block>
          Result
        </Button>
      )}
    </div>
  );

  return (
    <Row>
      <Col span={20} offset={2}>
        <Card
          type="inner"
          title={author.name + " asks: "}
          bodyStyle={{ display: "flex", justifyContent: "start" }}
        >
          <Space size="middle">
            <Image src={author.avatarURL} preview={false} width={100} />
            <Divider type="vertical" style={{ height: 100 }} />
            <Meta title="Would you rather " description={description} />
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default connect(({ users }) => ({ users }))(PollPreview);
