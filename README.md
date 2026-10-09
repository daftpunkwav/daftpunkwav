> Language: **English** | [简体中文](README.zh.md)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/github-contribution-grid-snake-dark.svg">
    <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/github-contribution-grid-snake.svg" alt="contribution snake">
  </picture>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1200&center=true&vCenter=true&width=560&height=44&lines=LLM+Agents+%C2%B7+RAG+%C2%B7+Streaming+%C2%B7+Evals;Python+%C2%B7+TypeScript+%C2%B7+Go+%C2%B7+Rust" alt="typing">
</p>

---

### 🧭 About

I like building things that actually work. What interests me most is making AI more than a chat box — getting it to plan steps, use tools, recover from mistakes, and carry a task from start to finish. Around that idea I've built, piece by piece, the parts an agent needs: execution loops, multi-agent coordination, memory and retrieval, evaluation and side-by-side experiments — plus the unglamorous components underneath that keep them running for long stretches: rate limiting, circuit breaking, idempotent claims.

I write both frontend and backend, mostly in Python and TypeScript, and I enjoy Go and Rust for things closer to the system level. When I build something, I think from the interface down to the internals: it should feel good to use, and be structured to survive change.

I care about "holds up" more than "gets done": clear boundaries, traceable failures, code you can keep building on. Most of the projects below started from a real need of my own and grew from there.

### 🚀 Projects

**[real-mock](https://github.com/daftpunkwav/real-mock)** — AI mock interview platform
Upload a resume, then run a voice mock interview with an AI interviewer: it asks, follows up, and scores, with other roles handling the coding challenge and score review. From resume feedback to interview report, one person can practice the whole loop.
`Next.js` `FastAPI` `WebSocket` `SQLite` `ChromaDB` `faster-whisper` `Docker`

**[voyager](https://github.com/daftpunkwav/voyager)** — An AI workbench humans and agents share
Keep repos, documents, and notes in one place: every button you can click, an AI can call too; everything an AI can do, you can do by hand — both sides use the same features.
`FastAPI` `React` `SQLite` `uv workspaces`

**[agent-prism](https://github.com/daftpunkwav/agent-prism)** — Agent comparison lab
Ask one question to ten different agent setups and watch the answers stream in side by side: who did better, and why, is settled by data — picking a framework or tuning a strategy stops being guesswork.
`TypeScript` `Zod` `pnpm monorepo` `Hono` `SSE`

**[wave-code](https://github.com/daftpunkwav/wave-code)** — AI coding assistant
A coding assistant that works on its own for long stretches: it breaks big tasks into small steps and resumes from where it stopped. Whether it actually succeeded isn't taken from its own word — the final state of the workspace decides.
`Rust` `MCP`

**[breakwater](https://github.com/daftpunkwav/breakwater)** — LLM gateway
A gate between your app and large language models: it slows down anyone sending too much, switches to a backup when an upstream fails, and keeps every request accounted for — so services that depend on LLMs stay steady.
`Go` `Redis` `k6`

**[rutter](https://github.com/daftpunkwav/rutter)** — A browser for AI agents
Gives AI a real browser: it opens pages, understands what's on them, clicks buttons and fills forms for you — and pauses to ask a human before anything sensitive.
`Rust` `CDP` `MCP`

**[cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp)** — Web search MCP server
Lets AI search the web: several search providers behind one tool — fall back to the next one automatically when a provider fails, or query several at once and merge the results. Works from the command line too, no client needed.
`TypeScript` `MCP`

### 🧰 Tech Stack

<p align="center"><b>Languages</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black" alt="Rust">
  <img src="https://img.shields.io/badge/C%23-512BD4?style=flat-square" alt="C#">
</p>

<p align="center"><b>Frontend</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/SSE-444C56?style=flat-square" alt="SSE">
  <img src="https://img.shields.io/badge/WebSocket-444C56?style=flat-square" alt="WebSocket">
</p>

<p align="center"><b>Backend & Data</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white" alt="Hono">
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white" alt="Pydantic">
  <img src="https://img.shields.io/badge/Zod-3068B2?style=flat-square&logo=zod&logoColor=white" alt="Zod">
  <img src="https://img.shields.io/badge/SQLAlchemy-D71F00?style=flat-square" alt="SQLAlchemy">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white" alt="Redis">
  <img src="https://img.shields.io/badge/ChromaDB-FF6F00?style=flat-square" alt="ChromaDB">
</p>

<p align="center"><b>AI & Agents</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" alt="LangChain">
  <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square" alt="LangGraph">
  <img src="https://img.shields.io/badge/DeepAgents-1C3C3C?style=flat-square" alt="DeepAgents">
  <img src="https://img.shields.io/badge/AutoGen-1C3C3C?style=flat-square" alt="AutoGen">
  <img src="https://img.shields.io/badge/CrewAI-1C3C3C?style=flat-square" alt="CrewAI">
  <img src="https://img.shields.io/badge/Claude_Agent_SDK-1C3C3C?style=flat-square&logo=claude&logoColor=white" alt="Claude Agent SDK">
  <img src="https://img.shields.io/badge/MCP-1C3C3C?style=flat-square&logo=modelcontextprotocol&logoColor=white" alt="MCP">
  <img src="https://img.shields.io/badge/RAG-1C3C3C?style=flat-square" alt="RAG">
  <img src="https://img.shields.io/badge/LLM_Evals-1C3C3C?style=flat-square" alt="LLM Evals">
  <img src="https://img.shields.io/badge/Function_Calling-1C3C3C?style=flat-square" alt="Function Calling">
</p>

<p align="center"><b>Quality & Tooling</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux">
  <img src="https://img.shields.io/badge/GNU_Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white" alt="Bash">
  <img src="https://img.shields.io/badge/Ruff-261230?style=flat-square&logo=ruff&logoColor=white" alt="Ruff">
  <img src="https://img.shields.io/badge/mypy-444C56?style=flat-square" alt="mypy">
  <img src="https://img.shields.io/badge/tsc-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="tsc">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Clippy-DEA584?style=flat-square&logo=rust&logoColor=black" alt="Clippy">
  <img src="https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white" alt="pytest">
  <img src="https://img.shields.io/badge/vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white" alt="vitest">
  <img src="https://img.shields.io/badge/import--linter-444C56?style=flat-square" alt="import-linter">
  <img src="https://img.shields.io/badge/k6-7D64FF?style=flat-square&logo=k6&logoColor=white" alt="k6">
</p>

### ✉️ Contact

<p align="center">
  <a href="mailto:daftpunk.wav@outlook.com"><img alt="Outlook" src="https://img.shields.io/badge/daftpunk.wav%40outlook.com-0078D4?style=flat-square"></a>
  <a href="mailto:daftpunkwav@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/daftpunkwav%40gmail.com-EA4335?style=flat-square"></a>
</p>
