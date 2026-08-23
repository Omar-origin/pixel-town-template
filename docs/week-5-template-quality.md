# 第 5 周模板质量回归

> 状态：通过
>
> 基线：正式模板 `main`，提交 `a6e3b87`（PR #8 合并提交）
>
> 执行日期：2026-08-23—2026-08-24

## 验收范围

- 正式模板首页、建站指南和示例文章；
- Node 22、集中配置、Content Collection 和静态构建；
- 1440×900、1280×720、390×844、320×568 和 200% 等效视口；
- 手机菜单、Esc 关闭、键盘焦点、HTTPS 外链、横向溢出和控制台；
- 不修改现有视觉、交互、配置接口、Content Schema 或 Pages 工作流。

## 自动检查

使用 Node.js 22.23.2，在锁文件不变的前提下离线重建依赖并执行：

| 检查 | 结果 |
| --- | --- |
| `astro check` | 15 个文件，0 error、0 warning、0 hint |
| Vitest | 1 个测试文件、7 项测试全部通过 |
| `astro build` | 首页、`/guide/` 和示例文章共 3 个静态页面生成成功 |
| `pnpm audit --audit-level high` | 无已知漏洞 |
| `git diff --check` | 通过 |
| Git 状态 | 正式模板 `main` 无源码改动 |

## 真实浏览器回归

使用本机 Chrome 和 Python Playwright 访问本地正式构建产物。共检查 5 种视口 × 3 条路由：

- 每个页面均存在唯一 `main`；
- 所有视口无横向溢出；
- 手机菜单可由键盘打开，`aria-expanded` 正确变化，Esc 可以关闭；
- 菜单按钮获得真实键盘焦点；
- 未发现 `http://` 外部链接；
- 浏览器控制台与页面运行时无错误。

本地网络无法稳定加载 Google Fonts，因此浏览器回归仅在测试进程中把字体请求替换为空 CSS，页面使用模板已定义的系统字体回退。模板源码和部署产物未被修改。

2026-08-24 使用系统 Chrome 重新运行 5 种视口 × 3 条路由，生成 15 张临时截图。首页、指南和示例文章全部通过横向溢出、HTTPS 外链、控制台、键盘焦点、菜单展开和 Esc 关闭检查。临时脚本和截图验收后删除，未进入 Git。

## 安全与清理

- 浏览器自动化和 Playwright 只安装在系统临时目录；验收结束后已删除；
- 临时测试脚本和截图未进入 Git；
- 未修改依赖清单或锁文件；
- 未使用真实居民资料、Token、Cookie、`.env`、数据库、私钥或本机路径作为模板内容；
- AppSecret、API Key 和支付密钥仍只允许进入后端 Secret，不得进入静态模板。

## Pages 与演练仓库

2026-08-24 对以下公开地址执行真实 HTTP 检查，全部返回 200：

- [正式模板首页](https://omar-origin.github.io/pixel-town-template/)、[建站指南](https://omar-origin.github.io/pixel-town-template/guide/)和[示例文章](https://omar-origin.github.io/pixel-town-template/posts/hello-town/)；
- [通用演练](https://therfen412.github.io/pixel-town-template-rehearsal/)；
- [网页路线演练](https://therfen412.github.io/pixel-town-guide-web-rehearsal/)；
- [Desktop 路线演练](https://therfen412.github.io/pixel-town-guide-desktop-rehearsal/)。

三个演练仓库均已归档，保留 Git 历史和 Pages 证据，未删除仓库。
