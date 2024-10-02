import streamlit as st
from core.llm import LLM_Api
from dotenv import load_dotenv
import os
load_dotenv()


react_js_interview_question = [
    "What is React?",
    "What are the key features of React?",
    "What is JSX?",
    "What is the virtual DOM?",
    "What is a component in React?",
    "What is the difference between state and props in React?",
    "What are React hooks?",
    "What is the significance of keys in React?",
    "What is the purpose of render() in React?",
    "What is the use of ref in React?",
    "What are the lifecycle methods in React?",
    "What is the significance of context in React?",
    "What is the significance of portals in React?",
    "What are higher-order components in React?",
    "What is the significance of error boundaries in React?",
    "What is the significance of fragments in React?",
    "What is the significance of lazy loading in React?",
]

api = LLM_Api(model_name="meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo", temperature=0.0,
              api_key=os.environ["TOGETHER_AI_API_KEY"], chatbot_type="qa")

rating = api.rate_answer(
    react_js_interview_question[0], "React is a JavaScript library for building user interfaces.")
print(rating)

st.title('Hello World!')
st.write(rating)
