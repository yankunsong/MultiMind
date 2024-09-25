import React, { useState } from 'react';
import { Space } from 'antd';
import TextInput from '../components/TextInput';
import FileUpload from '../components/FileUpload';
import SubmitButton from '../components/SubmitButton';

function InputContainer({ onSubmit }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleFileChange = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      setFile(info.file);
    }
  };

  const handleSubmit = (data) => {
    console.log('Submitting:', { text, file });
    console.log('Data received in InputContainer:', data);
    onSubmit(data);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <TextInput value={text} onChange={handleTextChange} disabled={loading} />
      <FileUpload onChange={handleFileChange} disabled={loading} />
      <SubmitButton onSubmit={handleSubmit} loading={loading} setLoading={setLoading} />
    </Space>
  );
}

export default InputContainer;