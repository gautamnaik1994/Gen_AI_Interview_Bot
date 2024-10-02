from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_together import ChatTogether
from langchain_core.output_parsers import JsonOutputParser
import json
from pydantic import BaseModel, Field
