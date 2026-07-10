from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import anthropic, os

router = APIRouter()

class ChatMessage(BaseModel):
    message: str

SYSTEM = """You are the Snaptix AI assistant. Snaptix is an AI development company
that builds chatbots, web apps, generative AI products, reinforcement learning systems,
and NLP solutions. Be helpful, concise, and friendly. If someone wants to start a project,
encourage them to use the contact form or email hasnainraza116@gmail.com"""

@router.post("/chat")
async def chat(body: ChatMessage):
    client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

    def generate():
        with client.messages.stream(
            model="claude-sonnet-4-6",
            max_tokens=512,
            system=SYSTEM,
            messages=[{"role": "user", "content": body.message}]
        ) as stream:
            for text in stream.text_stream:
                yield text

    return StreamingResponse(generate(), media_type="text/plain")
