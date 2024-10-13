import streamlit as st
from core.llm import LLM_Api
from dotenv import load_dotenv
import json
import os
load_dotenv()


react_js_interview_qa = [
    {
        "question": "What is the Virtual DOM and how does it differ from the real DOM?",
        "answer": "The Virtual DOM is a lightweight copy of the real DOM. It is a JavaScript object that represents the actual DOM elements. React uses the Virtual DOM to improve performance by updating the actual DOM only when necessary. When a component's state changes, React updates the Virtual DOM first and then compares it with the real DOM to identify the changes. This process is known as reconciliation."
    },
    {
        "question": "Explain the difference between functional components and class components in React?",
        "answer": "Functional components are simple JavaScript functions that return JSX elements. They are also known as stateless components because they do not have state or lifecycle methods. Functional components are easier to read and test compared to class components. Class components, on the other hand, are ES6 classes that extend the React.Component class. They have state, lifecycle methods, and can hold local state. Class components are used when the component needs to have state or lifecycle methods."
    },
    # {
    #     "question": "What are React Fragments and why are they useful?",
    #     "answer": "React Fragments are a way to group multiple elements without adding extra nodes to the DOM. They allow you to return multiple elements from a component's render method without wrapping them in a div or other container element. Fragments are useful when you need to return multiple elements from a component but do not want to add extra nodes to the DOM."
    # },
    # {
    #     "question": "Explain the concept of lifting state up in React?",
    #     "answer": "Lifting state up is a pattern in React where the state is moved from a child component to its parent component. This allows multiple child components to share the same state and synchronize their state with the parent component. Lifting state up is useful when multiple components need to access and update the same state, or when the state needs to be shared between sibling components."
    # }
]

nodejs_interview_qa = [
    {
        "question": "What is the role of the event loop in Node.js?",
        "answer": "The event loop is a core concept in Node.js that allows it to perform non-blocking I/O operations. It is responsible for handling asynchronous operations and callbacks in Node.js. The event loop continuously checks the call stack for new tasks and executes them in a non-blocking manner. This allows Node.js to handle multiple requests concurrently without blocking the main thread."
    },
    {
        "question": "What is the difference between asynchronous and synchronous programming in Node.js?",
        "answer": "Asynchronous programming in Node.js allows multiple operations to be performed concurrently without blocking the main thread. Asynchronous functions return immediately and execute in the background, allowing other operations to continue. Synchronous programming, on the other hand, blocks the main thread until the operation is completed. This can lead to performance issues, especially in I/O-bound applications."
    },
    # {
    #     "question": "Explain the role of the fs module in Node.js?",
    #     "answer": "The fs module in Node.js provides file system-related functionality, such as reading and writing files, creating directories, and manipulating file metadata. It allows Node.js applications to interact with the file system and perform file-related operations. The fs module provides both synchronous and asynchronous methods for file I/O operations."
    # },
    # {
    #     "question": "What is the purpose of the cluster module in Node.js?",
    #     "answer": "The cluster module in Node.js allows you to create child processes that share the same server port. This enables you to take advantage of multi-core systems and improve the performance of your Node.js applications. The cluster module allows you to create a cluster of processes that can handle incoming requests concurrently, distributing the workload across multiple CPU cores."
    # }
]


questions = {
    "ReactJS": react_js_interview_qa,
    "NodeJS": nodejs_interview_qa
}


api = LLM_Api(model_name="meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo", temperature=0.0,
              api_key=st.secrets["TOGETHER_AI_API_KEY"], chatbot_type="qa")
st.set_page_config(page_title="Interview Bot", page_icon=":robot:")
st.title("Interview Bot")

st.markdown("Welcome to the interview bot!. This bot uses AI to evaluate your answers to questions and will rate you on a scale of 1 to 10 based on its relevance, accuracy, completeness. Please fill out the form below to get started.")
with st.expander("How it works"):
    st.markdown('''
    This app uses Generative AI to evaluate your answers to interview questions. Every time you submit an answer, A prompt is generated based on the question and answer. 
      Following is the prompt template used: 
                ''')
    st.code('''
      You are an AI designed to evaluate the quality of a user's answer based on the question provided for a {subject} interview.

Question: "{question}"

User's answer: "{user_answer}"

Rate the user's answer on a scale from 1 to 10 based on its relevance, accuracy, and completeness (with 1 being completely irrelevant or incorrect, and 10 being a perfect answer) and provide reason for your rating in under 100 characters.
{format_instructions}
                ''', language='markdown', wrap_lines=True)

if 'job_position' not in st.session_state:
    st.session_state.job_position = "ReactJS"

if 'form_submitted' not in st.session_state:
    st.session_state.form_submitted = False


def handle_form_submission(name, email, job_position):

    st.session_state.name = name
    st.session_state.email = email
    st.session_state.job_position = job_position
    st.session_state.form_submitted = True


if not st.session_state.form_submitted:

    with st.container(border=True):
        st.write("Please fill out the form below:")

        name = st.text_input("Name", value="Gautam Naik")
        email = st.text_input("Email", value="gautamnaik1994@gmail.com")
        job_position = st.selectbox("Job Position", ["ReactJS", "NodeJS"])

        st.button("Submit", on_click=handle_form_submission,
                  args=(name, email, job_position), type="primary", use_container_width=True)


if st.session_state.form_submitted and 'curr_answer' not in st.session_state:
    st.success(
        f"Thank you for submitting the form, {st.session_state.name}, Please answer the following questions to complete the interview for the {st.session_state.job_position} position.")

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
        questions[st.session_state.job_position][st.session_state.question_index], st.session_state.curr_answer, subject=st.session_state.job_position)
    st.session_state.question_index += 1
    st.session_state.answers.append(st.session_state.curr_answer)
    st.session_state.ratings.append(rating)
    st.session_state.curr_answer = ""


if st.session_state.question_index < len(questions[st.session_state.job_position]) and st.session_state.form_submitted:
    with st.container(border=True):
        st.markdown(
            f"#### {questions[st.session_state.job_position][st.session_state.question_index]['question']}", help=questions[st.session_state.job_position][st.session_state.question_index]["answer"])
        st.text_area("Answer", key="curr_answer",
                     placeholder="Type your answer here", label_visibility="collapsed", height=200)
        st.button("Submit", on_click=update_values,
                  use_container_width=True, type="primary")


if st.session_state.question_index >= len(questions[st.session_state.job_position]):
    st.success("Interview completed!, Here is the summary", icon="🎉")
    with st.container(border=True):
        for i, answer in enumerate(st.session_state.answers):
            st.markdown(
                f"##### {questions[st.session_state.job_position][i]['question']}")
            st.markdown(f"""
            **Rating**: :green[{st.session_state.ratings[i]['rating']}]  
            **Reason**: {st.session_state.ratings[i]['reason']} 
            """)

            if i < len(st.session_state.answers) - 1:
                st.divider()
