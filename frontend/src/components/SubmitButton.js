import React from 'react';
import { Button } from 'antd';

function SubmitButton({ onSubmit }) {
  return (
    <Button
      type="primary"
      onClick={onSubmit}
      style={{ marginTop: '20px' }}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;