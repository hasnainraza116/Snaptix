from fastapi import APIRouter, HTTPException
from models.schemas import ContactForm
import resend, os

router = APIRouter()


@router.post("/contact")
async def send_contact(form: ContactForm):
    resend.api_key = os.getenv("RESEND_API_KEY")
    html = f"""
      <h2>New project enquiry — {form.service}</h2>
      <p><b>Name:</b> {form.name}</p>
      <p><b>Email:</b> {form.email}</p>
      <p><b>Company:</b> {form.company}</p>
      <p><b>Service:</b> {form.service}</p>
      <p><b>Budget:</b> {form.budget}</p>
      <p><b>Project:</b><br>{form.description}</p>
    """
    resend.Emails.send({
        "from": os.getenv("CONTACT_FROM_EMAIL", "onboarding@resend.dev"),
        "to": [os.getenv("CONTACT_TO_EMAIL", "hasnainraza116@gmail.com")],
        "subject": f"Enquiry from {form.name} — {form.service}",
        "html": html
    })
    return {"success": True}
