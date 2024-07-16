import { FaMicrophone, FaVolumeUp, FaCode, FaGithub, FaGift, FaChevronDown } from "react-icons/fa";
import { useSpeech } from 'malivan-voice';
import FeatureCard from "./FeatureCard";


const SpeechComponent = () => {
  const { speak, stopSpeaking, startListening, stopListening, transcript, isListening, isSpeaking, error } = useSpeech({
    textToVoiceOptions: { lang: 'th-TH', rate: 1.0 },
    voiceToTextOptions: { lang: 'th-TH', continuous: true }
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-purple-400">Live Demo</h2>
      {error && <p className="text-red-500 mb-2">Error: {error}</p>}
      <div className="flex flex-wrap gap-4 mb-4">
        <button onClick={() => speak('สวัสดีครับ')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Speak
        </button>
        <button onClick={stopSpeaking} disabled={!isSpeaking} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 transition duration-300">
          Stop Speaking
        </button>
        <button onClick={startListening} disabled={isListening} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 transition duration-300">
          Start Listening
        </button>
        <button onClick={stopListening} disabled={!isListening} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 transition duration-300">
          Stop Listening
        </button>
      </div>
      <p className="mb-2 text-gray-300">
        <span className="font-semibold text-purple-400">Transcript:</span> {transcript}
      </p>
      <p className="text-gray-300">
        <span className="font-semibold text-purple-400">Status:</span>
        <span className={isListening ? "text-green-400" : "text-red-400"}>
          {isListening ? " Listening" : " Not Listening"}
        </span>
        ,
        <span className={isSpeaking ? "text-green-400" : "text-red-400"}>
          {isSpeaking ? " Speaking" : " Not Speaking"}
        </span>
      </p>
    </div>
  );
};

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
            href="#get-started"
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="w-8 h-8 text-purple-400" />
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
          <SpeechComponent />
        </div>
      </main>

      <section id="get-started" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get Started in Minutes
          </h2>
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between  mb-4">
              <h3 className="text-2xl font-semibold text-purple-400">
                Installation
              </h3>
              <div>
                <a
                  href="https://www.npmjs.com/package/malivan-voice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  View on NPM
                </a>
              </div>
            </div>
            <pre className="text-sm md:text-base overflow-x-auto bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">npm install malivan-voice</code>
            </pre>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
              Usage
            </h3>
            <pre className="text-sm md:text-base overflow-x-auto bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                {`import React from 'react';
import { useSpeech } from 'malivan-voice';

const SpeechComponent = () => {
  const { speak, startListening, transcript } = useSpeech({
    textToVoiceOptions: { lang: 'th-TH', rate: 1.0 },
    voiceToTextOptions: { lang: 'th-TH', continuous: true }
  });

  return (
    <div>
      <button onClick={() => speak('สวัสดีครับ')}>Speak</button>
      <button onClick={startListening}>Start Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechComponent;

`}
              </code>
            </pre>
          </div>
        </div>
      </section>

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