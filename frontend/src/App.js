import React from 'react';
import { Layout, Typography, ConfigProvider, Row, Col } from 'antd';
import InputContainer from './containers/InputContainer';
import MultiMindReportContainer from './containers/MultiMindReportContainer';
import './App.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <ConfigProvider>
      <Layout className="layout">
        <Header>
          <Title level={3} style={{ color: 'white', margin: '16px 0' }}>
            MultiMind AI
          </Title>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '20px' }}>
          <Row gutter={24}>
            <Col span={12}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <InputContainer />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <MultiMindReportContainer />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
