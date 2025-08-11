# GAME PAGE CONTRACT (Do-Not-Change)

## Files per game
- app/[slug]/page.tsx
- app/[slug]/content.ts
- public/assets/[slug]/cover.(png|webp)     # 列表封面
- public/assets/[slug]/howto.(png|webp)     # 玩法配图（可选）
- (可选) public/game/[slug]/index.html      # 若不是 iframe 而是本地 html

## content.ts shape
export const content = {
  header: {
    title: string,             // 用于 <h1>
  },
  gameSection: {
    game: {
      title: string,
      url: string,             // iframe src 或 /game/[slug]/index.html
    }
  },
  features: {
    title: string,
    items: Array<{ title: string; description: string } & { /* 固定四项 */ }>,
  },
  whatIs: {
    title: string,
    description: string,
    logo: { src: string; alt: string }
  },
  howToPlay: {
    title: string,
    description: string,
    image?: string,
    imageAlt?: string
  },
  faq: {
    title: string,
    items: Array<{ value: string; question: string; answer: string }>
  }
} as const;

## Invariants
- 四个大段（Features/WhatIs/HowToPlay/FAQ）**必须**全部存在，字段名不可变。
- page.tsx 仅导入 content 并传给 `GamePageTemplate`；不得更改模板结构与 className。
- 新页面 slug、图片路径、iframe/url 的写法**必须**与示例两款逐字段对齐。
- 列表图片统一用 `/assets/[slug]/cover.webp|png`。
