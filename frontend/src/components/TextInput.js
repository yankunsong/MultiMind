import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function TextInput({ value, onChange }) {
  return (
    <TextArea
      rows={4}
      placeholder="Paste your text here"
      style={{ marginBottom: '20px', width: '100%' }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default TextInput;