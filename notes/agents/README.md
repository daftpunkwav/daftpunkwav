# Agent 使用记录

这里逐个记录我用过的 AI 编程 / 通用 Agent 工具。写法统一：**先说它是什么形态、怎么搭的，再说我的结论**。

不排名、不打分，因为场景不同结论就不同；只记在什么情况下我会打开它。

## 目录

| 工具 | 归属 | 形态 | 我拿它干什么 |
| :--- | :--- | :--- | :--- |
| [Claude Code](claude-code.md) | Anthropic | 终端 CLI | 读懂整个仓库之后的跨文件改动、长链路任务 |
| [Codex CLI](codex-cli.md) | OpenAI | 终端 CLI（开源） | 按明确步骤批量执行、照 spec 改接口 |
| [pi](pi.md) | badlogic / earendil-works | Agent 工具箱（开源） | 读 Agent 循环到底该怎么写，自己搭东西时抄 |
| [Cursor](cursor.md) | Anysphere | IDE | 日常写代码、补全与 inline edit 的主战场 |
| [OpenCode](opencode.md) | SST | 终端 Agent（开源） | 接自建网关、多 provider 自由切换的实验 |
| [dsh](dsh.md) | DeepSeek | 桌面 + Web GUI 的 harness | 一个界面统管后台任务、子代理和文件产出 |
| [Grok Build](grok-build.md) | xAI | Rust harness + 全屏 TUI（开源） | 常驻式终端工作区，顺便看 Agent 之间怎么互相调用 |
| [Kimi Code](kimi-code.md) | 月之暗面 | 终端 CLI（开源） | 国产模型路线 + Skills 体系的样本 |
| [Devin](devin.md) | Cognition | 云端异步工单 | 把明确、可验收的活儿外包出去，不占本地资源 |
| [omp](omp.md) | Stencil Labs | pi 的 IDE 增强版（开源） | 极简 Agent 底座 + IDE 打通 |
| [Cline](cline.md) | 社区 | VS Code 扩展（开源） | Plan/Act 双模式、逐步批准的过程可见性 |
| [Aider](aider.md) | 社区 | 终端结对编程（开源） | repo map 的实现值得抄 |
| [MiniMax Code](minimax-code.md) | MiniMax | 终端 CLI（开源） | 端到端围绕自家模型调的一套客户端 |
| [ZCode](zcode.md) | Z.ai | Agent harness（开源） | 官方插件市场做得比较完整 |
| [TRAE SOLO](trae-solo.md) | 字节跳动 | IDE 内的 SOLO 模式 | 先做上下文工程，再一口气跑完 |
| [Qoder](qoder.md) | 阿里 | agentic IDE | Repo Wiki + 规格驱动的 Quest 模式 |
| [MiMo Code](xiaomi-mimo-code.md) | 小米 | 终端 CLI（开源） | 把 harness 设计也当成模型能力一起研究 |
| [Antigravity](antigravity.md) | Google | agent-first IDE | 多个 Agent 并行 + 面向任务的界面 |
| [LobeHub](lobehub.md) | LobeHub | 自托管 Agent 平台 | 对话、知识库、插件市场，产品完成度高 |
| [Hermes Agent](hermes.md) | Nous Research | 终端 Agent | 记忆和技能会长期积累的形态 |
| [Crush](crush.md) | Charm | TUI 编码 Agent（开源，Go） | 这批 TUI 里完成度最高的一个 |
| [CodeWhale](codewhale.md) | CodeWhale | Rust 引擎 + 终端客户端（开源） | approvals + receipts，过程可回看 |
| [DeepCode](deepcode.md) | HKUDS / 社区 | 两个同名项目 | 同名项目越来越多，链接必须钉死 |
| [goose](goose.md) | Block | 本地 Agent（开源） | recipe + MCP 的组合，团队可分享 |
| [WorkBuddy](workboddy.md) | 腾讯 | 桌面办公 Agent | 面向知识工作而不是写代码 |
| [Resonix](resonix.md) | 未确认 | 未知 | 检索没找到同名的 Agent，先留着记录 |

## 怎么读这些条目

- **形态**一栏说的是这个工具以什么形式存在：终端、IDE、桌面应用、云端工单，还是一个可以自己拼的库。
- **技术形态**一栏只写可核实的部分：架构特点、扩展方式、权限模型这类能追到文档或源码的东西。
- **我的使用结论**一栏是主观的，写的是当时的判断，带时间属性。工具换得很快，隔半年回来看大概率要改。
- 想看怎么读这些结论，参见 [上级目录的约定](../README.md)。
