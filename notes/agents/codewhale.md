# CodeWhale

> CodeWhale · Rust 编写的 Agent 引擎 + 终端客户端 · 开源（MIT）

## 是什么

开源的 Rust Agent 引擎和它的终端客户端。定位是在你自己的机器上跑一个运行时，模型既可以是托管服务，也可以是本地模型。

## 技术形态

- **Rust 写的引擎 + 终端客户端**：npm 包 `codewhale` 描述里写得很直白：Terminal coding agent for supported hosted and local models. One runtime on your machine. Rust, MIT.
- **模型可自选**：托管模型和本地模型都支持，provider 抽象做在引擎层。
- **审批与凭据是一等公民**：官方描述里明确列了 tools、approvals、receipts 三件套：每一次工具调用要批准，过程留凭据。
- **衍生实现多**：社区基于它做了桌面版、VS Code 插件，也有把它改成 DeepSeek 专属终端 Agent 的分支，说明它的内部结构是可改的。
- **官网**：codewhale.net。

## 我的使用结论

**适合**：想要一个本地运行时 + 可审批 + 有凭据记录的 Agent 的人，尤其是对审计有要求的场景；也适合 Rust 爱好者读源码。

**不适合**：希望装完就有成熟交互的人；以及只想快速试一下的人，要配 provider、配模型。

**和其他工具比**：CodeWhale 和 [breakwater](https://github.com/daftpunkwav/breakwater) 是同一种思路的产物：**把关键机制自己写一遍，而不是用现成库**。它的 approvals + receipts 组合和我做 rutter 时的宿主侧判定 + 审计留痕是同一个思路：Agent 的自主性必须配上可回看的凭据，否则出事之后无从查起。

## 参考

- [CodeWhale 仓库](https://github.com/codewhale-hq/Codewhale)
- [CodeWhale 官网](https://codewhale.net/)
- [npm: codewhale](https://www.npmjs.com/package/codewhale)
