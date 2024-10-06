from pydantic import BaseModel, Field


class RatingModel(BaseModel):
    rating: int = Field(..., ge=1, le=10)
    reason: str = Field(...)
