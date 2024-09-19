import React from 'react';
import { Typography } from 'antd';
import MultiMindReport from '../components/MultiMindReport';

const { Title } = Typography;

function MultiMindReportContainer({ showReport }) {
  return (
    <div>
      <Title level={4}>MultiMind Report</Title>
      {showReport && <MultiMindReport />} {/* Conditionally render the report */}
    </div>
  );
}

export default MultiMindReportContainer;