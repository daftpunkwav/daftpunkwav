# MiniMax Code

> MiniMax · 终端编码 Agent · 开源（MIT）

## 是什么

MiniMax 官方的终端编码 Agent，由 MiniMax 自己的模型驱动，客户端开源。

## 技术形态

- **TypeScript 实现，MIT 开源**：CLI 在 GitHub 上发布，npm 包是 `minimax-code`。
- **模型侧自研**：和 MiniMax 的自研模型（M2 系列）配套，端到端针对自家模型调过。
- **插件生态**：官方另有 `minimax_search`、MiniMax-MCP 等配套仓库，把搜索、MCP 接入这些外围能力补齐。
- **更激进的模型线**：MiniMax 同期还开源了 Mini-Agent 等更小、更实验性的 Agent 实现。

## 我的使用结论

**适合**：想用国产模型做端到端编码、并且愿意自己搭一层的开发者；也适合拿来做「模型和 Agent 一起迭代」的观察样本。

**不适合**：需要多 provider 切换的场合；以及对稳定性要求高、希望用久一点的工具——开源时间还不长，迭代很快。

**和其他工具比**：它和 MiMo Code、Kimi Code 是同一类：厂商把自己的模型和客户端绑在一起开源。区别在于 MiniMax 走的是「开源客户端 + 自家模型 + 外围插件」这套组合，插件生态是它比较用心的地方。

## 参考

- [minimax-code 仓库](https://github.com/MiniMax-AI/minimax-code)
- [MiniMax Code 下载页](https://agent.minimax.io/download)
