> Language: [简体中文](README.md) | **English**

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/github-contribution-grid-snake-dark.svg">
    <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/github-contribution-grid-snake.svg" alt="contribution snake">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/typing-dark.svg">
    <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/typing-light.svg" alt="typing">
  </picture>
</p>

---

### 🧭 About

I like building things that actually work. Over the last two years most of my time has gone into AI agents: getting one to plan steps, call tools, and pick itself back up after an error, instead of needing a human at every turn. When something gets in the way I write the code myself, and that is where the projects below came from: a coding assistant that can resume where it stopped, an LLM gateway with rate limiting and circuit breaking, a tool for comparing agent setups side by side.

I do use AI to write code, but my PRs and commit history show the gates are strict: type checks, architecture boundaries, and failure-recovery tests are all there.

I have been through thirty-plus agents, mainstream and experimental alike. Plenty of opinions, too many to fit on this page, so I wrote one page per tool, such as Claude Code, Codex CLI, pi, Cursor, OpenCode, dsh, Grok Build, Kimi Code...: [agent usage notes](./notes/agents/).

Most of what I write is in Python and TypeScript; Go, C/C++, and Rust come up too. C# is probably my favourite.

Racing and music are my other two hobbies. I follow F1, MotoGP, and GT racing. I listen to house and trance, with Kygo, Deadmau5, Eric Prydz, and Daft Punk in heaviest rotation. I have made some music of my own in FL Studio, Ableton Live, and Cubase, and someday I want to build my own plugin, a reverb, a compressor, or a synth. I play a lot of games, and before agents took off I was trying to make one. Then I found building agents more interesting than building games, and have been at it ever since.

Most of these projects started from a real need of my own and grew from there. I am still learning new things all the time, turning my own ideas into working software, and I hope to hear honest feedback from real users.

### 🚀 Projects

