'use client';

import GsapButton from "./GsapButton";
import AnimatedBackground from "./AnimatedBackground";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">Let&apos;s Connect</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi — 
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <div className="card bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20">
            <div className="card-body items-center text-center">
              <h3 className="card-title mb-2 text-white">Email Me</h3>
              <p className="mb-4 text-sm text-white/70">
                Quickest way to get in touch
              </p>
              <a href="mailto:paddaagamjeetsingh@gmail.com">
                <GsapButton
                  text="Send Email"
                  startColor="#ffffff"
                  fillColor="#3b82f6"
                  textColor="#3b82f6"
                  fillTextColor="#ffffff"
                />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="card bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20">
            <div className="card-body items-center text-center">
              <h3 className="card-title mb-2 text-white">Connect on LinkedIn</h3>
              <p className="mb-4 text-sm text-white/70">
                Let&apos;s network professionally
              </p>
              <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer">
                <GsapButton
                  text="Visit LinkedIn"
                  startColor="#ffffff"
                  fillColor="#0a66c2"
                  textColor="#0a66c2"
                  fillTextColor="#ffffff"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
