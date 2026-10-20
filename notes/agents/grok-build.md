# Grok Build

> xAI · 编码 Agent harness + TUI · 开源（Apache-2.0）

## 是什么

xAI 官方的编码 Agent。形态是一个 Rust 写的 harness 加一个全屏 TUI：可以鼠标交互、可扩展，定位是「能一直挂在手边用的编码环境」。

## 技术形态

- **Rust 写的单二进制 harness**：性能好、启动快，终端界面是自己画的。
- **全屏 + 鼠标可交互的 TUI**：不是简单的行式 REPL，可以在里面做多会话、文件浏览、diff 预览。
- **可扩展**：扩展机制是它的一等设计目标，而不是事后补丁。
- **能给别的 Agent 当后端**：官方另有一个 Claude Code 插件（`grok-build-plugin-cc`），把 review、救场任务和会话转移委托给 Grok Build CLI——这个组合方式挺有意思，等于把不同 Agent 拼成一条流水线。

## 我的使用结论

**适合**：喜欢终端全屏工作区、想要一个「常驻的编码环境」的人；以及想研究「一个 Agent 怎么把能力开放给别的 Agent 用」的话，它的 Claude Code 插件是个好样本。

**不适合**：需要 IDE 内联补全的日常写码场景；以及想换模型自由比较的人——它和 xAI 的模型绑得比较紧。

**和其他工具比**：和 Claude Code / Codex CLI 是同一类工具，但 Grok Build 把「TUI 是产品的一部分」这件事做得更彻底，也更早把「Agent 之间互相调用」做成了正式功能。这一点比单纯的模型能力更值得看。

## 参考

- [grok-build 仓库](https://github.com/xai-org/grok-build)
- [Claude Code 侧插件](https://github.com/xai-org/grok-build-plugin-cc)
