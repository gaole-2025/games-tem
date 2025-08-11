import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with the ${siteConfig.name} team. We'd love to hear from you!`,
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl text-center font-bold mb-8">Contact Us</h2>
        <div className="space-y-6 text-lg">
          <p className="text-center text-xl mb-8">
            We'd love to hear from you! Get in touch with any questions, suggestions, or feedback.
          </p>

          <h3 className="text-2xl font-semibold mb-3">1. Contact Information</h3>
              <p>
                <strong>Email:</strong> <br/>
                <a 
                  href="mailto:le15956963183@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  le15956963183@gmail.com
                </a>
              </p>

          <h3 className="text-2xl font-semibold mb-3">2. Response Time</h3>
              <p>We typically respond within 24-48 hours during business days.</p>

          <h3 className="text-2xl font-semibold mb-3">3. What to Include in Your Message</h3>
              <p>When contacting us, please include the following information:</p>
              <ul>
                <li>Your name and email address</li>
                <li>A clear subject line</li>
                <li>Detailed description of your question or issue</li>
                <li>Screenshots if reporting a technical issue</li>
              </ul>

          <h3 className="text-2xl font-semibold mb-3">4. Types of Inquiries</h3>
              <p>We welcome all types of inquiries including:</p>
              <ul>
                <li>Technical support and bug reports</li>
                <li>New game suggestions</li>
                <li>Website improvements and feedback</li>
                <li>General questions about our services</li>
                <li>Business partnerships and collaborations</li>
              </ul>

          <h3 className="text-2xl font-semibold mb-3">5. Community Guidelines</h3>
          <p>
            We're committed to maintaining a respectful and helpful communication environment. 
            Please be courteous in your correspondence and provide as much detail as possible 
            to help us assist you effectively.
          </p>

          <p className="text-center mt-8">
            Thank you for being part of the {siteConfig.name} community!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}