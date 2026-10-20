# pi

> badlogic（Mario Zechner）· 极简编码 Agent 工具箱 · 开源

## 是什么

不是又一个开箱即用的编码助手，而是一套可以自己拼的最小零件：模型接入层、Agent 循环、编码 Agent 本体、网页 UI，分别做成独立的包，命令行工具只是其中一层薄薄的壳。

## 技术形态

- **拆包而不是打包**：模型 API、Agent 循环、编码器、UI 各自分离，自己写 Agent 的人可以直接拿里面的层用，不必继承一整套产品假设。
- **扩展机制简单**：扩展是放在约定目录里的脚本，工具和命令可以直接注册，门槛低。
- **多 provider**：模型接入层统一了多家服务的调用方式，切换成本低。
- **Agent 循环极简**：核心就是一个模型 → 工具 → 结果回喂的循环，其余能力靠扩展加。

## 我的使用结论

**适合**：想自己写 Agent 的人。它把循环怎么转、工具怎么调、模型怎么接这几件事摊开给你看，读一遍源码比自己从头设计省事；想改点自己的东西时，扩展目录比 fork 整个仓库轻。

**不适合**：想装上就用的人，它默认不替你做决定。

**和其他工具比**：和 OpenCode、goose 属于同一类可组合的框架型 Agent，但 pi 更小、更底层。放到我的列表里，主要是因为它是少数把 Agent 循环本身写得足够清楚的实现，值得当成参考实现读。

## 参考

- [pi 仓库（原 badlogic/pi-mono，现为 earendil-works/pi）](https://github.com/earendil-works/pi)
- [npm: @mariozechner/pi](https://www.npmjs.com/package/@mariozechner/pi)
