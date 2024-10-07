# Gen AI Hackathon

## Pre-requisites

- First create a free account on [Together AI](https://api.together.ai/signin). This is required for api key
- Create a new file inside `.streamlit` folder named `secrets.toml` and add the following content:

```toml
TOGETHER_AI_API_KEY = "YOUR_API_KEY"
```

- If you want to run the FastAPI app, you need to create a new file named `.env` in the root folder and add the following content:

```env
TOGETHER_AI_API_KEY=YOUR_API_KEY
```

## Streamlit App

To run the streamlit app, run the following command:

```bash
pip install -r requirements.txt
streamlit run streamlit.py
```

## FastAPI

To run the FastAPI app, fist update the requirements.txt file by uncommenting all the packages after the following line: `# for fastapi`

Then run the following commands:

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```
