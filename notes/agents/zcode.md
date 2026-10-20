# ZCode

> Z.ai（智谱）· 编码 Agent harness · 开源（Apache-2.0）

## 是什么

Z.ai 官方的编码 Agent harness。官方形容是「强大、智能、可扩展」——重点在 harness 层：它不只是一个 CLI，而是可以被脚本化、被集成的运行环境。

## 技术形态

- **TypeScript 实现，Apache-2.0 开源**，官网在 zcode.z.ai。
- **插件市场是官方在做的重点**：有独立的 `zai-org/zcode-plugins` 仓库，内置插件和社区插件同在一个市场里分发。
- **harness 可编程**：CLI 之外提供可嵌入的调用方式，适合放进自己的流程里。
- **模型侧**：主推 GLM 系列，走 Z.ai 的开放平台。

## 我的使用结论

**适合**：想把编码 Agent 嵌进自己工作流、而不是只在终端里手动用的人；以及想研究「插件市场怎么给 Agent 生态做供给」的团队。

**不适合**：只想「装个能用的命令行」的人——要理解它的 harness 概念需要一点前置知识。

**和其他工具比**：ZCode 和 omp、Kimi Code 属于同一类「Agent + 插件生态」的路线。ZCode 的差异在于它把插件市场做成了官方标配，社区供给起量很快——这和我关注的 dsh 插件生态是同一个命题：**Agent 的能力上限越来越取决于插件供给，而不是模型本身**。

## 参考

- [ZCode 仓库](https://github.com/zai-org/ZCode)
- [ZCode 官网](https://zcode.z.ai/)
- [ZCode 插件市场](https://github.com/zai-org/zcode-plugins)
