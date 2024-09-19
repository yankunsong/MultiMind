import React, { useState } from 'react';
import { Space } from 'antd';
import TextInput from '../components/TextInput';
import FileUpload from '../components/FileUpload';
import SubmitButton from '../components/SubmitButton';

function InputContainer({ onSubmit }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleFileChange = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      setFile(info.file);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting:', { text, file });
    onSubmit(); // Call the onSubmit prop to show the report
    // TODO: Implement submission logic
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <TextInput value={text} onChange={handleTextChange} />
      <FileUpload onChange={handleFileChange} />
      <SubmitButton onSubmit={handleSubmit} />
    </Space>
  );
}

export default InputContainer;