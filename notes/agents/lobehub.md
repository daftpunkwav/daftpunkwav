# LobeHub

> LobeChat / LobeHub · 自托管的对话与 Agent 工作台 · 开源（协议以仓库 LICENSE 为准）

## 是什么

LobeChat 是开源的对话框架，形态是「自托管的 ChatGPT 替身」：前端做得像成熟产品，后端你自己部署，模型和密钥自己配。后来在它之上长出了 LobeHub 这一条产品线，Agent 是其中被强调的能力。

## 技术形态

- **自托管优先**：Docker 部署，数据和会话都留在自己的机器上。
- **插件 / 插件市场**：把提示词、知识库、工具打包成插件，可分享。
- **MCP 支持**：外部能力通过 MCP 接入。
- **多模型路由**：OpenAI 兼容接口都接，自建网关也能挂上去。
- **知识库**：可以做 RAG 式的文档问答。

## 我的使用结论

**适合**：想要一个「开箱即用、界面完整、能自托管」的对话 + Agent 工作台；以及需要给团队内部搭一个统一入口的人。

**不适合**：把它当真正的编码 Agent 用——它擅长对话和知识问答，代码任务还是要换专门的工具。

**和其他工具比**：LobeHub 的强项是产品完成度：它把「模型、插件、知识库、会话」这些拼成了一个能直接用的产品。和我自己做的 [voyager](https://github.com/daftpunkwav/voyager) 方向接近——都是「人和 Agent 共用一个工作台」——差别是 LobeHub 偏对话与内容，voyager 偏仓库、文档与知识图谱。

## 参考

- [LobeChat 仓库](https://github.com/lobehub/lobe-chat)
- [LobeHub 官网](https://lobehub.com)
