import React, { useState } from 'react';
import { Layout, Typography, ConfigProvider, Row, Col } from 'antd';
import InputContainer from './containers/InputContainer';
import MultiMindReportContainer from './containers/MultiMindReportContainer';
import PersonaContainer from './containers/PersonaContainer';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [showReport, setShowReport] = useState(false); // State to control report visibility

  const handleShowReport = () => {
    setShowReport(true); // Show the report on submit
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0070b7', // Updated to FINRA's primary blue
          fontFamily: "'Open Sans', sans-serif",
        },
      }}
    >
      <Layout className="layout">
        <Header className="finra-primary-bg" style={{ padding: '0 50px' }}>
          <Title level={3} style={{ color: 'white', margin: '16px 0' }}>
            MultiMind Assistant
          </Title>
        </Header>
        <Content style={{ padding: '50px 50px', backgroundColor: '#f0f0f0' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <InputContainer onSubmit={handleShowReport} />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <PersonaContainer />
              </div>
            </Col>
            <Col span={24}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <MultiMindReportContainer showReport={showReport} /> {/* Pass showReport state */}
              </div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#0070b7', color: '#ffffff' }}>
          MultiMind AI ©{new Date().getFullYear()} Created by FINRA
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
