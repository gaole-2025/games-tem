# 🎮 游戏站模板使用指南

## 📋 当前状态
这个项目已经被精简为包含2个游戏的标准模板：
- **Crazy Cattle 3D** (首页 `/`)
- **Futbol Libre** (`/futbol-libre`)

## 🚀 快速使用步骤

### 1. 添加新游戏
要添加新游戏，请按以下步骤操作：

#### 第一步：更新游戏数据
在 `app/games/game-data.ts` 中添加新游戏：

```typescript
export const games: Record<string, Game> = {
  // ... 现有游戏
  "your-new-game": {
    id: "your-new-game",
    title: "Your New Game",
    description: "Description of your new game",
    image: "/assets/your-new-game/your-new-game.webp",
    url: "/your-new-game",
  },
};
```

#### 第二步：创建游戏页面目录
```bash
mkdir app/your-new-game
```

#### 第三步：创建内容配置
创建 `app/your-new-game/content.ts`：

```typescript
import { content as globalContent } from "@/config/content";

export const yourNewGameContent = {
  ...globalContent,
  
  gameSection: {
    ...globalContent.gameSection,
    title: "Your New Game",
    game: {
      url: '/your-new-game.embed',
      title: "yournewgame",
      externalUrl: '/game/your-new-game/index.html'
    }
  },
  
  features: {
    title: "Your New Game Features",
    items: [
      {
        title: "Feature 1",
        description: "Description of feature 1"
      },
      {
        title: "Feature 2",
        description: "Description of feature 2"
      },
      {
        title: "Feature 3",
        description: "Description of feature 3"
      },
      {
        title: "Feature 4",
        description: "Description of feature 4"
      }
      // ⚠️ 严格只能有4个功能项
    ]
  },
  
  whatIs: {
    title: "What is Your New Game?",
    description: "Game description...",
    logo: {
      src: "/assets/your-new-game/logo.webp",
      alt: "Your New Game Logo"
    }
  },
  
  howToPlay: {
    title: "How to Play Your New Game",
    description: "Game instructions...",
    image: "/assets/your-new-game/screenshot.webp",
    imageAlt: "Your New Game Screenshot"
  },
  
  faq: {
    title: "Your New Game FAQ",
    items: [
      {
        value: "how-to-play",
        question: "How do I play?",
        answer: "Game controls and instructions..."
      },
      // ... 更多FAQ
    ]
  }
};
```

#### 第四步：创建页面组件
创建 `app/your-new-game/page.tsx`：

```typescript
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { yourNewGameContent } from "./content";

export const metadata: Metadata = {
  title: `Your New Game | Play Unblocked | ${siteConfig.domain}`,
  description: "Play Your New Game online free! Description here.",
  // ... 更多metadata
};

const gameConfig = {
  metadata: {
    title: "Your New Game",
    description: "Your game description",
    url: "/your-new-game"
  },
  content: yourNewGameContent
};

export default function YourNewGamePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
```

#### 第五步：添加游戏文件和资源
1. 将游戏文件放到 `public/game/your-new-game/`
2. 将图片资源放到 `public/assets/your-new-game/`

#### 第六步：更新路由配置
在 `next.config.js` 中添加嵌入路由：

```javascript
async rewrites() {
  return [
    // ... 现有路由
    {
      source: '/your-new-game.embed',
      destination: '/game/your-new-game/index.html',
    },
  ]
}
```

### 2. 修改站点信息
编辑 `config/site.js`：

```javascript
export const siteConfig = {
  name: "Your Site Name",
  description: "Your site description",
  domain: "your-domain.com",
  url: "https://your-domain.com",
  // ... 其他配置
};
```

### 3. 替换品牌资源
- 更新 `public/assets/img/` 中的 favicon、logo 等文件
- 保持文件名一致，或更新 `config/site.js` 中的路径

## 🏗️ 模板架构

### 核心文件结构
```
app/
├── games/
│   └── game-data.ts          # 游戏数据中心
├── [game-name]/
│   ├── page.tsx              # 游戏页面
│   └── content.ts            # 游戏内容配置
├── layout.tsx                # 全局布局
└── page.tsx                  # 首页

components/
├── templates/
│   └── GamePageTemplate.tsx  # 统一游戏页面模板
└── layout/
    ├── Header.tsx            # 简化导航 (动态游戏链接)
    └── Footer.tsx            # 简化页脚 (动态游戏链接)

config/
├── site.js                   # 站点基础配置
└── content.ts                # 全局内容配置
```

### 数据驱动设计
- **Header/Footer** 自动从 `game-data.ts` 读取游戏列表
- **GamePageTemplate** 统一处理所有游戏页面
- **OtherGames** 组件自动排除当前游戏

## 🔧 开发命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 启动生产服务器
npm start

# 生成sitemap
npm run sitemap
```

## ✅ 检查清单

添加新游戏前，请确认：

- [ ] `game-data.ts` 中添加了游戏信息
- [ ] 创建了游戏页面目录和文件
- [ ] 游戏内容结构符合标准 (gameSection, features, whatIs, howToPlay, faq)
- [ ] 添加了游戏文件到 `public/game/`
- [ ] 添加了图片资源到 `public/assets/`
- [ ] 更新了 `next.config.js` 路由
- [ ] 测试构建成功 (`npm run build`)

## 🎯 最佳实践

1. **保持一致性**: 所有游戏页面使用相同的内容结构
2. **SEO优化**: 每个游戏的标题、描述、关键词都要独特
3. **图片优化**: 使用WebP格式，大小合适
4. **性能考虑**: 大的游戏文件考虑外链或CDN
5. **测试验证**: 每次添加游戏后都要测试构建

## 🐛 常见问题

**Q: 游戏页面显示空白?**  
A: 检查 content.ts 结构是否完整，特别是 gameSection 配置

**Q: 图片不显示?**  
A: 确认图片路径正确，文件存在于 public/assets/ 目录

**Q: 构建失败?**  
A: 检查是否有未删除的文件引用，确认所有路径都有效

**Q: 导航链接不正确?**  
A: Header/Footer 会自动从 game-data.ts 读取，确认游戏数据正确