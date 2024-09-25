## Submit API

This API is used to submit a text for analysis and receive a comprehensive report.

### Endpoint

POST /api/submit

### Request Payload

```json
{
  "text": "The proposed financial regulations aim to increase transparency and reduce systemic risk in the banking sector. However, some argue that these regulations may stifle innovation and increase compliance costs for smaller institutions."
}
```

### Response

```json
{
  "personas": {
    "Tech Innovators": [
      {
        "id": 1,
        "name": "Emily Chen",
        "description": [
          "pro-innovation",
          "tech-optimist",
          "deregulation",
          "market-driven",
          "startup-friendly",
          "crypto-enthusiast",
          "disruptive-finance",
          "global-perspective",
          "risk-tolerant",
          "future-focused"
        ]
      },
      {
        "id": 5,
        "name": "John Doe",
        "description": [
          "AI-enthusiast",
          "blockchain-advocate",
          "automation",
          "digital-transformation",
          "tech-savvy",
          "innovation-driven",
          "future-oriented",
          "risk-taker",
          "entrepreneurial",
          "visionary"
        ]
      }
    ],
    "Regulators": [
      {
        "id": 2,
        "name": "Michael Johnson",
        "description": [
          "regulatory-compliance",
          "risk-averse",
          "consumer-protection",
          "data-privacy",
          "anti-money-laundering",
          "financial-stability",
          "traditional-banking",
          "cautious-innovation",
          "systemic-risk-aware",
          "transparency-advocate"
        ]
      },
      {
        "id": 6,
        "name": "Jane Smith",
        "description": [
          "policy-maker",
          "regulation-expert",
          "compliance-focused",
          "risk-management",
          "consumer-rights",
          "data-security",
          "financial-regulation",
          "systemic-stability",
          "transparency",
          "accountability"
        ]
      }
    ],
    "Ethical Bankers": [
      {
        "id": 3,
        "name": "Sarah Thompson",
        "description": [
          "financial-inclusion",
          "ethical-banking",
          "sustainable-finance",
          "social-responsibility",
          "community-focused",
          "fair-lending",
          "stakeholder-capitalism",
          "impact-investing",
          "financial-literacy",
          "consumer-rights"
        ]
      },
      {
        "id": 7,
        "name": "Alice Brown",
        "description": [
          "social-impact",
          "sustainable-investing",
          "ethical-finance",
          "community-development",
          "responsible-lending",
          "financial-education",
          "inclusive-banking",
          "stakeholder-value",
          "green-finance",
          "consumer-protection"
        ]
      }
    ],
    "Free Market Advocates": [
      {
        "id": 4,
        "name": "David Rodriguez",
        "description": [
          "free-market",
          "minimal-regulation",
          "pro-business",
          "tax-efficiency",
          "economic-growth",
          "competitive-markets",
          "financial-innovation",
          "global-trade",
          "capital-formation",
          "shareholder-value"
        ]
      },
      {
        "id": 8,
        "name": "Bob White",
        "description": [
          "market-liberal",
          "deregulation",
          "business-friendly",
          "economic-expansion",
          "tax-reform",
          "trade-liberalization",
          "investment-promotion",
          "entrepreneurship",
          "capital-growth",
          "profit-maximization"
        ]
      }
    ]
  },
  "report": [
    {
      "key": 1,
      "volumeOfSupport": "High",
      "strength": "Strong",
      "position": "Pro",
      "argument": "Increased transparency in financial regulations leads to better market stability."
    },
    {
      "key": 2,
      "volumeOfSupport": "Medium",
      "strength": "Moderate",
      "position": "Con",
      "argument": "Stringent regulations may increase compliance costs for smaller institutions."
    },
    {
      "key": 3,
      "volumeOfSupport": "Low",
      "strength": "Weak",
      "position": "Neutral",
      "argument": "The impact of the regulations depends on their specific implementation."
    },
    {
      "key": 4,
      "volumeOfSupport": "High",
      "strength": "Strong",
      "position": "Pro",
      "argument": "Reducing systemic risk is crucial for long-term financial sector health."
    }
  ],
  "improvementReport": {
    "title": "Potential Improvements Report",
    "executiveSummary": "This report outlines key areas for potential improvements in our financial regulatory processes. Based on comprehensive analysis and stakeholder feedback, we have identified several opportunities to enhance efficiency, transparency, and effectiveness in our operations.",
    "improvements": [
      {
        "title": "Streamlining Compliance Procedures",
        "currentState": "Our compliance procedures, while thorough, have been noted to be time-consuming and sometimes redundant.",
        "proposedImprovement": "Implement an AI-driven compliance check system that can:",
        "details": [
          "Automate routine compliance checks",
          "Flag high-risk cases for human review",
          "Reduce processing time by an estimated 40%"
        ]
      },
      {
        "title": "Enhancing Data Analytics Capabilities",
        "currentState": "Our data analytics tools are not fully utilizing the wealth of information at our disposal.",
        "proposedImprovement": "Invest in advanced data analytics platforms to:",
        "details": [
          "Identify market trends and potential risks more accurately",
          "Provide real-time insights to regulators and stakeholders",
          "Enhance predictive modeling for market behavior"
        ]
      },
      {
        "title": "Improving Stakeholder Communication",
        "currentState": "Communication with regulated entities and the public can sometimes be unclear or delayed.",
        "proposedImprovement": "Develop a comprehensive communication strategy that includes:",
        "details": [
          "A user-friendly portal for real-time updates and guidance",
          "Regular webinars and interactive sessions for clarifications",
          "Simplified, plain-language explanations of complex regulations"
        ]
      }
    ],
    "conclusion": "Implementing these improvements will significantly enhance our regulatory effectiveness, reduce burden on compliant entities, and improve overall market stability. We recommend a phased approach to implementation, starting with the streamlining of compliance procedures.",
    "nextSteps": "Detailed project plans for each improvement area will be developed, including timelines, resource requirements, and key performance indicators to measure success."
  }
}
```

## Chatroom API

This API is used to send a user message and receive responses from selected personas.

### Endpoint

POST /api/chat

### Request Payload

```json
{
  "sessionID": 12345,
  "userMessage": "What are your thoughts on the proposed financial regulations?",
  "chatWith": ["Emily Chen", "Michael Johnson", "Sarah Thompson"]
}
```

Note: sessionID is optional. If not provided, a new session will be created.

### Response

```json
{
  "responses": [
    {
      "sender": "Emily Chen",
      "content": "Emily Chen's response.",
      "isUser": false,
      "color": "#f56a00"
    },
    {
      "sender": "Michael Johnson",
      "content": "Michael Johnson's response.",
      "isUser": false,
      "color": "#7265e6"
    },
    {
      "sender": "Sarah Thompson",
      "content": "Sarah Thompson's response.",
      "isUser": false,
      "color": "#ffbf00"
    }
  ]
}
```
