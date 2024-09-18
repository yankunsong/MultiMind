import React from 'react';
import { Layout, Typography, ConfigProvider } from 'antd';
import TextInput from './components/TextInput';
import FileUpload from './components/FileUpload';
import SubmitButton from './components/SubmitButton';
import './App.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const handleSubmit = (text, file) => {
    // TODO: Implement submission logic
    console.log('Submitting:', { text, file });
  };

  return (
    <ConfigProvider>
      <Layout className="layout">
        <Header>
          <Title level={3} style={{ color: 'white', margin: '16px 0' }}>
            MultiMind AI
          </Title>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '20px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <TextInput />
            <FileUpload />
            <SubmitButton onSubmit={handleSubmit} />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
