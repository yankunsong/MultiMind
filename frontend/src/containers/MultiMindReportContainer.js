import React from 'react';
import MultiMindReport from '../components/MultiMindReport';

function MultiMindReportContainer({ report }) {
  if (!report) {
    return null;
  }

  return <MultiMindReport report={report} />;
}

export default MultiMindReportContainer;