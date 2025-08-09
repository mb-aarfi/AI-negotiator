from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Negotiator Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ai_agent"}


@app.get("/negotiate/sample-offer")
def sample_offer():
    return {"price": 99.0, "currency": "USD", "terms": "net-30"}

