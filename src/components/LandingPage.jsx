import { FaMicrophone, FaVolumeUp, FaCode, FaGithub, FaGift } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import Speech from "./Speech"
import GetStartedSection from "./GetStartedSection";


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-gray-100 overflow-hidden">
      <header className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Malivan Voice
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
          Empower your React applications with seamless voice interactions
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://www.npmjs.com/package/malivan-voice"
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105 text-center"
          >
            Get Started
          </a>
          <a
            href="#live-demo"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <span>Live Demo</span>
          </a>
        </div>
     
      </header>

      <main className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <FeatureCard
            icon={<FaMicrophone className="w-12 h-12" />}
            title="Speech-to-Text"
            description="Convert spoken words to text with real-time transcription."
          />
          <FeatureCard
            icon={<FaVolumeUp className="w-12 h-12" />}
            title="Text-to-Speech"
            description="Transform text into natural-sounding speech with customizable options."
          />
          <FeatureCard
            icon={<FaCode className="w-12 h-12" />}
            title="Easy Integration"
            description="Simple React hook for quick and seamless integration into your projects."
          />
          <FeatureCard
            icon={<FaGift className="w-12 h-12" />}
            title="Free to Use"
            description="Enjoy all features at no cost. Perfect for personal and commercial projects."
          />
        </div>
        <div id="live-demo" className="pt-20">
          <Speech />
        </div>
      </main>
      <GetStartedSection />

      <footer className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400">
            &copy; 2023 Malivan Voice. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/beerth21624"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;