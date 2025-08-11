export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "crazy-cattle-3d": {
    id: "crazy-cattle-3d",
    title: "Crazy Cattle 3D",
    description: "The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!",
    image: "/assets/crazy-cattle-3d/crazy-cattle-3d.jpg",
    url: "/",
  },
  "futbol-libre": {
    id: "futbol-libre",
    title: "Futbol Libre",
    description: "Watch live football matches from around the world directly in your browser. Never miss a goal with Futbol Libre.",
    image: "/assets/futbol-libre/futbol-libre.webp",
    url: "/futbol-libre",
  },
};

// 获取其他游戏列表（排除当前游戏）
export function getOtherGames(currentGameId?: string): Game[] {
  return Object.values(games).filter(game => game.id !== currentGameId);
}



