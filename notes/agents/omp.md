# omp（OhMyPi）

> Stencil Labs · 编码 Agent（pi 的增强版）· 开源（MIT）

## 是什么

OhMyPi，简称 omp。官方描述就一句：把 IDE 接进编码 Agent。它的定位是在 pi 这类极简 Agent 的基础上，把 IDE 的交互能力接进来。

## 技术形态

- **TypeScript 实现，MIT 开源**，官网 omp.sh。
- **和 pi 同源**：pi 是 AI agent toolkit（统一 LLM API、Agent 循环、TUI、编码 Agent CLI），omp 在这个基础上往 IDE 方向长。名字里的 ⌥（Option 键）就是这个意思。
- **IDE 打通**：把编辑器侧的上下文、选中、跳转接进 Agent 循环。
- **多 Agent 编排是社区热点**：围绕 omp 的子代理、计划驱动开发（spec-driven）扩展有不少第三方项目，说明它提供了足够开放的接口。

## 我的使用结论

**适合**：想要一个轻量但可编程的 Agent，并且希望在 IDE 里用它；也适合读 pi 这套极简 Agent 循环的实现。

**不适合**：想要开箱即用的产品级体验；以及对稳定性要求高、希望少折腾的人。扩展生态活跃的同时也意味着变化快。

**和其他工具比**：它和 pi 是一组：pi 是底座，omp 是接了 IDE 的增强形态。和其他全家桶式 Agent 比，omp 的设计更偏小而可改，这和我做 [wave-code](https://github.com/daftpunkwav/wave-code) 时的偏好一致：**Agent 循环要能被读懂，能力靠扩展往外长，而不是堆在核心里**。

## 参考

- [oh-my-pi 仓库](https://github.com/can1357/oh-my-pi)
- [omp 官网](https://omp.sh)
- [pi（底座）](https://github.com/earendil-works/pi)
