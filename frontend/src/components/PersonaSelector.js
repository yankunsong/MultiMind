import React from 'react';
import { Radio, Space } from 'antd';

function PersonaSelector({ personas, onSelect, selectedPersonaId }) {
  return (
    <Radio.Group onChange={(e) => onSelect(e.target.value)} value={selectedPersonaId}>
      <Space direction="vertical">
        {personas.map(persona => (
          <Radio key={persona.id} value={persona.id} className="finra-text-secondary">
            {persona.name}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}

export default PersonaSelector;