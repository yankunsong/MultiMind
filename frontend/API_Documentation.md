# API Documentation

## Endpoint: Generate MultiMind Report

### URL
`/api/generate-report`

### Method
`POST`

### Request Payload
The request payload should contain either a text string or a document file in DOCX or PDF format. Here are examples of both types of payloads:

#### Text String Payload
```json
{
  "text": "Increased funding for education leads to better societal outcomes. Tax increases may burden lower-income families. The impact of the policy depends on its implementation. Investment in renewable energy creates new job opportunities."
}
```

#### Document File Payload
The document file should be sent as form data. Here is an example using `curl`:

```sh
curl -X POST http://yourapiurl/api/generate-report \
  -F "file=@/path/to/your/document.pdf"
```

### Response
The response will contain the generated report data. Here is an example of the response:

```json
{
  "report": [
    {
      "key": 1,
      "volumeOfSupport": "High",
      "strength": "Strong",
      "position": "Pro",
      "argument": "Increased funding for education leads to better societal outcomes."
    },
    {
      "key": 2,
      "volumeOfSupport": "Medium",
      "strength": "Moderate",
      "position": "Con",
      "argument": "Tax increases may burden lower-income families."
    },
    {
      "key": 3,
      "volumeOfSupport": "Low",
      "strength": "Weak",
      "position": "Neutral",
      "argument": "The impact of the policy depends on its implementation."
    },
    {
      "key": 4,
      "volumeOfSupport": "High",
      "strength": "Strong",
      "position": "Pro",
      "argument": "Investment in renewable energy creates new job opportunities."
    }
  ]
}
```

### Example Usage
To generate the report, send a `POST` request to `/api/generate-report` with either the text string payload or the document file payload as shown above. The response will contain the report data which can be used to build the MultiMind report in the frontend.