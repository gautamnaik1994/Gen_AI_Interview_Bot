from langchain_core.output_parsers import JsonOutputParser
from .models import RatingModel

parser = JsonOutputParser(pydantic_object=RatingModel)
