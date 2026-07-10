import os

import resend

resend.api_key = os.getenv("RESEND_API_KEY", "")

CONTACT_TO_EMAIL = os.getenv("CONTACT_TO_EMAIL", "hasnainraza116@gmail.com")
CONTACT_FROM_EMAIL = os.getenv("CONTACT_FROM_EMAIL", "onboarding@resend.dev")


def send_contact_email(name: str, email: str, message: str) -> None:
    resend.Emails.send(
        {
            "from": CONTACT_FROM_EMAIL,
            "to": [CONTACT_TO_EMAIL],
            "reply_to": email,
            "subject": f"New contact form submission from {name}",
            "text": f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
        }
    )
