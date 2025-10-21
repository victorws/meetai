# 🤖 MeetAI – AI-Powered Meeting Assistant

MeetAI is a full-stack AI meeting application that combines **real-time video**, **AI conversation**, and **automated transcription**, powered by **Stream**, **OpenAI**, and **Inngest**.

🔗 **Live Demo:** https://meetai-one-alpha.vercel.app/  
🎥 **Tutorial Source / Inspiration:** *Build and Deploy a SaaS AI Agent Platform | Next.js 15, React, Better Auth, Polar | Full Course 2025* by **Code with Antonio** — https://www.youtube.com/watch?v=xEDCEmqyvC8

---

## 🚀 Features

- 🎥 **Real-time AI agent** that can join meetings via Stream Video  
- 🧠 **OpenAI-powered assistant** for in-call help and post-meeting Q&A  
- 📝 **Automatic transcription & post-meeting summaries**  
- ⚙️ **Event-driven processing** using Inngest for background tasks  
- 🔐 **Signed webhook verification** for Stream events  
- ☁️ **Deployed on Vercel** and connected to Neon PostgreSQL (Drizzle ORM)

---

## 🧠 My Contribution & Learning

I built MeetAI by following the Code with Antonio full-course to learn the architecture and core integrations. While following the tutorial I also:

- Added a **custom dev / prod environment setup** suitable for local debugging and cloud deployment.
- Implemented robust **webhook verification and debug logging** to handle Stream events reliably.
- Integrated **ngrok** + Inngest for reliable local testing and iterative development.
- Debugged and validated the OpenAI + Stream realtime flow so the AI agent joins calls correctly.

This project helped me level up in:
- Real-time systems and webhook security  
- Event-driven backend design  
- Integrating LLMs into live audio/video workflows

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router), TypeScript  
- **Realtime & Chat**: Stream Video & Stream Chat SDKs  
- **AI**: OpenAI Realtime / Responses API (GPT-4o / gpt-4o-realtime models)  
- **Background Jobs**: Inngest  
- **DB**: Neon PostgreSQL + Drizzle ORM  
- **Auth**: BetterAuth (OAuth flows)  
- **Dev tools**: ngrok, dotenv  
- **Deployment**: Vercel

---

## 🧩 Quick Demo & Validation

You can try the live demo here:  
**https://meetai-one-alpha.vercel.app/**

If you want to run locally (optional; for developers):

```bash
git clone https://github.com/victorws/meetai.git
cd meetai
npm install
npm run dev
# expose local webhooks
ngrok http 3000
# run Inngest locally for background functions
npx inngest-cli@latest dev
