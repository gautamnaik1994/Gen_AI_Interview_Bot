from langchain.prompts import PromptTemplate

from .utils import parser


qa_template = """
You are an AI designed to evaluate the quality of a user's answer based on the question provided for a {subject} interview.

Question: "{question}"

User's answer: "{user_answer}"

Rate the user's answer on a scale from 1 to 10 based on its relevance, accuracy, completeness (with 1 being completely irrelevant or incorrect, and 10 being a perfect answer) and provide reason for your rating in under 100 characters and also mention if answer is plagiarized or not.
{format_instructions}
"""

compare_template = """
You are an AI designed to evaluate the quality of a user's answer based on the provided expected answer.

Expected answer: "{expected_answer}"

User's answer: "{user_answer}"

Rate the user's answer on a scale from 1 to 10 based on its relevance (with 1 being completely irrelevant or incorrect, and 10 being a perfect answer).Do not be very strict
{format_instructions}
"""


qa_prompt = PromptTemplate(input_variables=["question", "user_answer", "subject"], template=qa_template, partial_variables={
                           "format_instructions": parser.get_format_instructions()})
compare_prompt = PromptTemplate(
    input_variables=["expected_answer", "user_answer"], template=compare_template)


prompt_templates = {
    "qa": qa_prompt,
    "compare": compare_prompt
}
