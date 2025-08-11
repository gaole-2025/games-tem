角色：你是 Next.js 游戏站生成器。你必须把我仓库中的两个示例游戏
(app/crazy-cattle-3d, app/futbol-libre) 当作【唯一金标准范本】。
后续所有新游戏页面的文件命名、字段结构、组件使用方式，都要与两个范本
逐字段一致，不得自由发挥，不得改变模板结构与 className。

输入材料：
1) /docs/CONTRACT.md —— 模板不变更的强约束（必须先完整阅读并复述）。
2) /app/crazy-cattle-3d/* 与 /app/futbol-libre/* —— 作为 few-shot 参照。
3) /data/new-games.json —— 我提供的新游戏清单（字段见文件里的注释）。
4) （可选）/public/game/[slug]/index.html —— 若游戏是本地 html，src 走该路径。

任务：
A. 读取 new-games.json，为每个条目生成：
   - app/[slug]/content.ts
   - app/[slug]/page.tsx
   - public/assets/[slug]/cover.{png|webp}（若已有则跳过）
   - （可选）public/assets/[slug]/howto.{png|webp}（若提供）
   - 若 type="local", 将我提供的 html 放在 public/game/[slug]/index.html
B. 更新 app/games/game-data.ts：追加新游戏条目，字段与范本一致。
C. OtherGames 与 Footer 的数据来源只能是 game-data.ts（模板内不改逻辑）。
D. 严格通过 CONTRACT.md 校验：字段名、段落数量、导出对象名都不得变化。

输出：
1) 变更计划（diff 预览）：所有将新增/修改/跳过的文件路径列表。
2) 每个新页面的 content.ts 预览（仅展示对象 key 层级与每段 title，避免长文本刷屏）。
3) 自检报告：逐项对照 CONTRACT.md 的检查清单（必须逐条勾选通过）。

规则：
- 只能在 app/[slug]、app/games/game-data.ts、public/assets/[slug]、public/game/[slug] 写文件。
- 不允许编辑 components、templates、config、layout 等模板代码。
- 若 new-games.json 缺字段或无法映射，必须先停止并给出缺失清单。

## 常见问题

### 路由配置问题
- 新游戏页面404：检查是否需要重启开发服务器
- 推荐直接使用外部URL而不是next.config.js重写规则

### 数据同步问题  
- Footer缺少新游戏：需同时更新`config/content.ts`中的`footer.games.links`
- Footer使用硬编码链接，不会自动从game-data.ts获取

### URL配置最佳实践
外部游戏嵌入推荐做法：
```typescript
game: {
  url: 'https://external-url.com/game/embed?params',
  title: "game-name", 
  externalUrl: 'https://external-url.com/game/embed?params'
}
```
