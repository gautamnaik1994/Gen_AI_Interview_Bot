from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_together import ChatTogether
from langchain_core.output_parsers import JsonOutputParser
import json
from .utils import parser
from .prompt_templates import prompt_templates


class LLM_Api:
    def __init__(self, model_name, temperature=0.0, api_key=None, chatbot_type="qa"):
        if api_key is None:
            print(
                "API key is required.Please signup for free api at https://api.together.ai/signin")
            raise ValueError("API key is required.")
        try:
            llm = ChatTogether(
                api_key=api_key, temperature=temperature, model=model_name)
            self.llm_chain = prompt_templates[chatbot_type] | llm | parser
            self.cache = {}  #
        except Exception as e:
            raise ValueError("Error initializing the LLM chain: " + str(e))

    def rate_answer(self, question, user_answer, subject="ReactJS"):
        def_result = {
            "rating": -1,
            "reason": "You are seeing this message because the rating could not be calculated due to API failure. This will not be considered for evaluation."
        }
        try:
            result = self.llm_chain.invoke(
                {"question": question, "user_answer": user_answer, "subject": subject})

            if "rating" not in result:
                raise ValueError("Rating not found in the output")
            if not (0 <= result["rating"] <= 10):
                raise ValueError("Rating should be between 0 and 10")
        except Exception as e:
            result = def_result
            raise ValueError("Error invoking the LLM chain: " + str(e))
        finally:
            return result

    def compare_answers(self, expected_answer, user_answer):
        return self.llm_chain.invoke({"expected_answer": expected_answer, "user_answer": user_answer})
