import React from 'react';
import { Typography, Divider, Space, Button } from 'antd';
import { PrinterOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

function ImprovementsContainer() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('report-content').innerText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "potential_improvements_report.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Space style={{ marginBottom: '20px' }}>
        <Button icon={<PrinterOutlined />} onClick={handlePrint}>
          Print Report
        </Button>
        <Button icon={<DownloadOutlined />} onClick={handleDownload}>
          Download Report
        </Button>
      </Space>

      <div id="report-content">
        <Title level={2}>Potential Improvements Report</Title>
        <Divider />
        
        <Title level={3}>Executive Summary</Title>
        <Paragraph>
          This report outlines key areas for potential improvements in our financial regulatory processes. 
          Based on comprehensive analysis and stakeholder feedback, we have identified several opportunities 
          to enhance efficiency, transparency, and effectiveness in our operations.
        </Paragraph>

        <Title level={3}>1. Streamlining Compliance Procedures</Title>
        <Paragraph>
          <Text strong>Current State:</Text> Our compliance procedures, while thorough, have been noted to be time-consuming and sometimes redundant.
        </Paragraph>
        <Paragraph>
          <Text strong>Proposed Improvement:</Text> Implement an AI-driven compliance check system that can:
          <ul>
            <li>Automate routine compliance checks</li>
            <li>Flag high-risk cases for human review</li>
            <li>Reduce processing time by an estimated 40%</li>
          </ul>
        </Paragraph>

        <Title level={3}>2. Enhancing Data Analytics Capabilities</Title>
        <Paragraph>
          <Text strong>Current State:</Text> Our data analytics tools are not fully utilizing the wealth of information at our disposal.
        </Paragraph>
        <Paragraph>
          <Text strong>Proposed Improvement:</Text> Invest in advanced data analytics platforms to:
          <ul>
            <li>Identify market trends and potential risks more accurately</li>
            <li>Provide real-time insights to regulators and stakeholders</li>
            <li>Enhance predictive modeling for market behavior</li>
          </ul>
        </Paragraph>

        <Title level={3}>3. Improving Stakeholder Communication</Title>
        <Paragraph>
          <Text strong>Current State:</Text> Communication with regulated entities and the public can sometimes be unclear or delayed.
        </Paragraph>
        <Paragraph>
          <Text strong>Proposed Improvement:</Text> Develop a comprehensive communication strategy that includes:
          <ul>
            <li>A user-friendly portal for real-time updates and guidance</li>
            <li>Regular webinars and interactive sessions for clarifications</li>
            <li>Simplified, plain-language explanations of complex regulations</li>
          </ul>
        </Paragraph>

        <Divider />

        <Title level={3}>Conclusion</Title>
        <Paragraph>
          Implementing these improvements will significantly enhance our regulatory effectiveness, 
          reduce burden on compliant entities, and improve overall market stability. We recommend 
          a phased approach to implementation, starting with the streamlining of compliance procedures.
        </Paragraph>

        <Paragraph>
          <Text strong>Next Steps:</Text> Detailed project plans for each improvement area will be developed, 
          including timelines, resource requirements, and key performance indicators to measure success.
        </Paragraph>
      </div>
    </div>
  );
}

export default ImprovementsContainer;