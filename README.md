# Gen AI Hackathon

![Logo](./assets/readme.png)

This a chatbot built to shortlist candidates for a job interview. The goal is lessen the burdern on the HR team by automating the process of shortlisting candidates.

The chatbot uses Generative AI to rate the candidates based on their responses to the questions asked. Depending on the total score, the candidate is allowed to schedule an interview or not.

**How it works:**

- Every time a candidate enters a response to a question, the response is sent to the LLM model via the backend.
- A prompt is generated using the response and the predefined prompt template. Following is the prompt template:

``` python
template = """
You are an AI designed to evaluate the quality of a user's answer based on the question provided for a {subject} interview.

Question: "{question}"

User's answer: "{user_answer}"

Rate the user's answer on a scale from 1 to 10 based on its relevance, accuracy, completeness (with 1 being completely irrelevant or incorrect, and 10 being a perfect answer) and provide reason for your rating in under 100 characters.
{format_instructions}
"""
```

## Link

[https://gen-ai-interview-bot.streamlit.app/](https://gen-ai-interview-bot.streamlit.app/)

## Architecture

> The following architecture is only for the custom FastAPI and ReactJS app. The Streamlit app has a different architecture.

**Components**

- The frontend is built using ReactJS
- The backend is built using FastAPI
- The chatbot is built using `meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo` LLM model.

- After the prompt is generated, the model generates a rating and a reason for the rating.
- The rating and the reason are then sent back to the frontend where the candidate can see the rating and the reason.
- The candidate can then schedule an interview if the rating is above a certain threshold.

## Pre-requisites to run the app locally

- First create a free account on [Together AI](https://api.together.ai/signin). This is required for api key

- Create a new file named `.env` in the backend folder and add the following content:

```env
TOGETHER_AI_API_KEY=YOUR_API_KEY
```

## FastAPI

To run the FastAPI app, fist update the requirements.txt file by uncommenting all the packages after the following line: `# for fastapi`

Then run the following commands:

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

## Frontend

If you want to run the Frontend app, you need to create a new file named `.env` in the `frontend` folder and add the following content:

```env
VITE_API_URL=http://localhost:8000
```

To run the frontend app, run the following commands:

```bash
cd frontend
npm install
npm run dev
```

## Streamlit App

Create a new file inside `.streamlit` folder named `secrets.toml` and add the following content:

```toml
TOGETHER_AI_API_KEY = "YOUR_API_KEY"
```

To run the streamlit app, run the following command:

```bash
cd backend
pip install -r requirements.txt
streamlit run streamlit.py
```
