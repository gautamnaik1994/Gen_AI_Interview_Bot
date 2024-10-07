from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from core.llm import LLM_Api
from dotenv import load_dotenv
import os
from pydantic import BaseModel, Field

load_dotenv()

app = FastAPI()
api = LLM_Api(model_name="meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo", temperature=0.0,
              api_key=os.environ["TOGETHER_AI_API_KEY"], chatbot_type="qa")


class QABody(BaseModel):
    question: str = Field(default="What is React?")
    answer: str = Field(
        default="React is a JavaScript library used for building user interfaces.")
    subject: str = Field(default="ReactJS")


class ResponseBody(BaseModel):
    rating: float
    reason: str


@app.post("/rate_qa", response_model=ResponseBody)
def rate_qa(qa_body: QABody):
    question = qa_body.question
    answer = qa_body.answer
    subject = qa_body.subject

    try:
        res = api.rate_answer(question, answer, subject)
        return JSONResponse(status_code=200, content={**res})
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500, detail="An unexpected error occurred")
