# 协作与分支规则

## 负责人

- 仓库创建人：Omar；
- 模板业务与工程负责人：政委（GitHub：`therfen412`）；
- 河马只承接政委明确拆分的页面、样式、示例、教程、Mock 和测试任务；
- 当前阶段由 Omar 最终合并 PR；政委负责模板线的范围、实现与业务验收。

## 分支规则

`main` 必须始终保持可构建、可部署，禁止直接推送功能代码。

分支命名：

- `codex/<scope>`：由 Codex 辅助完成的独立任务；
- `feat/<scope>`：新功能；
- `fix/<scope>`：缺陷修复；
- `docs/<scope>`：纯文档；
- `chore/<scope>`：依赖、工作流和工程维护。

每个分支只完成一个可验收目标，不在同一 PR 中混入无关重构。

## PR 要求

1. 从最新 `main` 创建分支；
2. 明确写出变更、原因、用户影响和验证命令；
3. 至少通过 `pnpm check`、`pnpm test` 和 `pnpm build`；
4. 页面改动检查 `1440×900`、`1280×720`、`390×844`；
5. 配置或教程改动必须由未参与实现的人按文档从零演练；
6. 共享结构、Pages Actions 主流程和内容 Schema 由政委负责；
7. Omar 完成最终审核后合并，默认使用 squash merge；
8. 合并后删除远程功能分支。

建议 Omar 在 GitHub 设置中为 `main` 启用分支保护：

- Require a pull request before merging；
- Require status checks to pass；
- 要求 `check` 状态检查；
- Block force pushes；
- Block deletions。

## 内容边界

普通居民优先修改：

- `src/config/site.ts`；
- `src/content/posts/*.md`；
- `public/` 中明确允许替换的个人资产。

修改 Astro 配置、Content Schema、GitHub Actions 或公共布局前，必须由政委确认。
