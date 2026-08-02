# Pixel Town Resident Template

像素小镇官方居民个人网站模板。居民只需要修改集中配置和 Markdown 内容，就可以部署自己的静态个人网站。

## 技术栈

- Astro 7（静态输出）
- TypeScript 严格模式
- Astro Content Collections + Markdown
- Vitest
- pnpm
- GitHub Actions + GitHub Pages

## 本地启动

需要 Node.js `22.12.0` 或更高版本。

```bash
corepack enable
pnpm install
pnpm dev
```

浏览器打开终端显示的本地地址。首次修改从以下两个位置开始：

- `src/config/site.ts`：姓名、简介、状态、链接和导航；
- `src/content/posts/`：Markdown 文章。

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

## 分支与协作

分支规则、PR 要求和负责人边界见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 当前阶段

这是模板基座：已经具备集中配置、Markdown 内容、响应式首页、文章详情、检查、测试和 Pages 部署流程。后续页面和教程继续按独立功能分支提交。
