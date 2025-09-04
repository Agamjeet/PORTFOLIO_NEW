"use client";

import Image from "next/image";
import GsapButton from "./GsapButton";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m an AI engineer and freelance data scientist passionate about building innovative solutions
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Specializing in AI, data science, and software development, I focus on automating complex tasks and optimizing systems. I aim to create impactful AI-powered applications and SaaS products while pursuing entrepreneurship. Outside of tech, I love traveling and exploring new places.
            </p>
            <a href="https://drive.google.com/file/d/1zC_cOOF1YzwwJQgd-NTtnMGX6O7qmgH_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <GsapButton
                text="View Resume"
                startColor="#ffffff"
                fillColor="#3b82f6"
                textColor="#3b82f6"
                fillTextColor="#ffffff"
              />
            </a>
          </div>
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-blue-500 ring-offset-4 ring-offset-white overflow-hidden shadow-2xl">
                <Image src="/ME.jpg" alt="Agamjeet Singh" width={256} height={256} className="object-cover w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


