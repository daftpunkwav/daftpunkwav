> Language: [简体中文](README.md) | **English**

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/github-contribution-grid-snake-dark.svg">
    <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/github-contribution-grid-snake.svg" alt="contribution snake">
  </picture>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1200&center=true&vCenter=true&width=700&height=44&lines=LLM+Agents+%C2%B7+RAG+%C2%B7+Streaming+%C2%B7+Evals+%C2%B7+Tools+%C2%B7+Memory;Python+%C2%B7+TypeScript+%C2%B7+C%23+%C2%B7+Go+%C2%B7+C/C%2B%2B+%C2%B7+Rust" alt="typing">
</p>

---

### 🧭 About

I like building things that actually work. What interests me most is making AI more than a chat box: getting it to plan steps, use tools, recover from mistakes, and carry a task from start to finish. Around that idea I have built, piece by piece, the parts an agent needs: **execution loops**, **multi-agent coordination**, **memory and retrieval**, **evaluation and side-by-side experiments**, plus the quiet components underneath that decide how long it keeps running, like **rate limiting**, **circuit breaking**, and **idempotent claims**.

I write code with AI, but my PRs and commit history show the habit: the gates are strict — **static types across the stack**, **architecture-boundary linters**, **failure-recovery tests** — and edge cases, resilience, and robustness are what I watch closest.

I have been through thirty-plus agents so far, mainstream and experimental alike. Plenty of opinions, but this page is too small to hold them, so I wrote one page per tool: [agent usage notes](./notes/agents/). The eight I reach for most are Claude Code, Codex CLI, pi, Cursor, OpenCode, dsh, Grok Build, and Kimi Code.

I write both frontend and backend, mostly in Python and TypeScript, with Go and Rust for things closer to the system level, and C# and C/C++ as well.

Racing and music are my other two hobbies. I follow F1, MotoGP, and GT racing. I listen to house and trance, with Kygo, Deadmau5, Eric Prydz, and Daft Punk in heaviest rotation. I have made some music of my own in FL Studio, Ableton Live, and Cubase, and someday I want to build my own plugin, a reverb or a synth. I play a lot of games, and before agents took off I was trying to make one. Then I found building agents even more addictive than building games, and I have been at it since.

Most of these projects started from a real need of my own and grew from there. I want to keep learning new things and turning my own ideas into working software, and I hope to hear honest feedback from real users.

### 🚀 Projects

#### ⚙️ Agent runtime and infrastructure

| Project | What it is | How it works | Stack |
| :--- | :--- | :--- | :--- |
| **[wave-code](https://github.com/daftpunkwav/wave-code)** | A coding assistant built for long stretches of work | One ReAct loop with trait seams that invert the dependencies; a block-level write-ahead journal makes long tasks resumable, and **whether the work actually landed is decided by assertions on the workspace, not by the model's own word**; when no OS sandbox backend is available it refuses to run | `Rust` `MCP` `tokio` `tree-sitter` |
| **[breakwater](https://github.com/daftpunkwav/breakwater)** | A multi-protocol LLM gateway | One pipeline serves OpenAI Chat, OpenAI Responses, and Anthropic Messages on the wire; token-bucket rate limiting (RPM + TPM), three circuit-breaker strategies with failover, and lease-based quota accounting — with **rate limiting, breaking, and request de-duplication all hand-built and enforced by lint rules** | `Go` `Redis` `PostgreSQL` `k6` |
| **[rutter](https://github.com/daftpunkwav/rutter)** | A real browser for AI agents | 25 browser tools over MCP; the page is trimmed into a budgeted accessibility tree with collision-proof stable refs, and **sensitive actions are judged host-side** and wait for a human to approve | `Rust` `CDP` `MCP` `chromiumoxide` |
| **[cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp)** | A multi-source web search MCP server | One tool folds several providers together, falling back in series or querying in parallel and merging results; **a cancelled client and a failed upstream are modelled as two different outcomes**, not one | `TypeScript` `MCP` |

#### 🖥️ Agent evaluation and full-stack applications

| Project | What it is | How it works | Stack |
| :--- | :--- | :--- | :--- |
| **[real-mock](https://github.com/daftpunkwav/real-mock)** | Resume review plus a realistic voice interview loop | An interview state machine with compaction at step boundaries, and a 12-dimension resume review that reads PDFs visually; a WebSocket interview room, with Python running right in the browser for the coding part | `Next.js` `FastAPI` `WebSocket` `ChromaDB` `faster-whisper` |
| **[voyager](https://github.com/daftpunkwav/voyager)** | A local-first workbench humans and agents share | One capability registration projects into in-process calls, REST, and MCP, and **a human and an agent walk the same auth → quota → validation → audit chain**; a replayable event log is the single source of truth | `FastAPI` `React` `SQLite` `import-linter` |
| **[agent-prism](https://github.com/daftpunkwav/agent-prism)** | A lab for comparing agent setups | Sixteen dimensions routed one variable at a time, ten heterogeneous frameworks running side by side under one event protocol; deterministic checks plus reflection feedback, so **picking a framework or tuning a strategy is a data question, not a gut feeling** | `TypeScript` `Hono` `SSE` `Zod` |
| **[re-resume](https://github.com/daftpunkwav/re-resume)** · WIP | A local-first resume workbench | A Tauri 2 desktop app with an experience library, versioned documents, and undo/redo; layout is a pure function shared by the canvas and the agent, and **the agent's write access is capped at the type level** | `Tauri 2` `React` `SQLite` `Rust` `Zod` |

### 📝 Notes

I did not want to leave it at "I have used it", so there is a directory for the details:

- **[Agent usage notes](./notes/agents/)** — one page per agent tool: what shape it is, what it is built like, what I use it for, and when I reach for it. (Chinese)
- **[Notes on techniques and concepts](./notes/concepts/)** — my own read on the specific choices: resumable execution, idempotent claims, human-in-the-loop, rate limiting and circuit breaking, streaming-first, MCP as a tool contract, parallel A/B tests, shared primitives for humans and agents, context budgets. (Chinese)

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
