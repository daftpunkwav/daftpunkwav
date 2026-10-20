# Kimi Code

> 月之暗面（Moonshot AI）· 终端编码 Agent · 开源（MIT）

## 是什么

Kimi 的编码 Agent 命令行。官方给它的定位是「下一代 Agent 的起点」，不是单纯的补全工具，而是一个能在终端里自己规划、改代码、跑命令的 Agent。

## 技术形态

- **TypeScript 实现，MIT 开源**：CLI 本身开源，模型走 Kimi 自家的 API。
- **Skills 机制**：把可复用的工作方式写成 skill，按需装载——这条路和 MCP 一样，已经成了各家 Agent 的标配。
- **和 IDE 的联动**：官方另有 Zed 扩展（`kimi-code-zed-extension`），CLI 与编辑器不是两个割裂的东西。
- **早期的 Python 版 kimi-cli 已归档**：官方明确指向新的 Kimi Code CLI，老仓库不再维护——这本身说明工具迭代很快。

## 我的使用结论

**适合**：已经在用 Kimi 模型的人，或者想试「国产模型 + 开源 CLI Agent」这个组合；中文需求下的表现比较稳。

**不适合**：需要多 provider 自由切换的人——它绑得比较紧；也不适合当通用框架来读源码学习（它更偏产品而不是教学示例）。

**和其他工具比**：和 Claude Code / Codex CLI 属于同一档的终端 Agent，但它是少数把「Agent + Skills」这条路线走得比较完整的开源实现。技能包的做法和我自己写的 dsh 插件体系是一个思路：**把可复用能力做成可安装的包**，比写在提示词里可靠得多。

## 参考

- [Kimi Code 仓库](https://github.com/MoonshotAI/kimi-code)
- [Kimi Code 文档](https://www.kimi.com/code/docs/)
