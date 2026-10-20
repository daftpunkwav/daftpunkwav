# Crush

> Charm · 终端 AI 编码代理 · 开源（Go，协议以仓库 LICENSE 为准）

## 是什么

Charm 做的终端编码代理，同一批人做出了 Bubble Tea、 Lip Gloss 这些 TUI 库，所以它的界面是这一批里最有味道的。

## 技术形态

- **Go 写的单二进制**：安装简单，没有运行时依赖。
- **TUI 优先**：多会话、多面板、diff 预览都做在终端里，不是简单的 readline 循环。
- **内置 LSP**：能拿语言服务器做诊断和跳转。
- **多模型**：支持多家 provider，也支持本地模型。
- **会话可恢复**：会话存在本地，可以接着上次继续。

## 我的使用结论

**适合**：喜欢终端、不想装 Node / Python 环境的人；以及单纯想体验一个「做得漂亮的 TUI Agent」。

**不适合**：需要复杂编排、后台任务、子代理能力的场景——它更专注于「一个人在一个终端里写代码」这件事。

**和其他工具比**：在 CLI Agent 里，Crush 的界面完成度是少数派水平，用起来舒服。它和 Aider、OpenCode 处在同一档——开源、可换模型、但自主性不如 Claude Code / Codex CLI 那一档。

## 参考

- [Crush 仓库](https://github.com/charmbracelet/crush)
