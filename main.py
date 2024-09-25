from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import json

app = FastAPI()

# Load hardcoded data
with open('personas.json', 'r') as f:
    personas_data = json.load(f)

with open('report.json', 'r') as f:
    report_data = json.load(f)

with open('improvements_report.json', 'r') as f:
    improvements_report_data = json.load(f)

# Define request and response models
class SubmitRequest(BaseModel):
    text: str

class ChatRequest(BaseModel):
    sessionID: Optional[int] = None
    userMessage: str
    chatWith: List[str]

class ChatResponse(BaseModel):
    sender: str
    content: str
    isUser: bool
    color: str

# Submit API endpoint
@app.post("/api/submit")
async def submit(request: SubmitRequest):
    # In a real application, you would process the text here
    # For now, we'll just return the hardcoded data
    return {
        "personas": personas_data,
        "report": report_data,
        "improvementReport": improvements_report_data
    }

# Chatroom API endpoint
@app.post("/api/chat", response_model=List[ChatResponse])
async def chat(request: ChatRequest):
    responses = []
    colors = {"Emily Chen": "#f56a00", "Michael Johnson": "#7265e6", "Sarah Thompson": "#ffbf00"}
    
    for persona in request.chatWith:
        if persona not in personas_data["Tech Innovators"] + personas_data["Regulators"] + personas_data["Ethical Bankers"] + personas_data["Free Market Advocates"]:
            raise HTTPException(status_code=400, detail=f"Invalid persona: {persona}")
        
        responses.append(ChatResponse(
            sender=persona,
            content=f"{persona}'s response.",
            isUser=False,
            color=colors.get(persona, "#1890ff")  # Default color if not specified
        ))
    
    return responses

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)