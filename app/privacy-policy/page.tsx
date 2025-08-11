import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}. Learn how we protect your privacy and handle your data.`,
  alternates: {
    canonical: '/privacy-policy',
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl text-center font-bold mb-8">Privacy Policy</h2>
        <div className="space-y-6 text-lg">
          <p className="text-sm text-muted-foreground text-center mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h3 className="text-2xl font-semibold mb-3">1. Introduction</h3>
            <p>
              Welcome to our website. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we handle your personal data when you visit our website 
              and tell you about your privacy rights.
            </p>

          <h3 className="text-2xl font-semibold mb-3">2. Information We Collect</h3>
            <p>
              Like most website operators, we collect non-personally-identifying information that web browsers 
              and servers typically make available. This information includes:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Language preferences</li>
              <li>Referring site</li>
              <li>Date and time of each visitor request</li>
              <li>Screen resolution</li>
              <li>Operating system</li>
              <li>Device type</li>
            </ul>
            <p>
              Our purpose in collecting non-personally identifying information is to better understand how our 
              visitors use the website. This helps us improve our services and enhance the gaming experience for all users.
            </p>
            <p>
              From time to time, we may release non-personally-identifying information in the aggregate, for example, 
              by publishing reports on trends in website usage and game popularity. This aggregated information does not 
              identify individual users and is used solely for analytical purposes.
            </p>

          <h3 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h3>
            <p>We use the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our gaming platform</li>
              <li>To notify you about changes to our games or services</li>
              <li>To allow you to participate in interactive features when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our gaming platform</li>
              <li>To monitor the usage of our gaming platform</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

          <h3 className="text-2xl font-semibold mb-3">4. Cookies and Tracking</h3>
            <p>
              We use cookies and similar tracking technologies to track the activity on our gaming platform 
              and we hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>

          <h3 className="text-2xl font-semibold mb-3">5. Third-Party Services</h3>
            <p>
              We may employ third party companies and individuals to facilitate our gaming platform, provide 
              services on our behalf, perform service-related services or assist us in analyzing how our 
              gaming platform is used.
            </p>

          <h3 className="text-2xl font-semibold mb-3">6. Data Security</h3>
            <p>
              The security of your data is important to us but remember that no method of transmission over 
              the Internet or method of electronic storage is 100% secure. While we strive to use commercially 
              acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>

          <h3 className="text-2xl font-semibold mb-3">7. Children's Privacy</h3>
            <p>
              Our gaming platform does not address anyone under the age of 13. We do not knowingly collect 
              personally identifiable information from children under 13. If you are a parent or guardian and 
              you are aware that your child has provided us with personal data, please contact us.
            </p>

          <h3 className="text-2xl font-semibold mb-3">8. Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically 
              for any changes.
            </p>

          <h3 className="text-2xl font-semibold mb-3">9. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us: <br/>
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