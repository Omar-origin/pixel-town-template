# Pixel Town Resident Template

像素小镇官方居民个人网站模板。居民只需要修改集中配置和 Markdown 内容，就可以部署自己的静态个人网站。

## 技术栈

- Astro 7（静态输出）
- TypeScript 严格模式
- Astro Content Collections + Markdown
- Vitest
- pnpm
- GitHub Actions + GitHub Pages

界面图标参考并使用 [Pixelarticons](https://pixelarticons.com/) 免费 MIT 图标，许可证见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

## 本地启动

需要 Node.js 22 LTS（`22.12.0` 或更高的 22.x 版本）。运行 `node --version` 时应以 `v22.` 开头；不要直接使用 Node 25 或更高版本，因为它们不再默认附带 Corepack。

```bash
corepack enable
pnpm install
pnpm dev
```

`pnpm dev` 会持续占用当前终端。浏览器打开终端显示的本地地址；需要执行检查时，另开一个终端，或按 `Ctrl+C` 停止预览后再继续。首次修改从以下两个位置开始：

- `src/config/site.ts`：姓名、简介、地块、状态、链接和导航；
- `src/content/posts/`：Markdown 文章。

启动网站后，导航中的 **建站指南** 会打开 `/guide/`。指南提供“只用 GitHub 网页”和“GitHub Desktop + VS Code”两条路线，从创建个人仓库一直说明到 Pages 上线与安全检查。

## 第一次套用模板

不需要理解 Astro 组件，也不需要修改页面布局。按下面顺序替换即可：

1. 打开 `src/config/site.ts`，修改 `resident` 中的姓名、身份、介绍和建设状态；
2. 修改 `resident.plot` 中的小镇名称、地块编号、坐标、类型和建设阶段；
3. 将 `links` 中的示例地址换成自己的 GitHub 和像素小镇入口；
4. 编辑 `src/content/posts/hello-town.md`，或复制它来新增 Markdown 文章；
5. 如需更换浏览器图标，只替换 `public/favicon.svg`，保持文件名不变。

运行 `pnpm dev` 可以边修改边预览。页面的像素配色、告示牌、小镇背景、手机菜单和文章样式已经统一设置，无需在 CSS 中逐项调整。

## 检查与构建

```bash
pnpm check
pnpm test
pnpm build
```

构建产物位于 `dist/`。

## 部署到 GitHub Pages

1. 在 GitHub 仓库中打开 **Settings → Pages**；
2. 将 **Source** 设为 **GitHub Actions**；
3. 合并到 `main` 后，`.github/workflows/deploy-pages.yml` 会自动构建和部署；
4. 仓库名不是 `<用户名>.github.io` 时，构建会自动使用仓库名作为 `base` 路径。

如果绑定自定义域名，在仓库 Actions 变量中设置 `SITE_URL`，例如 `https://example.com`。

> GitHub Pages 网站会公开在互联网上。不要把 Token、密码、Cookie、私钥、`.env` 或私人资料写入配置、文章或 Git 历史。

## 分支与协作

分支规则、PR 要求和负责人边界见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

教程发布前，由未参与实现的成员按照[建站指南从零演练记录](./docs/guide-rehearsal.md)完成网页路线和 GitHub Desktop + VS Code 路线，并记录耗时、错误与复验结论。

## 当前阶段

这是模板基座：已经具备集中配置、Markdown 内容、像素风响应式首页、文章详情、检查、测试和 Pages 部署流程。后续页面和教程继续按独立功能分支提交。
