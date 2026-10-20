# Antigravity

> Google · agent-first IDE · 闭源

## 是什么

Google 推出的 agent 优先 IDE。它的出发点是：写代码这件事的重点正在从「人写代码」变成「人定义任务、Agent 写代码」，所以产品形态围绕「任务」而不是「文件」来组织。

## 技术形态

- **多模式并存**：偏快的终端式执行、偏谨慎的规划式执行，以及一个能同时盯多个 Agent 干活的「Agent 管理」视图。
- **多 Agent 并行**：不同子任务分给不同 Agent，主界面负责汇总和取舍。
- **VS Code 系**：编辑器基础、扩展生态、调试能力沿用成熟的 IDE 范式。
- **模型来自 Gemini 家族**：与 Google 自家模型深度绑定。

## 我的使用结论

**适合**：任务能被切成几块互不相干的工作，并且希望同时推进；以及本来就在 Google 生态里（Workspace、Cloud）干活的人。

**不适合**：需要高度定制模型或自建网关的场景；以及单点小改动——这套形态对「改一行」来说太重了。

**和其他工具比**：它代表的是和 Cursor 相反的思路：Cursor 让人写得更顺，Antigravity 让人管得更像项目经理。「多个 Agent 同时跑」这个形态，和我在 [agent-prism](https://github.com/daftpunkwav/agent-prism) 里做的并排对比是同一个方向——只是 Antigravity 面向的是真实开发任务，不是评测。

## 参考

- [Antigravity 官网](https://antigravity.google)
