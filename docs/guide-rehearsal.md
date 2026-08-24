# 建站指南技术预演与最终确认

本记录把可自动重复的技术验证与不能由自动化替代的人类理解确认分开。自动技术预演由 Codex 执行，只证明仓库、命令、构建、部署和页面行为可用；它不冒充普通用户的独立体验。

## 验证对象

- 候选分支：`codex/template-guide`
- 技术预演基线提交：`de69aff1b087effaf93731fc8e0c5403eead259f`
- 合并请求：[Omar-origin/pixel-town-template#8](https://github.com/Omar-origin/pixel-town-template/pull/8)
- 临时公开模板：[therfen412/pixel-town-template-rehearsal](https://github.com/therfen412/pixel-town-template-rehearsal)
- 预演日期：2026-08-18
- 自动执行者：Codex
- 人工最终确认者：Omar（苏杭）

临时模板只包含公开模板代码。两条预演路线均使用虚构居民资料和公开 HTTPS 链接，不记录本机路径、验证码、授权页面、私人邮箱或真实身份资料。

## 已确认的视觉基线

- [指南桌面端 1440×900](./screenshots/guide-1440x900-viewport.png)
- [指南手机端 390×844](./screenshots/guide-390x844-viewport.png)
- [指南手机菜单与键盘焦点](./screenshots/guide-mobile-menu-open.png)

## 自动技术预演 A：GitHub 网页路线

### 环境与产物

- 演练仓库：[therfen412/pixel-town-guide-web-rehearsal](https://github.com/therfen412/pixel-town-guide-web-rehearsal)
- Pages：[网页路线演练站点](https://therfen412.github.io/pixel-town-guide-web-rehearsal/)
- 虚构居民：星野，像素园艺师，12 号花园地块
- 新增文章：`src/content/posts/web-route.md`
- 开始时间：2026-08-18 10:10（Asia/Shanghai）
- 结束时间：2026-08-18 10:42（Asia/Shanghai）
- 实际耗时：约 32 分钟（含等待另一条路线完成后统一执行线上浏览器回归）
- Check：[成功运行 32090968365](https://github.com/therfen412/pixel-town-guide-web-rehearsal/actions/runs/32090968365)
- Deploy：[成功运行 32090968364](https://github.com/therfen412/pixel-town-guide-web-rehearsal/actions/runs/32090968364)

### 执行过程

Codex 使用 GitHub 的模板生成、Contents 和 Pages API 对应复现网页界面的操作，不使用本地 Git 修改此仓库：

1. 从临时公开模板生成新的 Public 仓库，不复制其他分支；
2. 在首次内容提交前把 Pages Source 设为 GitHub Actions；
3. 通过 Contents API 编辑 `src/config/site.ts` 并提交到 `main`；
4. 通过 Contents API 新建 `src/content/posts/web-route.md` 并再次提交；
5. 等待 Check 与 Deploy，验证首页、文章页和 `/guide/` 的公开访问；
6. 用真实浏览器检查四种视口、200% 缩放、手机菜单、Esc、键盘焦点、直接访问、刷新、返回和外链。

### 结果

- [x] 新仓库包含 `src`、`public`、`package.json` 和 `.github`
- [x] 集中配置使用虚构资料且能通过正式测试
- [x] 新 Markdown 文件符合 Content Schema
- [x] Check 与 Deploy 最终成功
- [x] 首页、文章页和指南页均公开返回 200
- [x] 四种视口、200% 缩放、移动菜单和路由回归通过

公开部署实际截图：

- [网页路线 1440×900](./screenshots/rehearsal/web-1440x900.png)
- [网页路线 390×844](./screenshots/rehearsal/web-390x844.png)
- [网页路线手机菜单与焦点](./screenshots/rehearsal/web-390x844-menu.png)

## 自动技术预演 B：GitHub Desktop + VS Code 路线

### 环境与产物

- 演练仓库：[therfen412/pixel-town-guide-desktop-rehearsal](https://github.com/therfen412/pixel-town-guide-desktop-rehearsal)
- 分支：`rehearsal/desktop-vscode`
- 提交：`0a55ce7`（`docs: rehearse desktop template route`）
- Pull Request：[therfen412/pixel-town-guide-desktop-rehearsal#8](https://github.com/therfen412/pixel-town-guide-desktop-rehearsal/pull/8)
- Pages：[Desktop 路线演练站点](https://therfen412.github.io/pixel-town-guide-desktop-rehearsal/)
- 虚构居民：松果，小镇修理师，23 号工坊地块
- 新增文章：`src/content/posts/desktop-route.md`
- 开始时间：2026-08-18 10:12（Asia/Shanghai）
- 结束时间：2026-08-18 10:42（Asia/Shanghai）
- 实际耗时：约 30 分钟（包含一次短时网络故障、重试间隔、CI 和线上浏览器回归）
- 合并提交：`2264656bb582cf464b066bc430617534d0d91b35`
- PR Check：[成功运行 32091955802](https://github.com/therfen412/pixel-town-guide-desktop-rehearsal/actions/runs/32091955802)
- main Check：[成功运行 32092633970](https://github.com/therfen412/pixel-town-guide-desktop-rehearsal/actions/runs/32092633970)
- Deploy：[成功运行 32092633967](https://github.com/therfen412/pixel-town-guide-desktop-rehearsal/actions/runs/32092633967)

### 执行过程与命令

1. 克隆全新演练仓库并从 `main` 创建 `rehearsal/desktop-vscode`；
2. 修改 `src/config/site.ts`，新增 `src/content/posts/desktop-route.md`；
3. 使用 Node `v22.23.2` 和项目固定的 pnpm `11.9.0` 执行：

   ```bash
   corepack enable
   pnpm install --frozen-lockfile
   pnpm dev
   pnpm check
   pnpm test
   pnpm build
   pnpm audit --audit-level high
   git diff --check
   ```

4. 本地预览保持运行，浏览器自动化从另一进程验证四种视口、200% 缩放、菜单、Esc、焦点和文章路由；
5. 只暂存配置与新文章，提交并推送分支，创建 PR；
6. 等待 Check 通过后合并到 `main`，再验证 Pages。

### 本地结果

- [x] Node 为 22 LTS，pnpm 与 `packageManager` 一致
- [x] `pnpm install --frozen-lockfile` 成功，锁文件未变化
- [x] `pnpm check`：15 个文件，0 error、0 warning、0 hint
- [x] Vitest：1 个测试文件、7 个测试全部通过
- [x] `pnpm build`：4 个静态页面成功生成
- [x] `pnpm audit --audit-level high`：无已知漏洞
- [x] 1440×900、1280×720、390×844、320×568 无横向滚动
- [x] 200% 缩放、手机菜单、Esc、焦点和文章路由通过
- [x] 分支、提交、推送与 PR 创建成功
- [x] 演练 PR Check、squash 合并与 Pages 更新成功

公开部署实际截图：

- [Desktop 路线 1440×900](./screenshots/rehearsal/desktop-1440x900.png)
- [Desktop 路线 390×844](./screenshots/rehearsal/desktop-390x844.png)
- [Desktop 路线手机菜单与焦点](./screenshots/rehearsal/desktop-390x844-menu.png)

## 遇到的问题与处理

| 阶段 | 问题 | 处理 | 是否需要修改指南 |
| --- | --- | --- | --- |
| Desktop 工具准备 | 隔离自动化环境的 Node 目录没有根级 Corepack 启动器 | 在隔离工具目录临时安装 Corepack，再执行项目固定的 pnpm；没有修改项目依赖 | 否，属于测试环境包装差异 |
| 浏览器测试 | Windows 子进程最初错误解码含中文的 Python 依赖路径 | 把测试依赖移到无中文隔离路径并强制 UTF-8 后复测 | 否，与普通用户建站步骤无关 |
| 浏览器测试 | 菜单的首个语义定位器等待超时 | 改用稳定的 `.menu-toggle` 定位器，实际菜单、Esc 与焦点行为通过 | 否，页面行为正常 |
| GitHub 推送 | 第一次推送遇到 TLS 握手失败 | 按连接规则等待后重试，连接恢复并成功推送 | 否，属于短时网络故障 |
| Pages 首次运行 | 新仓库生成后、启用 Pages 前的初始 Deploy 可能失败 | 先设置 Pages Source；必要时手动 Run workflow，随后由新提交触发部署 | 否，指南已明确此步骤 |
| GitHub Actions | 固定 SHA 的部分 action 仍声明 Node 20，GitHub 当前强制改用 Node 24 运行 | Check 与 Deploy 均成功；本轮不把 Actions 版本升级混入教程 PR，交由依赖维护任务处理 | 否，非阻塞维护提示 |

## 正式模板候选复验

在候选分支本身完成：

- [x] `pnpm install --frozen-lockfile`
- [x] `pnpm check`
- [x] Vitest 7/7
- [x] `pnpm build`，生成首页、文章页和指南页
- [x] GitHub Pages 子路径静态挂载验证
- [x] 1440×900、1280×720、390×844、320×568
- [x] 200% 缩放、移动菜单、Esc、键盘焦点和站内路由
- [x] 浏览器控制台无阻塞错误
- [x] 跟踪文件中没有凭据、本机绝对路径、`.env`、数据库、私钥或构建产物
- [x] 依赖在线审计无已知漏洞

自动技术预演结论：**通过**。未发现需要再次修改指南、README、测试或模板接口的问题。

## Omar 一次性最终人工确认

自动技术预演全部通过后，Omar 只需一次完成以下不能由 Codex 代替的判断：

- [x] 阅读公开站点的 `/guide/`，确认普通用户能理解“先复制模板，再改自己的仓库”；
- [x] 确认能从指南中找到三个固定入口：`/guide/`、`src/config/site.ts`、`src/content/posts/`；
- [x] 确认网页路线和 Desktop 路线的语言清楚，没有必须由开发者解释的术语或缺失步骤；
- [x] 在 PR #8 提交一次最终批准并合并，不需要重复执行 Codex 已覆盖的技术命令。

人工结论：**通过**。Omar 已于 2026-08-21 合并 PR #8，正式模板 `main` 当前包含建站指南。

## 合并后工作

PR #8 合并后，Codex 已在正式模板 `main` 的合并提交 `a6e3b87` 完成 Node 22 本地构建和真实浏览器冒烟验证，结果见[第 5 周模板质量回归](./week-5-template-quality.md)。2026-08-24 再次确认正式与三个演练 Pages 可访问后，三个临时演练仓库均已归档，未删除。
