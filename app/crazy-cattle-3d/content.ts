import { content as globalContent } from "@/config/content";

export const crazyCattle3dContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Crazy Cattle 3D",
    game: {
      url: '/crazy-cattle-3d.embed',
      title: "crazycattle3d",
      externalUrl: '/game/crazycattle3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Crazy Cattle 3D: Physics-Based 3D Action Game Features - Play Free!",
    items: [
      {
        title: "Explosive Physics Engine",
        description: "Experience realistic physics-based gameplay with Crazy Cattle 3D! Watch objects react naturally as you battle with crazy cattle in this thrilling 3D action game."
      },
      {
        title: "3D Action Adventure",
        description: "Dive into immersive 3D environments where every battle is unique. Control your cattle through challenging scenarios in this free-to-play online action game."
      },
      {
        title: "Dynamic Gameplay",
        description: "No two battles are the same! Crazy Cattle 3D features dynamic scenarios with unpredictable physics interactions that keep the gameplay fresh and exciting."
      },
      {
        title: "Easy Browser Play",
        description: "Play Crazy Cattle 3D directly in your browser with no downloads required. Jump straight into the 3D action with simple controls and instant gameplay."
      }
    ]
  },
  
  whatIs: {
    title: "What is Crazy Cattle 3D? The Ultimate Physics-Based Action Game",
    description: "Crazy Cattle 3D is an explosive, free-to-play online action game that combines realistic physics with chaotic cattle battles. Experience unpredictable gameplay as you control crazy cattle in dynamic 3D environments where every interaction matters.\n\n" +
                  "Built with advanced physics simulation, Crazy Cattle 3D delivers authentic object interactions and realistic movement. The game's 3D engine creates immersive scenarios where strategy meets chaos, making each battle unique and entertaining.\n\n" +
                  "Perfect for gamers who love action-packed experiences with a twist of humor. Ready to unleash the chaos and dominate the battlefield?",
    logo: {
      src: "/assets/crazy-cattle-3d/crazy-cattle-3d.jpg",
      alt: "Crazy Cattle 3D - Free Online Physics Action Game Logo"
    }
  },
  
  howToPlay: {
    title: "How to Play Crazy Cattle 3D Online Free: Complete Game Guide",
    description: "Playing Crazy Cattle 3D is easy to learn but challenging to master! Use WASD keys or Arrow Keys to move your cattle around the 3D battlefield. The mouse controls camera rotation and targeting in this immersive action game.\n\n" +
                  "Your objective is to outmaneuver opponents using the game's realistic physics engine. Push, collide, and strategically position yourself to win battles. The dynamic environment means you can use objects and terrain to your advantage.\n\n" +
                  "Master the physics-based mechanics to become the ultimate cattle champion. Each level presents new challenges that test your skills and timing!",
    image: "/assets/crazy-cattle-3d/crazy-cattle-3d.jpg",
    imageAlt: "Crazy Cattle 3D Online Action Game Guide - Free Unblocked Play Instructions"
  },
  
  faq: {
    title: "Crazy Cattle 3D: FAQ (Free Online Physics Action Game)",
    items: [
      {
        value: "what-is-crazy-cattle-3d",
        question: "What kind of game is Crazy Cattle 3D?",
        answer: "Crazy Cattle 3D is a physics-based 3D action game where you control cattle in dynamic battle scenarios. It features realistic physics interactions, 3D graphics, and chaotic gameplay that's both entertaining and challenging."
      },
      {
        value: "how-to-play-online",
        question: "How do I play Crazy Cattle 3D online?",
        answer: "You can play Crazy Cattle 3D for free directly in your browser. No downloads are required - just visit the game page and start playing instantly with full 3D graphics and physics simulation!"
      },
      {
        value: "controls-game",
        question: "What are the controls for Crazy Cattle 3D?",
        answer: "Use WASD keys or Arrow Keys to move your cattle. The mouse controls camera rotation and targeting. These intuitive controls make it easy to navigate the 3D environment and engage in physics-based battles."
      },
      {
        value: "physics-engine",
        question: "What makes the physics special in Crazy Cattle 3D?",
        answer: "Crazy Cattle 3D features a realistic physics engine where objects interact naturally. Collisions, momentum, and environmental interactions all behave realistically, creating unpredictable and exciting gameplay scenarios."
      },
      {
        value: "3d-graphics",
        question: "Does Crazy Cattle 3D have good 3D graphics?",
        answer: "Yes! Crazy Cattle 3D features immersive 3D environments with detailed graphics that run smoothly in your browser. The 3D engine provides excellent visual feedback for all physics interactions and battles."
      },
      {
        value: "is-it-free-unblocked",
        question: "Is Crazy Cattle 3D free to play and unblocked?",
        answer: "Absolutely! Crazy Cattle 3D is completely free to play online. You can find unblocked versions on gaming websites, making it perfect for playing anywhere without downloads or payments."
      }
    ]
  }
};