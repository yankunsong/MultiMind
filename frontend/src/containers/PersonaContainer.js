import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import PersonaSelector from '../components/PersonaSelector';
import WordCloud from '../components/WordCloud';
import liveDiscussionData from '../data/live_discussion.json';

function PersonaContainer() {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [personaTypes, setPersonaTypes] = useState(null);

  useEffect(() => {
    // This effect will run once when the component mounts
    // In a real scenario, you'd listen for a global state change or use a state management solution
    const handleSubmit = () => {
      setPersonaTypes(liveDiscussionData.personaTypes);
    };

    // Add event listener for custom 'submit' event
    window.addEventListener('submit', handleSubmit);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('submit', handleSubmit);
    };
  }, []);

  const handlePersonaSelect = (personaId) => {
    const persona = Object.values(personaTypes || {}).flat().find(p => p.id === personaId);
    setSelectedPersona(persona);
  };

  if (!personaTypes) {
    return null; // Don't render anything if data not loaded
  }

  return (
    <Row gutter={24}>
      <Col span={8}>
        {Object.entries(personaTypes).map(([type, personas]) => (
          <Card title={type} bordered={false} key={type} style={{ marginBottom: '16px' }}>
            <PersonaSelector 
              personas={personas} 
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