from fastapi import FastAPI
from core.llm import LLM_Api
from dotenv import load_dotenv
import os
from pydantic import BaseModel, Field
load_dotenv()

app = FastAPI()
api = LLM_Api(model_name="meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo", temperature=0.0,
              api_key=os.environ["TOGETHER_AI_API_KEY"], chatbot_type="qa", subject="ReactJS")


class QABody(BaseModel):
    question: str = Field(default="What is React?")
    answer: str = Field(
        default="React is a JavaScript library used for building user interfaces.")


@app.post("/rate_qa")
def rate_qa(qa_body: QABody):
    question = qa_body.question
    answer = qa_body.answer

    rating = api.rate_answer(question, answer)
    return {"rating": rating["rating"]}
