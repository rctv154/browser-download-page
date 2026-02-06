# Cloudflare Worker 部署说明

## 项目文件

- `worker.js` - Cloudflare Worker 主文件（包含所有 HTML、CSS、JS 和 base64 图标）
- `wrangler.toml` - Wrangler 配置文件

## 部署步骤

### 1. 安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare

```bash
wrangler login
```

### 3. 部署到 Cloudflare Workers

```bash
wrangler deploy
```

## 本地测试

在部署前，可以在本地测试：

```bash
wrangler dev
```

然后访问 `http://localhost:8787` 查看效果。

## 特性

✅ **完全自包含** - 所有资源（HTML、CSS、JS、图标）都内嵌在 Worker 中  
✅ **Base64 图标** - 陌陌和夸克浏览器图标已转换为 base64 格式  
✅ **零外部依赖** - 除了 Google Fonts，无需其他外部资源  
✅ **响应式设计** - 完美适配桌面和移动设备  
✅ **现代动画** - 包含 3D 卡片效果、渐变动画等

## 自定义域名（可选）

如需绑定自定义域名，在 `wrangler.toml` 中添加：

```toml
routes = [
  { pattern = "yourdomain.com/*", zone_name = "yourdomain.com" }
]
```

然后重新部署即可。
