import CodeBlock from './CodeBlock';

const GetStartedSection = () => {
  const installCode = `npm install malivan-voice`;
  const usageCode = `import React from 'react';
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

export default SpeechComponent;`;

  return (
    <section
      id="get-started"
      className="py-20 "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Get Started in Minutes
        </h2>
        <div className="p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Installation
            </h3>
            <a
              href="https://www.npmjs.com/package/malivan-voice"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
            >
              View on NPM
            </a>
          </div>
          <CodeBlock code={installCode} />

          <h3 className="text-2xl font-semibold mt-12 mb-6 text-purple-400">
            Usage
          </h3>
          <CodeBlock code={usageCode} />
        </div>
      </div>
    </section>
  );
};


export default GetStartedSection;
