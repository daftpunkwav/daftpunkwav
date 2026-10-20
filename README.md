> Language: **简体中文** | [English](README.en.md)

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

### 🧭 关于我

喜欢动手把想法做成能用的东西。最近两年我的时间基本都花在 AI Agent 上：让它自己规划步骤、调用工具、出了错能接着干，而不是每一步都要人盯着。碰到的问题我自己写代码解决，于是攒下了下面这些项目：从能断点续跑的编程助手，到带限流熔断的模型网关，再到能并排比较不同 Agent 方案的评测工具。

写代码我用 AI 帮忙，但翻翻我的 PR 和 commit 就知道门禁卡得挺严：类型检查、架构边界、故障恢复这些该有的都有。

用过的 Agent 三十多个，主流的、实验性的都试过一遍，感受很多，这里写不下，所以每个都单独记了一份，如 Claude Code、Codex CLI、pi、Cursor、OpenCode、dsh、Grok Build、Kimi Code……：[Agent 使用记录](./notes/agents/)。

目前写得多的是 Python 和 TypeScript，Go、C/C++、Rust 也都写过，最喜欢的语言大概是 C#。

竞速和音乐是另外两个爱好。F1、MotoGP、GT 这类比赛我都追；听 House 和 Trance，Kygo、Deadmau5、Eric Prydz、Daft Punk 这些听得最多。自己也做过音乐，FL Studio、Ableton Live、Cubase 都用过，以后想做一个自己的插件，混响、压缩或者合成器。游戏玩得多，Agent 火起来之前我就在试着自己做游戏，后来发现做 Agent 比做游戏还有意思，就一直做到现在。

项目大多从一个自己真实的需求开始，做着做着就长成了现在这个样子。我还在不停地学新东西，把自己的想法做出来，也希望听到真实用户的反馈。

### 🚀 项目

