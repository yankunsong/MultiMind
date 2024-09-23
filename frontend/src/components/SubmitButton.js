import React from 'react';
import { Button } from 'antd';

function SubmitButton({ onSubmit }) {
  const handleClick = () => {
    // Dispatch a custom 'submit' event
    window.dispatchEvent(new Event('submit'));
    // Call the original onSubmit function if provided
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Button
      type="primary"
      onClick={handleClick}
      className="finra-button"
      style={{ width: '100%' }}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;