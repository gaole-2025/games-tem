import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name} - your destination for free online games.`,
  alternates: {
    canonical: '/about',
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl text-center font-bold mb-8">About Us</h2>
        <div className="space-y-6 text-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>Welcome to our gaming platform! We are dedicated to providing high-quality, free online games that deliver exceptional entertainment experiences for players worldwide.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Our Mission</h2>
            <p>Our mission is to create and curate the best online gaming experiences, making them accessible to everyone. We believe that great games should be free and available to all players, regardless of their background or location.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Our Games</h2>
            <p>We specialize in developing and hosting a variety of games, including action-packed 3D adventures and sports entertainment. Each game is carefully crafted to provide hours of engaging gameplay and fun.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Community</h2>
            <p>We value our gaming community and strive to create a safe, inclusive environment where players can enjoy their favorite games and discover new ones. Your feedback and suggestions help us improve our platform continuously.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Contact Information</h2>
            <p>If you have any questions, feedback, or need support, please don't hesitate to reach out to us at: <a href="mailto:le15956963183@gmail.com" className="text-blue-600 hover:text-blue-800">le15956963183@gmail.com</a></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}