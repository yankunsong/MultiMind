import React from 'react';
import { Button } from 'antd';
import { mockApiRequest } from '../utils/mockApi';

function SubmitButton({ onSubmit, loading, setLoading }) {
  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await mockApiRequest();
      if (response && response.personas && response.report) {
        console.log('Data received:', response);
        if (onSubmit) {
          onSubmit(response);
        }
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="primary"
      onClick={handleClick}
      className="finra-button"
      style={{ width: '100%' }}
      loading={loading}
    >
      {loading ? 'Analyzing...' : 'Submit'}
    </Button>
  );
}

export default SubmitButton;