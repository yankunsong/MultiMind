import React, { useState } from 'react';
import { Row, Col } from 'antd';
import PersonaSelector from '../components/PersonaSelector';
import WordCloud from '../components/WordCloud';

const personas = [
  { 
    id: 1, 
    name: 'Emily Chen', 
    description: ['pro-innovation', 'tech-optimist', 'deregulation', 'market-driven', 'startup-friendly', 'crypto-enthusiast', 'disruptive-finance', 'global-perspective', 'risk-tolerant', 'future-focused']
  },
  { 
    id: 2, 
    name: 'Michael Johnson', 
    description: ['regulatory-compliance', 'risk-averse', 'consumer-protection', 'data-privacy', 'anti-money-laundering', 'financial-stability', 'traditional-banking', 'cautious-innovation', 'systemic-risk-aware', 'transparency-advocate']
  },
  { 
    id: 3, 
    name: 'Sarah Thompson', 
    description: ['financial-inclusion', 'ethical-banking', 'sustainable-finance', 'social-responsibility', 'community-focused', 'fair-lending', 'stakeholder-capitalism', 'impact-investing', 'financial-literacy', 'consumer-rights']
  },
  {
    id: 4,
    name: 'David Rodriguez',
    description: ['free-market', 'minimal-regulation', 'pro-business', 'tax-efficiency', 'economic-growth', 'competitive-markets', 'financial-innovation', 'global-trade', 'capital-formation', 'shareholder-value']
  }
];

function PersonaContainer() {
  const [selectedPersona, setSelectedPersona] = useState(null);

  const handlePersonaSelect = (personaId) => {
    const persona = personas.find(p => p.id === personaId);
    setSelectedPersona(persona);
  };

  return (
    <Row gutter={24}>
      <Col span={8}>
        <PersonaSelector 
          personas={personas} 
          onSelect={handlePersonaSelect} 
          selectedPersonaId={selectedPersona?.id}
        />
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