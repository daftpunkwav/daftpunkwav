# DeepCode

> 名称对应两个不同的项目，这里如实标注 · 均为 MIT 开源

## 是什么

DeepCode 这个名字下至少有两个不同的项目，都在做 Agent 编码这件事，长得不像但容易混淆：

| 仓库 | 归属 | 形态 | 一句话 |
| :--- | :--- | :--- | :--- |
| [HKUDS/DeepCode](https://github.com/HKUDS/DeepCode) | 香港大学数据智能实验室（HKUDS） | Python，学术项目 | Open Agentic Coding：Agent Harness & Loop Engineering & Multi-Agent Orchestration，配了 arXiv 论文 |
| [lessweb/deepcode-cli](https://github.com/lessweb/deepcode-cli) | 社区 | TypeScript，终端 CLI | 专为 DeepSeek 系列模型优化的终端 AI 编码助手，支持深度思考、推理强度控制与 Agent Skills |

## 技术形态

- **HKUDS 版本**是研究导向：把 Agent Harness、循环工程、多 Agent 编排拆成可分析的模块，配论文和评测。
- **deepcode-cli 版本**是工具导向：围绕单一模型家族做优化，把思考预算、推理强度这些模型侧参数暴露成可控项，Skills 作为扩展方式。
- 两者都以 MIT 协议开源。

## 我的使用结论

**适合**：HKUDS 版本适合当论文和方法论读。它把 Agent 循环拆解的方式，正好和我在 [agent-prism](https://github.com/daftpunkwav/agent-prism) 里做的把变量拆成维度逐个对照是同一个研究取向。deepcode-cli 版本适合已经在用 DeepSeek 模型、想调推理强度的人。

**不适合**：期望一个成熟、稳定的日常工具。两个项目的迭代都很快，接口和命令行行为可能变。

**和其他工具比**：这个条目更多是一个提醒：**Agent 生态里同名项目越来越多**，写笔记时必须把仓库链接钉死，否则半年后自己都认不出说的是哪一个。

## 参考

- [HKUDS/DeepCode](https://github.com/HKUDS/DeepCode)
- [lessweb/deepcode-cli](https://github.com/lessweb/deepcode-cli)
