# 技术与概念评述

这里记录我对具体技术、机制、概念的评价。写法统一为：**先给判断，再给依据，最后落到我自己的项目上**。

和 [agents/](../agents/) 的区别：那边评的是工具，这里评的是做法。工具会换，做法不会轻易过时。

## 索引

| 概念 | 一句话判断 | 在我这里落地于 |
| :--- | :--- | :--- |
| [断点续跑](resumable-execution.md) | 状态外置，崩溃只丢进行中的那一步，没落盘的结果不重跑 | [wave-code](https://github.com/daftpunkwav/wave-code) |
| [幂等认领](idempotent-claim.md) | 假设同一动作会发生两次，认领要原子、要可查询、要能过期释放 | [wave-code](https://github.com/daftpunkwav/wave-code) · [breakwater](https://github.com/daftpunkwav/breakwater) |
| [人工确认](human-in-the-loop.md) | 自主性和可逆性挂钩，拦截点在宿主侧而不是提示词层 | [rutter](https://github.com/daftpunkwav/rutter) |
| [限流与熔断](rate-limit-and-circuit-break.md) | 把调模型当成对不稳定外部依赖的调用，超时优先于一切 | [breakwater](https://github.com/daftpunkwav/breakwater) |
| [流式优先](streaming-first.md) | 第一句话尽早到达；SSE 够用，WebSocket 留给真正的全双工需求 | [agent-prism](https://github.com/daftpunkwav/agent-prism) · [real-mock](https://github.com/daftpunkwav/real-mock) |
| [MCP 作为工具契约](mcp-tool-contract.md) | MCP 解决的是工具怎么被用，不解决权限、审计和多租户 | [cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp) · [rutter](https://github.com/daftpunkwav/rutter) · [wave-code](https://github.com/daftpunkwav/wave-code) |
| [并行对照实验](parallel-ab-test.md) | 固定变量、一次只换一个维度，并排比较 | [agent-prism](https://github.com/daftpunkwav/agent-prism) |
| [人机同权：共用一套原语](shared-primitive-ui.md) | 领域操作定义成原语，UI 和 Agent 都只是调用方，避免两套逻辑分叉 | [voyager](https://github.com/daftpunkwav/voyager) |
| [上下文预算](context-budget.md) | 上下文按下一步要做什么裁，而不是按历史长度堆 | [rutter](https://github.com/daftpunkwav/rutter) · [cn-websearch-mcp](https://github.com/daftpunkwav/cn-websearch-mcp) |

## 待补充

这一栏是给我自己留的坑位，等有更成体系的判断再写进来：

- 记忆的三种形态：窗口内上下文、跨会话检索、显式长期记忆，各自适合记什么。
- 评测集与感觉不差的差别：什么时候必须有人工标注，什么时候自动判据就够。
- 沙箱：进程级隔离、容器级隔离、虚拟机级隔离的取舍。
- 提示词缓存：什么时候值得为缓存去重上下文。
- 可观测性：Agent 的 trace 应该记什么，才不会在出问题后什么都看不到。
