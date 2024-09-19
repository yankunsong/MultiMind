import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

// Define an array of colors
const colors = ['#1890ff', '#13c2c2', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#eb2f96'];

function WordCloud({ words }) {
  // This is a simple representation of a word cloud
  // You might want to use a more sophisticated word cloud library in a real application
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
      {words.map((word, index) => (
        <Text 
          key={index} 
          style={{ 
            fontSize: `${Math.random() * 16 + 12}px`,
            color: colors[Math.floor(Math.random() * colors.length)],
            padding: '5px',
            display: 'inline-block'
          }}
        >
          {word}
        </Text>
      ))}
    </div>
  );
}

export default WordCloud;