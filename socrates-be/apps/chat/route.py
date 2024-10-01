from fastapi import APIRouter, HTTPException
from .utils import process_chat
from pydantic import BaseModel

router = APIRouter()

# Request and response models
class ChatRequest(BaseModel):
    question: str
    dict_of_vars: dict 

class ChatResponse(BaseModel):
    text: str

@router.post("/ask", response_model=ChatResponse)
async def ask_for_hint(chat_request: ChatRequest):
    try:
        
        response_text = await process_chat(chat_request)
        
        
        return ChatResponse(text=response_text)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
