import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function FileUpload() {
  return (
    <Upload>
      <Button icon={<UploadOutlined />}>Upload File</Button>
    </Upload>
  );
}

export default FileUpload;