import { Button, Card, Divider, Image, Space } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


const Poll = ({ question, users }) => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const author = users[question.author];

  const handleClick = () => {
    navigate(`/Poll/${question.id}`);
  };

  console.log(question);

  const description = (
    <div style={{ width: 250, marginLeft: 16 }}>
      <p>{`...${question.optionOne.text}...`}</p>
      <Button onClick={handleClick} type="primary" block>
        View Poll
      </Button>
    </div>
  );

  return (
    <>
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
    </>
  );
};

export default connect(({ users }) => ({ users }))(Poll);
