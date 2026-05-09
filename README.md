# Pawapuro Success Guide

这是一个可直接发布到 GitHub Pages 的静态攻略站点。

## 文件结构

- `index.html`：GitHub Pages 首页。
- `styles.css`：页面样式。
- `app.js`：交互逻辑，并在浏览器中读取 `success-mode-guide.zh-CN.md` 渲染全文资料。
- `success-mode-guide.zh-CN.md`：Success 模式中文攻略资料源。
- `.nojekyll`：让 GitHub Pages 按普通静态文件发布，避免 Jekyll 处理。

## 发布到 GitHub Pages

1. 把本目录推到 GitHub 仓库。
2. 打开仓库 `Settings` -> `Pages`。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `master`，目录选择 `/root`。
5. 保存后等待 GitHub Pages 部署完成。

本项目没有构建步骤，GitHub Pages 可直接托管。
