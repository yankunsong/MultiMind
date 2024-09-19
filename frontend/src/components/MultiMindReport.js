import React from 'react';
import { Table } from 'antd';

function MultiMindReport() {
  const columns = [
    { title: 'Volume of Support', dataIndex: 'volumeOfSupport', key: 'volumeOfSupport' },
    { title: 'Strength', dataIndex: 'strength', key: 'strength' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'Argument', dataIndex: 'argument', key: 'argument' },
  ];

  const data = [
    {
      key: 1,
      volumeOfSupport: 'High',
      strength: 'Strong',
      position: 'Pro',
      argument: 'Increased funding for education leads to better societal outcomes.',
    },
    {
      key: 2,
      volumeOfSupport: 'Medium',
      strength: 'Moderate',
      position: 'Con',
      argument: 'Tax increases may burden lower-income families.',
    },
    {
      key: 3,
      volumeOfSupport: 'Low',
      strength: 'Weak',
      position: 'Neutral',
      argument: 'The impact of the policy depends on its implementation.',
    },
    {
      key: 4,
      volumeOfSupport: 'High',
      strength: 'Strong',
      position: 'Pro',
      argument: 'Investment in renewable energy creates new job opportunities.',
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  );
}

export default MultiMindReport;