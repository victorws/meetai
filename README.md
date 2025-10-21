# 🤖 MeetAI – AI-Powered Meeting Assistant

MeetAI is a full-stack AI meeting assistant platform built with **Next.js 15**, **React**, and **OpenAI Realtime API**.  
It enables real-time video meetings with AI agents, live transcription, automated summaries, and chat functionality.

🔗 **Live Demo:** https://meetai-one-alpha.vercel.app/  
🎥 **Tutorial Inspiration:** *Build and Deploy a SaaS AI Agent Platform | Next.js 15, React, Better Auth, Polar | Full Course 2025* by **Code with Antonio** — https://www.youtube.com/watch?v=xEDCEmqyvC8

---

## 🚀 Features

- 🎥 **Real-time AI Video Calls** — An AI-powered agent joins your meetings via Stream Video.  
- 💬 **Chat-Based AI Assistant** — Post-call Q&A in Stream Chat using OpenAI.  
- 🧾 **Automatic Transcription & Summaries** — Meetings are transcribed and summarized automatically.  
- 👥 **Auth & Billing Integration** — User authentication (Better Auth) and subscription handling (Polar) for agents and meetings.  
- ⚙️ **Event-Driven Background Processing** — Built on Inngest for asynchronous jobs and workflows.  
- 🌐 **Cloud-Ready & Secure** — Deployed on Vercel, database on Neon (PostgreSQL), secure webhook validation, environment-based logging.

---

## 🧠 My Contribution & Learning

While I followed the tutorial to understand the foundational architecture, I extended the project by:  
- Adding a dedicated **development environment setup** with ngrok for webhook testing.  
- Implementing robust **signature and API key verification** for secure webhooks.  
- Configuring **Better Auth + Polar** for subscription and billing flows.  
- Refining logging and deployment readiness for production.

This project reflects my growing focus on **AI systems**, **cloud infrastructure**, and **secure full-stack development**.

---

## 🛠 Tech Stack

**Frontend:**  
- Next.js 15 (App Router)  
- React  
- Tailwind CSS  

**Backend & Services:**  
- Stream Video + Chat SDKs  
- OpenAI Realtime API (GPT-4o)  
- Inngest for serverless functions  
- Drizzle ORM + Neon PostgreSQL  
- Better Auth + Polar for authentication & billing  
- Ngrok for local dev webhooks  
- TypeScript, ESLint, Prettier  

---

## 🧩 Quick Start (Optional for Developers)

```bash
git clone https://github.com/victorws/meetai.git
cd meetai
npm install
npm run dev
# expose webhooks
ngrok http 3000
# run background processing
npx inngest-cli@latest dev
