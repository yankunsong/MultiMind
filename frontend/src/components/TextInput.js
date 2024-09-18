import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function TextInput() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TextArea
      rows={4}
      placeholder="Paste your text here"
      style={{ marginBottom: '20px', width: '100%' }}
      value={text}
      onChange={handleTextChange}
    />
  );
}

export default TextInput;