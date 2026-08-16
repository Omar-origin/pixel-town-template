# 建站指南从零演练记录

本记录用于验证站内 `/guide/` 是否能让没有参与模板实现的人独立完成建站。执行人不得预先阅读实现代码；遇到问题时先按指南排查，再记录需要协助的位置。

## 基本信息

- 执行人：苏杭
- GitHub 账号：待填写
- 开始时间：待填写
- 结束时间：待填写
- 使用系统与浏览器：待填写
- 演练仓库：待填写（只填写公开仓库地址，不记录本机路径）
- 最终 Pages 地址：待填写

## 演练前安全检查

- [ ] 使用专门的演练仓库，不修改官方模板仓库。
- [ ] 配置、文章和提交记录不包含 Token、密码、Cookie、私钥、`.env`、住址、手机号或证件信息。
- [ ] 示例链接均替换为允许公开的 HTTPS 地址。
- [ ] 不在聊天或截图中展示验证码、授权页面、个人邮箱或其他账号信息。

合并前演练使用临时公开模板：<https://github.com/therfen412/pixel-town-template-rehearsal>。它只用于验证当前 PR head；PR 合并后还要从正式模板完成一次最小冒烟验证。

## 视觉基线

- [桌面端指南](./screenshots/guide-1440x900-viewport.png)
- [手机端指南](./screenshots/guide-390x844-viewport.png)
- [手机菜单与键盘焦点](./screenshots/guide-mobile-menu-open.png)

## 路线 A：只用 GitHub 网页

1. 从临时公开模板选择 **Use this template → Create a new repository**。
2. 使用 GitHub Free 时将演练仓库设为 **Public**；只有支持私有 Pages 的付费套餐才能选择 Private。
3. 确认新仓库包含 `src`、`public`、`package.json` 和 `.github`。
4. 立即在 **Settings → Pages** 将 Source 设置为 **GitHub Actions**。
5. 如果首次部署已经失败，打开 **Actions → Deploy to GitHub Pages → Run workflow** 手动重新运行。
6. 在网页修改 `src/config/site.ts` 中的居民资料、地块信息和链接。
7. 修改 `src/content/posts/hello-town.md`；再使用 **Add file → Create new file** 新建一篇 Markdown 文章。
8. 提交到演练仓库的 `main`，等待 Check 与 Deploy 都成功，并检查首页、文章和“建站指南”链接。

结果：

- [ ] 无需他人提示即可完成
- [ ] 配置内容正确显示
- [ ] Markdown 文章可以打开
- [ ] Pages 部署成功
- 实际耗时：待填写
- 遇到的错误：无 / 待填写
- 需要修改的指南步骤：无 / 待填写

## 路线 B：GitHub Desktop + VS Code

1. 使用 GitHub Desktop 克隆上一步创建的演练仓库。
2. 创建 `site/rehearsal-update` 分支，并用 VS Code 打开仓库。
3. 在终端先运行 `node --version`，确认使用 Node 22 LTS且版本以 `v22.` 开头，再依次运行：

   ```bash
   corepack enable
   pnpm install
   pnpm dev
   ```

   `pnpm dev` 会持续占用当前终端。保持它运行，并在 VS Code 中另开一个终端；也可以在完成预览后按 `Ctrl+C` 再继续。

4. 修改居民介绍，并复制示例 Markdown 新增一篇文章。
5. 在浏览器检查首页、文章页、手机菜单和站内链接。
6. 在第二个终端运行（或先按 `Ctrl+C` 停止预览）：

   ```bash
   pnpm check
   pnpm test
   pnpm build
   ```

7. 在 GitHub Desktop 提交并推送分支，创建 Pull Request 后合并到 `main`。
8. 等待 Pages 再次部署，确认修改已上线。

结果：

- [ ] 无需他人代替操作即可完成
- [ ] 本地预览可以启动
- [ ] 三项检查全部通过
- [ ] 分支、提交和 Pull Request 成功
- [ ] Pages 更新成功
- 实际耗时：待填写
- 遇到的错误：无 / 待填写
- 需要修改的指南步骤：无 / 待填写

## 最终验收

- [ ] 两条路线均完成
- [ ] 320 px 宽度下无横向滚动
- [ ] 桌面端和手机端文字可读
- [ ] 所有公开链接都能打开
- [ ] 没有秘密或私人资料进入仓库、网页、截图或 Git 历史
- [ ] 执行人确认可以仅凭指南再次完成

最终结论：通过 / 需要修订后复验

PR #8 演练评论链接：待填写

执行人备注：待填写

政委复核：待填写

Omar 终验：待填写
