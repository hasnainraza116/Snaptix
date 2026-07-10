from fastapi import APIRouter

from models.schemas import Project, ProjectsResponse

router = APIRouter(tags=["projects"])

PROJECTS: list[Project] = [
    Project(
        id="rag-support-assistant",
        title="RAG Support Assistant",
        category="AI Chatbots & Assistants",
        description="Document-grounded support chatbot built on a RAG pipeline over a client's knowledge base.",
        tags=["RAG", "NLP", "FastAPI"],
    ),
    Project(
        id="content-engine",
        title="Generative Content Engine",
        category="Generative AI Applications",
        description="Fine-tuned LLM content pipeline for automated marketing copy generation.",
        tags=["LLM Fine-tuning", "Prompt Engineering"],
    ),
    Project(
        id="client-portal",
        title="Client Portal Web App",
        category="Web Development",
        description="React + FastAPI web application with real-time dashboards and Supabase-backed auth.",
        tags=["React", "FastAPI", "Supabase"],
    ),
    Project(
        id="field-service-app",
        title="Field Service Mobile App",
        category="Mobile App Development",
        description="Cross-platform mobile app for field technicians with offline-first sync to a shared backend.",
        tags=["React Native", "iOS", "Android"],
    ),
    Project(
        id="onboarding-redesign",
        title="Onboarding Flow Redesign",
        category="UX/UI Design",
        description="End-to-end UX audit and redesign of a SaaS onboarding flow to cut drop-off and support tickets.",
        tags=["Product Design", "Prototyping"],
    ),
    Project(
        id="qa-automation-suite",
        title="QA Automation Suite",
        category="Software Testing",
        description="Automated regression and end-to-end test suite wired into CI for a production web platform.",
        tags=["Test Automation", "CI/CD"],
    ),
    Project(
        id="rl-scheduling-agent",
        title="RL Scheduling Agent",
        category="Reinforcement Learning",
        description="Custom reinforcement learning agent for resource scheduling, trained with Stable-Baselines3.",
        tags=["Stable-Baselines3", "Gymnasium"],
    ),
    Project(
        id="entity-extraction-pipeline",
        title="Entity Extraction Pipeline",
        category="NLP Solutions",
        description="Named entity recognition and text classification pipeline built on spaCy and Hugging Face.",
        tags=["spaCy", "Hugging Face", "NER"],
    ),
]


@router.get("/projects", response_model=ProjectsResponse)
def get_projects() -> ProjectsResponse:
    return ProjectsResponse(projects=PROJECTS)
