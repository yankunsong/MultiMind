import React, { useState } from "react";
import { Layout, Typography, ConfigProvider, Tabs, Row, Col } from "antd";
import InputContainer from "./containers/InputContainer";
import MultiMindReportContainer from "./containers/MultiMindReportContainer";
import PersonaContainer from "./containers/PersonaContainer";
import ChatroomContainer from "./containers/ChatroomContainer";
import ImprovementsContainer from "./containers/ImprovementsContainer";
import WordCloud from "./components/WordCloud";
import "./App.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

function App() {
  const [showReport, setShowReport] = useState(false);

  const handleShowReport = () => {
    setShowReport(true);
  };

  // Sample words for the WordCloud
  const sampleWords = [
    "innovation",
    "regulation",
    "fintech",
    "compliance",
    "blockchain",
    "cryptocurrency",
    "AI",
    "machine learning",
    "data analytics",
    "cybersecurity",
    "risk management",
    "digital transformation",
    "open banking",
    "regtech",
    "financial inclusion",
    "peer-to-peer lending",
    "robo-advisors",
    "API",
    "cloud computing",
    "big data",
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0070b7",
          fontFamily: "'Open Sans', sans-serif",
        },
        components: {
          Tabs: {
            titleFontSize: 16,
            inkBarColor: "#0070b7",
          },
        },
      }}
    >
      <Layout className="layout">
        <Header className="finra-primary-bg" style={{ padding: "0 50px" }}>
          <Title level={3} style={{ color: "white", margin: "16px 0" }}>
            MultiMind Insights
          </Title>
        </Header>
        <Content style={{ padding: "50px 50px", backgroundColor: "#f0f0f0" }}>
          <Tabs 
            defaultActiveKey="1"
            className="custom-tabs"
          >
            <TabPane tab="File Submission" key="1">
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <InputContainer onSubmit={handleShowReport} />
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: 24,
                  minHeight: 280,
                  marginTop: 24,
                }}
              >
                <MultiMindReportContainer showReport={showReport} />
              </div>
            </TabPane>
            <TabPane tab="Live Discussion" key="2">
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <div
                    style={{ background: "#fff", padding: 24, minHeight: 280 }}
                  >
                    <PersonaContainer />
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div
                    style={{ background: "#fff", padding: 24, minHeight: 280 }}
                  >
                    <ChatroomContainer />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Potential Improvements" key="3">
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <ImprovementsContainer />
              </div>
            </TabPane>
          </Tabs>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#0070b7",
            color: "#ffffff",
          }}
        >
          MultiMind AI ©{new Date().getFullYear()} Created by MMI team
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
