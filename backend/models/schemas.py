from pydantic import BaseModel, EmailStr
from typing import Optional


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = ""
    service: str
    description: str
    budget: Optional[str] = ""


class Project(BaseModel):
    id: str
    title: str
    category: str
    description: str
    tags: list[str]


class ProjectsResponse(BaseModel):
    projects: list[Project]
