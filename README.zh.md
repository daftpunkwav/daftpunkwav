> Language: [English](README.md) | **简体中文**

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

### 🧭 关于我

喜欢动手把想法做成能用的东西。最感兴趣的方向是让 AI 不止于聊天，而是能自己规划步骤、使用工具、从错误里恢复，把一件事从头做到尾——围绕这件事，我陆续实现了一个 Agent 需要的各个组成部分：执行循环、多 Agent 协作、记忆与检索、评测与对照实验，也补齐了不少让它们能长时间稳定运行的底层组件，比如限流、熔断、幂等认领。

前后端都写，Python 和 TypeScript 是主力，也喜欢用 Go 和 Rust 写贴近系统层面的东西。做东西时习惯从界面到底层一起考虑：用起来要顺手，结构要经得起往后改。

比起「做出来」，我更在意「做得住」：边界清楚、出错能查、下次还能接着改。这些项目大多从一个自己真实的需求开始，做着做着就长成了现在这个样子。

### 🚀 项目

**[real-mock](https://github.com/daftpunkwav/real-mock)** — AI 模拟面试平台
上传简历，和 AI 面试官来一场带语音的模拟面试：会提问、会追问、会打分，还有负责编程考核与评分复核的其他角色；从简历修改建议到面试报告，一个人就能练完整套流程。
`Next.js` `FastAPI` `WebSocket` `SQLite` `ChromaDB` `faster-whisper` `Docker`

**[voyager](https://github.com/daftpunkwav/voyager)** — 人机共用的 AI 工作台
把代码仓库、文档、笔记放进同一个地方打理：你能点的每个按钮 AI 也能调用，AI 能做的每件事你也能亲手做——人和 AI 用的是同一套功能。
`FastAPI` `React` `SQLite` `uv workspaces`

**[agent-prism](https://github.com/daftpunkwav/agent-prism)** — Agent 对照实验平台
同一个问题让十种不同的 Agent 方案同时作答，答题过程并排实时可见：谁答得好、为什么好，用数据说话，选框架、调策略不用再靠感觉。
`TypeScript` `Zod` `pnpm monorepo` `Hono` `SSE`

**[wave-code](https://github.com/daftpunkwav/wave-code)** — AI 编程助手
一个能长时间自己干活的编程助手：会把大任务拆成小步推进，中途断了能从断点接着跑；干没干成不看它自己怎么说，以工作区的最终状态为准。
`Rust` `MCP`

**[breakwater](https://github.com/daftpunkwav/breakwater)** — LLM 网关
站在应用和大模型之间的一道闸门：谁访问太快了拦一拦，上游挂了自动换备用，用量算得清清楚楚，让依赖大模型的服务稳得住。
`Go` `Redis` `k6`

**[rutter](https://github.com/daftpunkwav/rutter)** — AI Agent 的浏览器
给 AI 配一个真实的浏览器：能打开网页、看懂页面结构、替用户点按钮填表单，遇到敏感操作会先停下来等人确认。
`Rust` `CDP` `MCP`

**[cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp)** — 联网搜索 MCP 服务器
让 AI 能上网搜索：接了多个搜索源，这条不行自动换下一条，也可以几条一起查、结果合并去重；不接客户端，命令行里也能直接搜。
`TypeScript` `MCP`

### 🧰 技术栈

<p align="center"><b>语言</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black" alt="Rust">
  <img src="https://img.shields.io/badge/C%23-512BD4?style=flat-square" alt="C#">
</p>

<p align="center"><b>前端</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/SSE-444C56?style=flat-square" alt="SSE">
  <img src="https://img.shields.io/badge/WebSocket-444C56?style=flat-square" alt="WebSocket">
</p>

<p align="center"><b>后端与数据</b></p>

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

<p align="center"><b>AI 与 Agent</b></p>

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

<p align="center"><b>质量与工具</b></p>

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

### ✉️ 联系

<p align="center">
  <a href="mailto:daftpunk.wav@outlook.com"><img alt="Outlook" src="https://img.shields.io/badge/daftpunk.wav%40outlook.com-0078D4?style=flat-square"></a>
  <a href="mailto:daftpunkwav@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/daftpunkwav%40gmail.com-EA4335?style=flat-square"></a>
</p>
