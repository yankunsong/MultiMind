import React from 'react';
import { Table } from 'antd';

function MultiMindReport({ report }) {
  const columns = [
    { title: 'Persona', dataIndex: 'persona', key: 'persona' },
    { title: 'Volume of Support', dataIndex: 'volumeOfSupport', key: 'volumeOfSupport' },
    { title: 'Strength', dataIndex: 'strength', key: 'strength' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'Argument', dataIndex: 'argument', key: 'argument' },
  ];

  if (!report) {
    return null; // Or you could return a loading indicator here
  }

  return (
    <Table columns={columns} dataSource={report} pagination={false} />
  );
}

export default MultiMindReport;