import streamlit as st
from core.llm import LLM_Api
from dotenv import load_dotenv
import json
import os
load_dotenv()


react_js_interview_question = [
    "What is React?",
    "What are the key features of React?",
    "What is JSX?",
    # "What is the virtual DOM?",
    # "What is a component in React?",
    # "What is the difference between state and props in React?",
    # "What are React hooks?",
    # "What is the significance of keys in React?",
    # "What is the purpose of render() in React?",
    # "What is the use of ref in React?",
    # "What are the lifecycle methods in React?",
    # "What is the significance of context in React?",
    # "What is the significance of portals in React?",
    # "What are higher-order components in React?",
    # "What is the significance of error boundaries in React?",
    # "What is the significance of fragments in React?",
    # "What is the significance of lazy loading in React?",
]

api = LLM_Api(model_name="meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo", temperature=0.0,
              api_key=os.environ["TOGETHER_AI_API_KEY"], chatbot_type="qa")

if 'question_index' not in st.session_state:
    st.session_state.question_index = 0
    st.session_state.answers = []
    st.session_state.ratings = []
    st.session_state.answer = ""


def update_values():
    if st.session_state.curr_answer.strip() == "":
        st.warning("Please provide an answer.")
        return
    rating = api.rate_answer(
        react_js_interview_question[st.session_state.question_index], st.session_state.curr_answer)
    st.session_state.question_index += 1
    st.session_state.answers.append(st.session_state.curr_answer)
    st.session_state.ratings.append(rating["rating"])
    st.session_state.curr_answer = ""


# st.write(st.session_state)

if st.session_state.question_index < len(react_js_interview_question):
    st.write(react_js_interview_question[st.session_state.question_index])
    st.text_area("Answer", key="curr_answer")
    st.button("Submit", on_click=update_values)


if st.session_state.question_index >= len(react_js_interview_question):
    st.write("Interview completed! Here's a summary of your answers and ratings:")

    for i, answer in enumerate(st.session_state.answers):
        st.write(react_js_interview_question[i])
        st.write("Answer: ", st.session_state.answers[i])
        st.write("Rating: ", st.session_state.ratings[i])
        st.write("\n")