| Project | What it is | How it works | Stack |
| :--- | :--- | :--- | :--- |
| **[real-mock](https://github.com/daftpunkwav/real-mock)** | A resume review and mock interview platform | The interview runs on a state machine, and each step ends by compressing the transcript into a structured summary; the resume is scored on 12 dimensions, with PDFs rendered to images for the model to read; the coding part runs Python in the browser | `Next.js` `FastAPI` `SQLite` `faster-whisper` |
| **[voyager](https://github.com/daftpunkwav/voyager)** | A local-first workbench humans and agents share | One capability registration has three entry points (in-process calls, REST, and MCP), and a human and an agent walk the same auth, quota, and audit chain; the event log is the single source of truth, and it can be replayed | `FastAPI` `React` `SQLite` `MCP` |
| **[agent-prism](https://github.com/daftpunkwav/agent-prism)** | A side-by-side lab for comparing agent setups | 16 built-in dimensions, one variable changed at a time, ten drivers running in parallel with the process streamed out; the report puts elapsed time, tokens, tool calls, and an ablation table next to each other | `TypeScript` `Hono` `SSE` `Zod` |
| **[wave-code](https://github.com/daftpunkwav/wave-code)** | A command line coding agent written in Rust | A turn state machine goes sample, decide, execute, recover, with tools and policy decoupled behind traits; history changes go into a local journal, so a crash loses at most the step in progress; long turns are carried by a goal | `Rust` `MCP` `tokio` |
| **[breakwater](https://github.com/daftpunkwav/breakwater)** | An LLM governance gateway for several wire protocols | Three protocols feed one governance pipeline; rate limiting is a hand-written token bucket (RPM and TPM), circuit breaking has three strategies to pick from, and a failed upstream is failed over in candidate order; quota is reserved and settled with leases | `Go` `Redis` `PostgreSQL` `Docker` |
| **[rutter](https://github.com/daftpunkwav/rutter)** | A real browser service for AI agents | 25 MCP tools drive a real Chrome; the page snapshot is trimmed into an accessibility tree under a 20,000 character budget instead of handing over raw DOM; writing cookies, uploading files, and file:// navigation need a human to approve | `Rust` `MCP` `CDP` |
| **[cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp)** | A multi-channel web search MCP service | Kimi, MiMo, StepFun, and Zhipu speak four different wire formats, all normalised into one result shape; it can fall back one by one or query them at once and merge by normalised URL; cancelled, timed out, and all failed are three different outcomes | `TypeScript` `MCP` `Node.js` |
| **[re-resume](https://github.com/daftpunkwav/re-resume)** | A local-first desktop resume workbench | The experience library is the source of truth: a claim is confirmed, pending, or rejected, and a block may only quote confirmed wording; layout is a pure function, and the canvas and the agent call the same function with the same measurer; the 12 agent tools validate against closed schemas, and write operations only take ids | `Tauri 2` `React` `SQLite` `Konva` |

### 📝 Notes

Each agent tool has a page of its own, and the details are here:

- **[Agent usage notes](./notes/agents/)**: one page per agent tool: what shape it is, how it is built, what I use it for, and when I reach for it. (Chinese)
- **[Notes on techniques and concepts](./notes/concepts/)**: my own read on the specific choices: resumable execution, idempotent claims, human-in-the-loop, rate limiting and circuit breaking, streaming-first, MCP as a tool contract, parallel A/B tests, shared primitives for humans and agents, context budgets. (Chinese)

### 🧰 Tech Stack

|  |  |
|---|---|
| **Languages** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black) ![C%23](https://img.shields.io/badge/C%23-512BD4?style=flat-square) ![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black) ![C%2B%2B](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white) |
| **AI & Agents** | ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white) ![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square) ![OpenAI_SDK](https://img.shields.io/badge/OpenAI_SDK-412991?style=flat-square) ![Claude_Agent_SDK](https://img.shields.io/badge/Claude_Agent_SDK-1C3C3C?style=flat-square&logo=claude&logoColor=white) ![DeepAgents](https://img.shields.io/badge/DeepAgents-1C3C3C?style=flat-square) ![AutoGen](https://img.shields.io/badge/AutoGen-1C3C3C?style=flat-square) ![CrewAI](https://img.shields.io/badge/CrewAI-1C3C3C?style=flat-square) ![MCP](https://img.shields.io/badge/MCP-1C3C3C?style=flat-square&logo=modelcontextprotocol&logoColor=white) |
| **Backend & runtime** | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white) ![ASP.NET](https://img.shields.io/badge/ASP.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3068B2?style=flat-square&logo=zod&logoColor=white) |
| **Rust & systems** | ![tokio](https://img.shields.io/badge/tokio-444C56?style=flat-square&logo=tokio&logoColor=white&v=2) ![axum](https://img.shields.io/badge/axum-444C56?style=flat-square) ![reqwest](https://img.shields.io/badge/reqwest-444C56?style=flat-square) ![tree-sitter](https://img.shields.io/badge/tree--sitter-444C56?style=flat-square) ![chromiumoxide](https://img.shields.io/badge/chromiumoxide-444C56?style=flat-square&v=2) |
| **Frontend & interaction** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Preact](https://img.shields.io/badge/Preact-673AB8?style=flat-square&logo=preact&logoColor=white) ![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-444C56?style=flat-square) ![TanStack_Query](https://img.shields.io/badge/TanStack_Query-444C56?style=flat-square&logo=tanstack&logoColor=white&v=2) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white) |
| **Data & storage** | ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=flat-square) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white) ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6F00?style=flat-square) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white) |
| **Engineering & tooling** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub_Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![uv](https://img.shields.io/badge/uv-DE5FE9?style=flat-square&v=2) ![pnpm](https://img.shields.io/badge/pnpm-F9AD00?style=flat-square&logo=pnpm&logoColor=black&v=2) ![Ruff](https://img.shields.io/badge/Ruff-261230?style=flat-square&logo=ruff&logoColor=white) ![mypy](https://img.shields.io/badge/mypy-444C56?style=flat-square) ![tsc](https://img.shields.io/badge/tsc-3178C6?style=flat-square&logo=typescript&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ![Clippy](https://img.shields.io/badge/Clippy-DEA584?style=flat-square&logo=rust&logoColor=black) ![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white) ![vitest](https://img.shields.io/badge/vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![import-linter](https://img.shields.io/badge/import--linter-444C56?style=flat-square) ![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square&logo=k6&logoColor=white) ![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square) |

### 📊 Stats

<p align="center">
  <a href="https://github.com/daftpunkwav?tab=repositories">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-languages.en-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-languages.en-light.svg" alt="most used languages" width="49%">
    </picture>
  </a>
  <a href="https://github.com/daftpunkwav/daftpunkwav/commits/main">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-stats.en-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-stats.en-light.svg" alt="repository and contribution" width="49%">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://github.com/daftpunkwav?tab=repositories">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-licenses.en-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-licenses.en-light.svg" alt="open source licenses" width="49%">
    </picture>
  </a>
  <a href="https://github.com/daftpunkwav?tab=repositories&sort=updated">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-projects.en-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-projects.en-light.svg" alt="recently active projects" width="49%">
    </picture>
  </a>
</p>

### ✉️ Contact

<p align="center">
  <a href="mailto:daftpunk.wav@outlook.com"><img alt="Outlook" src="https://img.shields.io/badge/daftpunk.wav%40outlook.com-0078D4?style=flat-square&logo=microsoftoutlook&logoColor=white"></a>
  <a href="mailto:daftpunkwav@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/daftpunkwav%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white"></a>
  <a href="https://x.com/daftpunkwave"><img alt="X" src="https://img.shields.io/badge/%40daftpunkwave-000000?style=flat-square&logo=x&logoColor=white"></a>
  <a href="https://discord.com/users/daftpunkwav"><img alt="Discord" src="https://img.shields.io/badge/daftpunkwav-5865F2?style=flat-square&logo=discord&logoColor=white"></a>
  <a href="https://www.reddit.com/user/AU1CII"><img alt="Reddit" src="https://img.shields.io/badge/AU1CII-FF4500?style=flat-square&logo=reddit&logoColor=white"></a>
</p>
