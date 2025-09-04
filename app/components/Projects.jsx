'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RadialFillButton from './GsapButton';

const projects = [
  { 
    id: 1, 
    title: "QuizKraft", 
    description: "An interactive quiz platform that makes learning fun and engaging. Create, share, and take quizzes with a modern, user-friendly interface. <span class='font-bold text-blue-600'>Live website with AI-powered quiz generation</span>.", 
    image: "/quiz.png",
    technologies: ["React", "Node.js", "MongoDB", "Auth.js", "Stripe.js", "OpenAI API"],
    github: "https://github.com/Agamjeet/wihslist_qna",
    live: "https://quizkraft.in"
  },
  { 
    id: 2, 
    title: "Discord E-commerce Support Bot", 
    description: "A Discord bot developed in collaboration with an e-commerce company to provide automated customer support. The bot is trained on the company's database using <span class='font-bold text-purple-600'>embeddings and AI</span> to deliver accurate and context-aware responses.", 
    image: "/discord.png",
    technologies: ["Discord.js", "Node.js", "MongoDB", "OpenAI API", "Embeddings"],
    github: "https://github.com/Agamjeet/disco_bot",
    live: null
  },
  { 
    id: 3, 
    title: "Notion Project Automation Bot", 
    description: "A Notion automation bot developed in collaboration with an <span class='font-bold text-green-600'>educator in Singapore</span> to streamline project management. Automatically generates and populates Notion pages for technical projects using <span class='font-bold text-orange-600'>AI (Gemini, Claude)</span> and PDF design documents. The bot reads project requirements, creates comprehensive documentation including background info, engineering designs, project plans, and daily content - <span class='font-bold text-red-600'>turning hours of manual work into minutes of automated processing</span>.", 
    image: "/notion.png",
    technologies: ["Python", "Notion API", "Claude AI", "Gemini AI", "PDF Processing"],
    github: "https://github.com/Agamjeet/notion-bot-",
    live: null
  },
  { 
    id: 4, 
    title: "WhatsApp Reminder Bot", 
    description: "A WhatsApp bot that sends event reminders from an iCloud calendar and collects responses. Developed in collaboration with a <span class='font-bold text-blue-600'>doctor and currently being used in their clinic</span> to automate appointment scheduling and confirmation workflows.", 
    image: "/whatsapp.png",
    technologies: ["JavaScript", "Node.js", "WhatsApp Web", "iCloud Calendar"],
    github: "https://github.com/Agamjeet/whatsapp_bot",
    live: null
  },
  { 
    id: 5, 
    title: "TextSnap Chrome Extension", 
    description: "A fun Chrome extension that transforms any selected text into beautiful images with multiple themes. Select text on any website, right-click, and create stunning visual content in seconds. <span class='font-bold text-purple-600'>Commercial product available for purchase</span> - perfect for social media sharing and content creation.", 
    image: "/T.png",
    technologies: ["Chrome Extension", "JavaScript", "CSS", "HTML"],
    github: null,
    live: "https://agams.gumroad.com/l/textsnap"
  },
  { 
    id: 6, 
    title: "Local Llama AI Assistant", 
    description: "A Streamlit web application that combines chat functionality with <span class='font-bold text-orange-600'>Llama 3.2 and OCR capabilities</span> using Llama 3.2 Vision for text extraction from images.", 
    image: "/llama.png",
    technologies: ["Python", "Streamlit", "Ollama", "Llama 3.2", "OCR"],
    github: "https://github.com/Agamjeet/local_llama",
    live: null
  },
  { 
    id: 7, 
    title: "Multilingual STT & TTS", 
    description: "A Streamlit web application that provides multilingual Speech-to-Text and Text-to-Speech capabilities using <span class='font-bold text-blue-600'>Google Cloud APIs with support for 10+ Indian languages</span>.", 
    image: "/tts.png",
    technologies: ["Python", "Streamlit", "Google Cloud", "STT", "TTS"],
    github: "https://github.com/Agamjeet/STT-TTS",
    live: null
  },
  { 
    id: 8, 
    title: "Don't Press The Button", 
    description: "A digital detox app inspired by the <span class='font-bold text-red-600'>Red Button Experiment</span>. Challenge yourself to resist the urge to check your phone and build real patience through mindful awareness.", 
    image: "/app.jpg",
    technologies: ["React Native", "Expo", "AsyncStorage", "JavaScript"],
    github: "https://github.com/Agamjeet/Dont-Press",
    live: null
  }
];

// Helper function to render description with highlights
const renderDescription = (description) => {
  const parts = description.split(/(<span[^>]*>.*?<\/span>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<span')) {
      const match = part.match(/<span[^>]*class=['"]([^'"]*)['"][^>]*>(.*?)<\/span>/);
      if (match) {
        const [, className, text] = match;
        return (
          <span key={index} className={className}>
            {text}
          </span>
        );
      }
    }
    return part;
  });
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
              <motion.div
                key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
                project.id === 1 ? 'border-4 border-blue-500 hover:border-purple-500' :
                project.id === 2 ? 'border-4 border-indigo-500 hover:border-indigo-600' :
                project.id === 3 ? 'border-4 border-emerald-500 hover:border-emerald-600' :
                project.id === 4 ? 'border-4 border-green-500 hover:border-green-600' :
                project.id === 5 ? 'border-4 border-orange-500 hover:border-orange-600' :
                project.id === 6 ? 'border-4 border-amber-500 hover:border-amber-600' :
                project.id === 7 ? 'border-4 border-cyan-500 hover:border-cyan-600' :
                project.id === 8 ? 'border-4 border-red-500 hover:border-red-600' :
                'border-2 border-gray-200'
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    className={`w-full h-full object-center hover:scale-105 transition-transform duration-300 ${[2, 3, 4, 5, 6, 7, 8].includes(project.id) ? 'object-contain' : 'object-cover'}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500" style={{display: project.image ? 'none' : 'flex'}}>
                  <span className="text-white text-lg font-semibold">Project Image</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <div className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {renderDescription(project.description)}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <RadialFillButton
                      text="GitHub"
                      startColor="#f8f9fa"
                      fillColor="#24292e"
                      textColor="#24292e"
                      fillTextColor="#ffffff"
                      size="small"
                      onClick={() => window.open(project.github, '_blank')}
                    />
                  )}
                  {project.live && (
                    <RadialFillButton
                      text="Live Demo"
                      startColor="#f8f9fa"
                      fillColor="#0066cc"
                      textColor="#0066cc"
                      fillTextColor="#ffffff"
                      size="small"
                      onClick={() => window.open(project.live, '_blank')}
                    />
                  )}
                </div>
              </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}