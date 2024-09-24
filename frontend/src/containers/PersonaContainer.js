import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import PersonaSelector from '../components/PersonaSelector';
import WordCloud from '../components/WordCloud';

function PersonaContainer({ personas }) {
  const [selectedPersona, setSelectedPersona] = useState(null);

  useEffect(() => {
    console.log('Personas in PersonaContainer:', personas); // Add this log
  }, [personas]);

  const handlePersonaSelect = (personaId) => {
    const persona = Object.values(personas || {}).flat().find(p => p.id === personaId);
    setSelectedPersona(persona);
  };

  if (!personas) {
    return null; // Don't render anything if personas is null
  }

  return (
    <Row gutter={24}>
      <Col span={8}>
        {Object.entries(personas).map(([type, personaList]) => (
          <Card title={type} bordered={false} key={type} style={{ marginBottom: '16px' }}>
            <PersonaSelector 
              personas={personaList} 
              onSelect={handlePersonaSelect} 
              selectedPersonaId={selectedPersona?.id}
            />
          </Card>
        ))}
      </Col>
      <Col span={16}>
        {selectedPersona && (
          <WordCloud words={selectedPersona.description} />
        )}
      </Col>
    </Row>
  );
}

export default PersonaContainer;