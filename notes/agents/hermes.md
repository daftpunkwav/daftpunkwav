# Hermes Agent

> Nous Research · 终端 Agent · 开源

## 是什么

Nous Research 做的 Agent，官方一句话是 The agent that grows with you，重点在会跟着你长：记忆、技能、习惯这些都做成可积累、可迁移的东西。

## 技术形态

- **CLI 为核心**：社区生态基本都围着 CLI 长：Web UI、桌面伴侣、知识库问答应用、各种把 Hermes 接进别的工具的适配器。
- **社区配套齐全**：有专门的 WebUI 项目、桌面端、macOS / iOS 客户端（走自托管的 Hermes Agent API Server），还有把它当常驻员工接进公司流程的适配器。
- **和主流 Agent 的互操作**：社区有人写 skill 让 Claude Code 把动手的活儿交给 Hermes CLI，方向正好相反，各取所长。

## 我的使用结论

**适合**：想要一个有记忆、会积累经验的长期 Agent，而不是每次都从零开始；以及愿意折腾周边生态的人。

**不适合**：想要稳定接口的团队。它周围的项目大多是个人的实验，依赖关系容易断。

**和其他工具比**：Hermes 和 dsh 有一个共同点：都把长期积累当成 Agent 的核心能力，而不是把上下文窗口当唯一记忆。它更激进的地方在于把这件事做成了社区协议（CLI + API Server + 各种客户端），而不只是产品内功能。

## 参考

- [hermes-agent 仓库](https://github.com/NousResearch/hermes-agent)
- [Hermes WebUI](https://github.com/nesquena/hermes-webui)
