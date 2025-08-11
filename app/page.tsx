import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { crazyCattle3dContent } from "./crazy-cattle-3d/content";

export const metadata = {
  alternates: {
    canonical: '/',
  },
  title: "Crazy Cattle 3D - Free Online Physics Action Game | Play Unblocked",
  description: "Play Crazy Cattle 3D online free! Control crazy cattle in this physics-based 3D action game. No download required - start playing instantly in your browser!",
};

export default function Page() {
  const gameConfig = {
    metadata: {
      title: "Crazy Cattle 3D",
      description: "The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!",
      url: "/",
    },
    content: crazyCattle3dContent,
  };

  return <GamePageTemplate gameConfig={gameConfig} />;
}
