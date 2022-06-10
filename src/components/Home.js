import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import PollPreview from "./PollPreview";

const Home = ({ questions }) => {
  const [activeTabKey, setActiveTabKey] = useState("unAnswered");

  const answeredQuestions = questions.answered;
  const unAnsweredQuestions = questions.unAnswered;

  const tabListNoTitle = [
    {
      key: "unAnswered",
      tab: "Unanswered",
    },
    {
      key: "answered",
      tab: "Answered",
    },
  ];

  const contentList = {
    unAnswered: unAnsweredQuestions.map((unAnsweredQuestion) => (
      <div key={unAnsweredQuestion.id}>
        <PollPreview answered={false} question={unAnsweredQuestion} />
        <br />
      </div>
    )),
    answered: answeredQuestions.map((answeredQuestion) => (
      <div key={answeredQuestion.id}>
        <PollPreview answered={true} question={answeredQuestion} />
        <br />
      </div>
    )),
  };

  const handleChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <Row>
      <Col span={10} offset={7}>
        <Card
          style={{
            width: "100%",
          }}
          headStyle={{
            display: "flex",
            justifyContent: "center",
          }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={(key) => {
            handleChange(key);
          }}
        >
          {contentList[activeTabKey]}
        </Card>
      </Col>
    </Row>
  );
};

export default connect(({ authUser, users, questions }) => {
  const answeredIds = Object.keys(users[authUser.id].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unAnswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  //console.log(answered);
  //console.log(unanswered);
  return {
    questions: {
      answered,
      unAnswered,
    },
  };
})(Home);
