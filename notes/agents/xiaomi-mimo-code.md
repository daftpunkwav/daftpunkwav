# MiMo Code

> 小米（Xiaomi MiMo）· 终端编码 Agent · 开源（MIT）

## 是什么

小米的 MiMo 团队的编码 Agent。官方给的说法是「模型和 Agent 一起进化」——他们把模型训练和 Agent harness 当成同一个项目在做。

## 技术形态

- **TypeScript 实现，MIT 开源**，模型侧是 MiMo 自家的 MoE 系列（MiMo-V2 系列等）。
- **配套 skills 仓库**：`MiMo-Skills` 把可复用的工作方式单独做成包，和模型一起迭代。
- **极简实现的对照组**：官方另有 `mimoagent`，一百行左右就能跑，宣称在 SWE-bench Verified 上超过 74%——用来对照「精心设计的 harness」和「极简 harness」的差别。
- **模型权重也开源**：MiMo 系列模型、VL/Audio 变体都在 Hugging Face 上。

## 我的使用结论

**适合**：想研究「模型和 Agent 怎么协同设计」的人；以及想要一个轻量、开源、可自己改的编码 Agent 的人。

**不适合**：追求成熟度和稳定性、想拿来当天生产工具的场合——迭代节奏太快，接口和命令都可能变。

**和其他工具比**：MiMo Code 最有意思的不是 CLI 本身，而是它把「harness 设计」也当成模型能力的一部分在研究。`mimoagent` 这种极简版本和完整版本放在一起看，能直观看到「Agent 循环里哪些设计真正贡献了分数」——这正是我在 [agent-prism](https://github.com/daftpunkwav/agent-prism) 里想量化的问题。

## 参考

- [MiMo-Code 仓库](https://github.com/XiaomiMiMo/MiMo-Code)
- [MiMo Code 官网](https://mimo.xiaomi.com/mimocode)
- [mimoagent（极简对照版）](https://github.com/XiaomiMiMo/mimoagent)
