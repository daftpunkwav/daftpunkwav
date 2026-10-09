> Language: [简体中文](README.md) | **English**

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

I like building things that actually work. What interests me most is making AI more than a chat box: getting it to plan steps, use tools, recover from mistakes, and carry a task from start to finish. Around that idea I have built, piece by piece, the parts an agent needs: execution loops, multi-agent coordination, memory and retrieval, evaluation and side-by-side experiments, plus the quiet components underneath that decide how long it keeps running, like rate limiting, circuit breaking, and idempotent claims.

I write code with AI, but my PRs and commit history show the habit: I keep the gates strict, and edge cases, resilience, and robustness are what I watch closest. I have been through thirty-plus agents so far: codex, claude, pi, cursor, devin, opencode, dsh, omp, cline, aider, grok build, Kimi Code, MiniMax Code, zcode, TRAE SOLO, Qoder, Xiaomi MiMo, Antigravity, lobehub, hermes, crush, codewhale, deepcode, goose, resonix, workboddy... plenty of opinions, but this page is too small to hold them. I write both frontend and backend, mostly in Python and TypeScript, and I enjoy Go and Rust for things closer to the system level.

Racing and music are my other two hobbies. I follow F1, MotoGP, and GT racing. I listen to house and trance, with Kygo, Deadmau5, Eric Prydz, and Daft Punk in heaviest rotation. I have made some music of my own in FL Studio, Ableton Live, and Cubase, and someday I want to build my own plugin, a reverb or a synth. I play a lot of games, and before agents took off I was trying to make one. Then I found building agents even more addictive than building games, and I have been at it since.

Most of these projects started from a real need of my own and grew from there. I want to keep learning new things and turning my own ideas into working software, and I hope to hear honest feedback from real users.

### 🚀 Projects

**[real-mock](https://github.com/daftpunkwav/real-mock)**: AI mock interview platform
Upload a resume, then run a voice mock interview with an AI interviewer: it asks, follows up, and scores, with other roles handling the coding challenge and score review. From resume feedback to interview report, one person can practice the whole loop.
`Next.js` `FastAPI` `WebSocket` `SQLite` `ChromaDB` `faster-whisper` `Docker`

**[voyager](https://github.com/daftpunkwav/voyager)**: An AI workbench humans and agents share
Keep repos, documents, and notes in one place: every button you can click, an AI can call too; everything an AI can do, you can do by hand. Both sides use the same features.
`FastAPI` `React` `SQLite` `uv workspaces`

**[agent-prism](https://github.com/daftpunkwav/agent-prism)**: Agent comparison lab
Ask one question to ten different agent setups and watch the answers stream in side by side: who did better, and why, is settled by data. Picking a framework or tuning a strategy stops being guesswork.
`TypeScript` `Zod` `pnpm monorepo` `Hono` `SSE`

**[wave-code](https://github.com/daftpunkwav/wave-code)**: AI coding assistant
A coding assistant that works on its own for long stretches: it breaks big tasks into small steps and resumes from where it stopped. Whether it actually succeeded isn't taken from its own word; the final state of the workspace decides.
`Rust` `MCP`

**[breakwater](https://github.com/daftpunkwav/breakwater)**: LLM gateway
A gate between your app and large language models: it slows down anyone sending too much, switches to a backup when an upstream fails, and keeps every request accounted for, so services that depend on LLMs stay steady.
`Go` `Redis` `k6`

**[rutter](https://github.com/daftpunkwav/rutter)**: A browser for AI agents
Gives AI a real browser: it opens pages, understands what's on them, and clicks buttons and fills forms for you, pausing to ask a human before anything sensitive.
`Rust` `CDP` `MCP`

**[cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp)**: Web search MCP server
Lets AI search the web: several search providers behind one tool, falling back to the next one automatically when a provider fails, or querying several at once and merging the results. Works from the command line too, no client needed.
`TypeScript` `MCP`

### 🧰 Tech Stack

|  |  |
|---|---|
| **Languages** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black) ![C%2B%2B](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white) ![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black) ![C%23](https://img.shields.io/badge/C%23-512BD4?style=flat-square) ![Lua](https://img.shields.io/badge/Lua-000080?style=flat-square&logo=lua&logoColor=white) |
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) ![SSE](https://img.shields.io/badge/SSE-444C56?style=flat-square) ![WebSocket](https://img.shields.io/badge/WebSocket-444C56?style=flat-square) |
| **Backend & Data** | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white) ![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3068B2?style=flat-square&logo=zod&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=flat-square) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white) ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6F00?style=flat-square) |
| **AI & Agents** | ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white) ![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square) ![DeepAgents](https://img.shields.io/badge/DeepAgents-1C3C3C?style=flat-square) ![AutoGen](https://img.shields.io/badge/AutoGen-1C3C3C?style=flat-square) ![CrewAI](https://img.shields.io/badge/CrewAI-1C3C3C?style=flat-square) ![Claude Agent SDK](https://img.shields.io/badge/Claude_Agent_SDK-1C3C3C?style=flat-square&logo=claude&logoColor=white) ![MCP](https://img.shields.io/badge/MCP-1C3C3C?style=flat-square&logo=modelcontextprotocol&logoColor=white) ![RAG](https://img.shields.io/badge/RAG-1C3C3C?style=flat-square) ![LLM Evals](https://img.shields.io/badge/LLM_Evals-1C3C3C?style=flat-square) ![Function Calling](https://img.shields.io/badge/Function_Calling-1C3C3C?style=flat-square) |
| **Quality & Tooling** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![GNU Bash](https://img.shields.io/badge/GNU_Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white) ![xmake](https://img.shields.io/badge/xmake-444C56?style=flat-square) ![Ruff](https://img.shields.io/badge/Ruff-261230?style=flat-square&logo=ruff&logoColor=white) ![mypy](https://img.shields.io/badge/mypy-444C56?style=flat-square) ![tsc](https://img.shields.io/badge/tsc-3178C6?style=flat-square&logo=typescript&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ![Clippy](https://img.shields.io/badge/Clippy-DEA584?style=flat-square&logo=rust&logoColor=black) ![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white) ![vitest](https://img.shields.io/badge/vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![import--linter](https://img.shields.io/badge/import--linter-444C56?style=flat-square) ![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square&logo=k6&logoColor=white) |

### ✉️ Contact

<p align="center">
  <a href="mailto:daftpunk.wav@outlook.com"><img alt="Outlook" src="https://img.shields.io/badge/daftpunk.wav%40outlook.com-0078D4?style=flat-square"></a>
  <a href="mailto:daftpunkwav@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/daftpunkwav%40gmail.com-EA4335?style=flat-square"></a>
</p>
<p align="center">
  <a href="https://x.com/daftpunkwave"><img alt="X" src="https://img.shields.io/badge/%40daftpunkwave-000000?style=flat-square&logo=x&logoColor=white"></a>
  <a href="https://discord.com/users/daftpunkwav"><img alt="Discord" src="https://img.shields.io/badge/daftpunkwav-5865F2?style=flat-square&logo=discord&logoColor=white"></a>
  <a href="https://www.reddit.com/user/AU1CII"><img alt="Reddit" src="https://img.shields.io/badge/AU1CII-FF4500?style=flat-square&logo=reddit&logoColor=white"></a>
</p>
