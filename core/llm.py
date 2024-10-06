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
            raise ValueError("API key is required.")
        try:
            llm = ChatTogether(
                api_key=api_key, temperature=temperature, model=model_name)
            self.llm_chain = prompt_templates[chatbot_type] | llm | parser
            self.cache = {}  #
        except Exception as e:
            raise ValueError("Error initializing the LLM chain: " + str(e))

    def rate_answer(self, question, user_answer, subject="ReactJS"):
        # cache_key = (question, user_answer)
        # if cache_key in self.cache:
        #     return self.cache[cache_key]
        result = {
            "rating": -99,
            "reason": "Not implemented yet"
        }
        try:
            result = self.llm_chain.invoke(
                {"question": question, "user_answer": user_answer, "subject": subject})

            if "rating" not in result:
                raise ValueError("Rating not found in the output")
            if not (0 <= result["rating"] <= 10):
                raise ValueError("Rating should be between 0 and 10")
        except Exception as e:
            raise ValueError("Error invoking the LLM chain: " + str(e))

        # self.cache[cache_key] = result
        return result

    def compare_answers(self, expected_answer, user_answer):
        return self.llm_chain.invoke({"expected_answer": expected_answer, "user_answer": user_answer})
