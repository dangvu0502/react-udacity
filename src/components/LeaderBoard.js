import React from "react";
import { connect } from "react-redux";
import { Card, Divider, Row, Col, Image, Badge, List } from "antd";

const LeaderBoard = ({ users }) => {
  const { Meta } = Card;

  const leaderboard = Object.values(users).sort(
    (user1, user2) =>
      Object.entries(user2.answers).length +
      user2.questions.length -
      Object.entries(user1.answers).length -
      user1.questions.length
  );
  console.log(leaderboard[2]);

  return (
    <>
      <Row>
        <Col span={10} offset={7}>
          {/* -------------------------- TOP 1 -------------------- */}
          <Badge.Ribbon text="Top 1" placement="start" color="gold">
            <Card hoverable={true}>
              <Row gutter={[32, 32]}>
                <Col span={6} style={{ margin: "auto" }}>
                  <Image
                    src={leaderboard[0].avatarURL}
                    preview={false}
                    width={120}
                  />
                </Col>
                <Divider type="vertical" style={{ height: 150 }} />
                <Col span={8} style={{ margin: "auto" }}>
                  <Meta
                    title={leaderboard[0].name}
                    style={{ marginBottom: 24 }}
                  />

                  <List>
                    <List.Item>
                      <div>Answered questions:</div>
                      <div>{Object.entries(leaderboard[0].answers).length}</div>
                    </List.Item>
                    <List.Item>
                      <div>Created questions:</div>
                      <div>{leaderboard[0].questions.length}</div>
                    </List.Item>
                  </List>
                </Col>
                <Divider type="vertical" style={{ height: 150 }} />
                <Col
                  span={8}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <Card
                    type="inner"
                    title="Score"
                    style={{ textAlign: "center" }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#52c41a",
                        color: "white",
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        fontSize: "32px",
                        margin: "auto",
                      }}
                    >
                      {Object.entries(leaderboard[0].answers).length +
                        leaderboard[0].questions.length}
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Badge.Ribbon>
          <br />
          {/* -------------------------- TOP 2 -------------------- */}
          <Badge.Ribbon text="Top 2" placement="start" color="silver">
            <Card hoverable={true}>
              <Row gutter={[32, 32]}>
                <Col span={6} style={{ margin: "auto" }}>
                  <Image
                    src={leaderboard[1].avatarURL}
                    preview={false}
                    width={120}
                  />
                </Col>
                <Divider type="vertical" style={{ height: 150 }} />
                <Col span={8} style={{ margin: "auto" }}>
                  <Meta
                    title={leaderboard[1].name}
                    style={{ marginBottom: 24 }}
                  />

                  <List>
                    <List.Item>
                      <div>Answered questions:</div>
                      <div>{Object.entries(leaderboard[1].answers).length}</div>
                    </List.Item>
                    <List.Item>
                      <div>Created questions:</div>
                      <div>{leaderboard[1].questions.length}</div>
                    </List.Item>
                  </List>
                </Col>
                <Divider type="vertical" style={{ height: 150 }} />
                <Col
                  span={8}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <Card
                    type="inner"
                    title="Score"
                    style={{ textAlign: "center" }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#52c41a",
                        color: "white",
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        fontSize: "32px",
                        margin: "auto",
                      }}
                    >
                      {Object.entries(leaderboard[1].answers).length +
                        leaderboard[1].questions.length}
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Badge.Ribbon>
          <br />
          {/* -------------------------- TOP 3 -------------------- */}
          <Badge.Ribbon text="Top 3" placement="start" color="brown">
            <Card hoverable={true}>
              <Row gutter={[32, 32]}>
                <Col span={6} style={{ margin: "auto" }}>
                  <Image
                    src={leaderboard[2].avatarURL}
                    preview={false}
                    width={120}
                  />
                </Col>
                <Divider type="vertical" style={{ height: 150 }} />
                <Col span={8} style={{ margin: "auto" }}>
                  <Meta
                    title={leaderboard[2].name}
                    style={{ marginBottom: 24 }}
                  />

                  <List>
                    <List.Item>
                      <div>Answered questions:</div>
                      <div>{Object.entries(leaderboard[2].answers).length}</div>
                    </List.Item>
                    <List.Item>
                      <div>Created questions:</div>
                      <div>{leaderboard[2].questions.length}</div>
                    </List.Item>
                  </List>
                </Col>
                <Divider type="vertical" style={{ height: 150 }} />
                <Col
                  span={8}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <Card
                    type="inner"
                    title="Score"
                    style={{ textAlign: "center" }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#52c41a",
                        color: "white",
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        fontSize: "32px",
                        margin: "auto",
                      }}
                    >
                      {Object.entries(leaderboard[2].answers).length +
                        leaderboard[2].questions.length}
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Badge.Ribbon>
          <br />
        </Col>
      </Row>
    </>
  );
};

export default connect(({ users }) => ({ users }))(LeaderBoard);
