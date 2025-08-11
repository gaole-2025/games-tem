import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of Service for ${siteConfig.name}. Please read our terms and conditions.`,
  alternates: {
    canonical: '/terms-of-service',
  }
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl text-center font-bold mb-8">Terms of Service</h2>
        <div className="space-y-6 text-lg">
          <p className="text-sm text-muted-foreground text-center mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h3 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h3>
            <p>
              By accessing and using {siteConfig.name}, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

          <h3 className="text-2xl font-semibold mb-3">2. Use License</h3>
            <p>
              Permission is granted to temporarily access the games and materials on {siteConfig.name} 
              for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

          <h3 className="text-2xl font-semibold mb-3">3. User Conduct</h3>
            <p>You agree not to use the service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Interfere with or disrupt the service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Harass or abuse other users</li>
            </ul>

          <h3 className="text-2xl font-semibold mb-3">4. Game Content</h3>
            <p>
              The games provided on our website are for entertainment purposes only. 
              We strive to ensure all games are family-friendly and appropriate for all ages.
            </p>

          <h3 className="text-2xl font-semibold mb-3">5. Intellectual Property</h3>
            <p>
              The games and content on this website are protected by copyright and other 
              intellectual property laws. All rights are reserved by their respective owners.
            </p>

          <h3 className="text-2xl font-semibold mb-3">6. Disclaimer</h3>
            <p>
              The materials on {siteConfig.name} are provided on an 'as is' basis. 
              {siteConfig.name} makes no warranties, expressed or implied, and hereby 
              disclaims and negates all other warranties including without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

          <h3 className="text-2xl font-semibold mb-3">7. Limitations</h3>
            <p>
              In no event shall {siteConfig.name} or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on {siteConfig.name}, even if {siteConfig.name} or an authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>

          <h3 className="text-2xl font-semibold mb-3">8. Revisions</h3>
            <p>
              {siteConfig.name} may revise these terms of service at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version 
              of these terms of service.
            </p>

          <h3 className="text-2xl font-semibold mb-3">9. Contact Information</h3>
            <p>
              If you have any questions about these Terms of Service, please contact us at: <br/>
              <a href="mailto:le15956963183@gmail.com" className="text-primary hover:underline">
                le15956963183@gmail.com
              </a>
            </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}