| 项目 | 定位 | 核心机制 | 技术栈 |
| :--- | :--- | :--- | :--- |
| **[real-mock](https://github.com/daftpunkwav/real-mock)** | 简历解析 + 拟真语音面试闭环 | 面试按状态机走，每一步结束把对话压成结构化摘要；简历从 12 个维度评价，PDF 会转成图片让模型看；WebSocket 实时对话，编程题在浏览器里直接跑 Python | `Next.js` `FastAPI` `WebSocket` `ChromaDB` `faster-whisper` |
| **[voyager](https://github.com/daftpunkwav/voyager)** | 本地优先的人机共用工作台 | 一个能力注册后同时接出进程内调用、REST 和 MCP 三套入口，人和 AI 走同一条鉴权、配额、审计链路；事件日志是唯一事实源，可以回放 | `FastAPI` `React` `SQLite` `import-linter` |
| **[agent-prism](https://github.com/daftpunkwav/agent-prism)** | Agent 对照实验与评测平台 | 16 个维度一次只换一个变量，十种框架并排跑，过程流式输出；结论由自动判据给出，选框架不用凭感觉 | `TypeScript` `Hono` `SSE` `Zod` |
| **[wave-code](https://github.com/daftpunkwav/wave-code)** | 长周期自主编程助手 | 核心是一个 ReAct 循环；任务状态记在本地 journal 里，断了能接着跑；做没做成看工作区的实际状态，不看模型自己怎么说；没有可用沙箱就直接拒绝运行 | `Rust` `MCP` `tokio` `tree-sitter` |
| **[breakwater](https://github.com/daftpunkwav/breakwater)** | 多协议 LLM 网关 | 一套代码同时接 OpenAI Chat、OpenAI Responses 和 Anthropic Messages 三种协议；限流用令牌桶，熔断分三种策略，上游挂了能自动切换；额度按 lease 记账 | `Go` `Redis` `PostgreSQL` `k6` |
| **[rutter](https://github.com/daftpunkwav/rutter)** | 给 Agent 用的真实浏览器 | 通过 MCP 提供 25 个浏览器工具；页面按字符预算裁剪后再交给模型，成本不随页面长度一直涨；敏感操作在宿主侧拦下来，等人确认 | `Rust` `CDP` `MCP` `chromiumoxide` |
| **[cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp)** | 多源联网搜索 MCP 服务 | 一个工具接多家搜索源，可以逐个降级，也可以并发查完再合并去重；客户端取消和上游失败是两回事，分别报 | `TypeScript` `MCP` |
| **[re-resume](https://github.com/daftpunkwav/re-resume)** · WIP | 本地优先的简历工作台 | Tauri 2 桌面端，经历库、文档版本和撤销重做；排版是纯函数，画布和 AI 用同一份结果；AI 能写什么由类型定死 | `Tauri 2` `React` `SQLite` `Rust` `Zod` |

### 📝 笔记

不想只写一句用过就算完，所以细节都放在这里：

- **[Agent 使用记录](./notes/agents/)**：用过的 Agent 工具逐个介绍：它是什么形态、怎么搭的、我拿它干什么、什么情况下会打开它。
- **[技术与概念评述](./notes/concepts/)**：我对具体做法的判断：断点续跑、幂等认领、人工确认、限流熔断、流式优先、MCP 作为工具契约、并行对照实验、人机同权、上下文预算。

### 🧰 技术栈

|  |  |
|---|---|
| **主力语言** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black) ![C%23](https://img.shields.io/badge/C%23-512BD4?style=flat-square) ![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black) ![C%2B%2B](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white) |
| **AI 与 Agent** | ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white) ![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square) ![OpenAI_SDK](https://img.shields.io/badge/OpenAI_SDK-412991?style=flat-square) ![Claude_Agent_SDK](https://img.shields.io/badge/Claude_Agent_SDK-1C3C3C?style=flat-square&logo=claude&logoColor=white) ![DeepAgents](https://img.shields.io/badge/DeepAgents-1C3C3C?style=flat-square) ![AutoGen](https://img.shields.io/badge/AutoGen-1C3C3C?style=flat-square) ![CrewAI](https://img.shields.io/badge/CrewAI-1C3C3C?style=flat-square) ![MCP](https://img.shields.io/badge/MCP-1C3C3C?style=flat-square&logo=modelcontextprotocol&logoColor=white) |
| **后端与运行时** | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![Hono](https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white) ![ASP.NET](https://img.shields.io/badge/ASP.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3068B2?style=flat-square&logo=zod&logoColor=white) |
| **Rust 与底层** | ![tokio](https://img.shields.io/badge/tokio-444C56?style=flat-square&logo=tokio&logoColor=white&v=2) ![axum](https://img.shields.io/badge/axum-444C56?style=flat-square) ![reqwest](https://img.shields.io/badge/reqwest-444C56?style=flat-square) ![tree-sitter](https://img.shields.io/badge/tree--sitter-444C56?style=flat-square) ![chromiumoxide](https://img.shields.io/badge/chromiumoxide-444C56?style=flat-square&v=2) |
| **前端与交互** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Preact](https://img.shields.io/badge/Preact-673AB8?style=flat-square&logo=preact&logoColor=white) ![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-444C56?style=flat-square) ![TanStack_Query](https://img.shields.io/badge/TanStack_Query-444C56?style=flat-square&logo=tanstack&logoColor=white&v=2) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white) |
| **数据与存储** | ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=flat-square) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white) ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6F00?style=flat-square) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white) |
| **工程质量与工具链** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub_Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![uv](https://img.shields.io/badge/uv-DE5FE9?style=flat-square&v=2) ![pnpm](https://img.shields.io/badge/pnpm-F9AD00?style=flat-square&logo=pnpm&logoColor=black&v=2) ![Ruff](https://img.shields.io/badge/Ruff-261230?style=flat-square&logo=ruff&logoColor=white) ![mypy](https://img.shields.io/badge/mypy-444C56?style=flat-square) ![tsc](https://img.shields.io/badge/tsc-3178C6?style=flat-square&logo=typescript&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) ![Clippy](https://img.shields.io/badge/Clippy-DEA584?style=flat-square&logo=rust&logoColor=black) ![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white) ![vitest](https://img.shields.io/badge/vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![import-linter](https://img.shields.io/badge/import--linter-444C56?style=flat-square) ![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square&logo=k6&logoColor=white) ![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square) |

### 📊 数据

<p align="center">
  <a href="https://github.com/daftpunkwav?tab=repositories">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-languages.zh-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-languages.zh-light.svg" alt="most used languages" width="49%">
    </picture>
  </a>
  <a href="https://github.com/daftpunkwav/daftpunkwav/commits/main">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-stats.zh-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-stats.zh-light.svg" alt="repository and contribution" width="49%">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://github.com/daftpunkwav?tab=repositories">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-licenses.zh-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-licenses.zh-light.svg" alt="open source licenses" width="49%">
    </picture>
  </a>
  <a href="https://github.com/daftpunkwav?tab=repositories&sort=updated">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-projects.zh-dark.svg">
      <img src="https://raw.githubusercontent.com/daftpunkwav/daftpunkwav/output/profile-projects.zh-light.svg" alt="recently active projects" width="49%">
    </picture>
  </a>
</p>

### ✉️ 联系

<p align="center">
  <a href="mailto:daftpunk.wav@outlook.com"><img alt="Outlook" src="https://img.shields.io/badge/daftpunk.wav%40outlook.com-0078D4?style=flat-square&logo=microsoftoutlook&logoColor=white"></a>
  <a href="mailto:daftpunkwav@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/daftpunkwav%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white"></a>
  <a href="https://x.com/daftpunkwave"><img alt="X" src="https://img.shields.io/badge/%40daftpunkwave-000000?style=flat-square&logo=x&logoColor=white"></a>
  <a href="https://discord.com/users/daftpunkwav"><img alt="Discord" src="https://img.shields.io/badge/daftpunkwav-5865F2?style=flat-square&logo=discord&logoColor=white"></a>
  <a href="https://www.reddit.com/user/AU1CII"><img alt="Reddit" src="https://img.shields.io/badge/AU1CII-FF4500?style=flat-square&logo=reddit&logoColor=white"></a>
</p>
