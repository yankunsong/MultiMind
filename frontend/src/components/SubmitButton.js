import React from 'react';
import { Button } from 'antd';

function SubmitButton({ onSubmit }) {
  return (
    <Button
      type="primary"
      onClick={onSubmit}
      className="finra-button"
      style={{ width: '100%' }}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;