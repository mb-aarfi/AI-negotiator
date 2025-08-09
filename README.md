# NegoKart - AI Negotiator 

A full-stack platform enabling **AI-powered negotiations** between retailers and wholesalers. Harnesses the power of open-source LLMs (like Llama-3/Mistral) to automate, optimize, and accelerate B2B product pricing conversations—delivering the best deals, increased transparency, and real-time efficiency.

***

## 🚀 Features

- **AI Negotiator Agent:** Automatically negotiates price and terms on behalf of retailers through chat, using negotiation strategies tailored to product type, history, and real-time market data.
- **Multi-Role Dashboard:** Different interfaces for retailers, wholesalers, and admins with role-based access and tailored workflows.
- **Real-Time Chat:** Secure, WebSocket-powered chat connecting wholesaler & AI agent, with instant messaging and offer updates.
- **Product Management:** Retailers submit shopping lists, wholesalers manage catalogs, all in a streamlined UI.
- **Instant Offer Comparison:** Retailers receive summarized, side-by-side offers from multiple wholesalers—choose the best deal with a click.
- **Audit & Compliance:** All negotiation conversations logged for transparency, optimization, and regulatory requirements.
- **Open-source AI Stack:** Uses Llama-3, Mistral, or compatible open models, so there are **zero ongoing license costs**.
- **Dockerized Architecture:** Develop and deploy anywhere, reliably and securely.
- **Extensible:** Designed for additional features like analytics, payments, multi-language support, and more.

***

## 🏗️ Tech Stack

- **Frontend:** React.js (with Material-UI), Socket.IO, Axios
- **Backend:** Node.js (Express) or Python (FastAPI), REST API, WebSocket server
- **AI Agent:** Python (transformers/torch), negotiation logic, custom datasets
- **Database:** MongoDB
  
***

## 🗂️ Project Structure

```plaintext
/ai-negotiator-platform
  /frontend       # Retailer, wholesaler, and admin web UI (React)
  /backend        # REST API, chat, AI agent orchestration
  /ai_agent       # LLM, negotiation modules, training code
  /shared         # API schemas, types, constants
  /infra          # Docker compose, deployment scripts
  README.md
```
*See detailed folder structure in `/infra`.*

***

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/ai-negotiator-platform.git
cd ai-negotiator-platform
```

### 2. Prerequisites

- Node.js (LTS)
- Python 3.10+
- Docker & Docker Compose
- (Optional) VS Code/Cursor IDE

### 3. Quickstart (All-in-One with Docker)

```bash
docker-compose up --build
```

*Or, run each service separately:*
- `/frontend`: `npm install && npm start`
- `/backend`: `npm install && npm start`
- `/ai_agent`: `python -m venv venv && source venv/bin/activate && pip install -r requirements.txt && python src/integration/run.py`

### 4. Configuration

- Copy `.env.example` to `.env` in each service folder and adjust settings (database URI, secrets, agent configs).
- (AI Agent) Download compatible open LLMs and place in `/ai_agent/models/`.

***

## 💡 Core Workflows

### For Retailers
1. Log in and add products to shopping list.
2. Instantly trigger negotiations with all eligible wholesalers.
3. Watch the chat as the AI negotiator handles price discussions.
4. Review, compare, and accept the best offer directly in your dashboard.

### For Wholesalers
1. Receive instant notification when a retailer requests your products.
2. Negotiate via chat with the AI agent—reply, counter-offer, or accept.
3. Track deals and manage orders in your dashboard.

### AI Agent
- Receives negotiation context, parses offers, generates strategic counter-offers, references product history/benchmarks, and pushes for best possible rates on the retailer's behalf.

***

## 👩💻 Development & Collaboration

- Modular code, single responsibility per folder/service.
- Use `/shared` folder for schemas/types—coding frontend and backend against the same contracts.
- Full support for containerized development and CI/CD.

***

*Want to contribute? Check our [CONTRIBUTING.md] or open an issue!*

***

## 🙌 Acknowledgements

- Built with the open-source Llama-3, Mistral, and amazing tools from the open AI developer community.
- Inspired by modern B2B, e-commerce, and negotiation research.

***

👥 Contributors
- Muhammad Baqir (https://github.com/mb-aarfi)
- Nisha Ahmad (https://github.com/NAhmad231)

***

> **Ready to disrupt B2B buying?  
Fork & deploy your own AI Negotiator now!**
