import React from 'react';
import { Typography, Divider, Space, Button } from 'antd';
import { PrinterOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

function ImprovementsContainer({ report }) {
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

  if (!report) return null;

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
        <Title level={2}>{report.title}</Title>
        <Divider />
        
        <Title level={3}>Executive Summary</Title>
        <Paragraph>{report.executiveSummary}</Paragraph>

        {report.improvements.map((improvement, index) => (
          <React.Fragment key={index}>
            <Title level={3}>{`${index + 1}. ${improvement.title}`}</Title>
            <Paragraph>
              <Text strong>Current State:</Text> {improvement.currentState}
            </Paragraph>
            <Paragraph>
              <Text strong>Proposed Improvement:</Text> {improvement.proposedImprovement}
              <ul>
                {improvement.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </Paragraph>
          </React.Fragment>
        ))}

        <Divider />

        <Title level={3}>Conclusion</Title>
        <Paragraph>{report.conclusion}</Paragraph>

        <Paragraph>
          <Text strong>Next Steps:</Text> {report.nextSteps}
        </Paragraph>
      </div>
    </div>
  );
}

export default ImprovementsContainer;