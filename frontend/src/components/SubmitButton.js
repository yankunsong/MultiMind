import React from 'react';
import { Button } from 'antd';
import { mockApiRequest } from '../utils/mockApi'; // We'll create this file

function SubmitButton({ onSubmit }) {
  const handleClick = async () => {
    try {
      const response = await mockApiRequest();
      if (response && response.personas) {
        console.log('Personas data received:', response.personas); // Add this log
        if (onSubmit) {
          onSubmit(response.personas);
        }
      }
    } catch (error) {
      console.error('Error submitting data:', error);
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