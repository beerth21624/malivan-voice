import { useState, useEffect } from "react";
import { useSpeech } from "malivan-voice";

const Speech = () => {
  const [inputText, setInputText] = useState("สวัสดี");
  const [realtimeTranscript, setRealtimeTranscript] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    speak,
    stopSpeaking,
    startListening,
    stopListening,
    transcript,
    isListening,
    isSpeaking,
    error,
  } = useSpeech({
    textToVoiceOptions: { lang: "th-TH", rate: 1.0 },
    voiceToTextOptions: {
      lang: "th-TH",
      continuous: true,
      interimResults: true,
    },
  });

  useEffect(() => {
    setRealtimeTranscript(transcript);
  }, [transcript]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      const timer = setTimeout(() => setErrorMessage(""), 5000); // Clear error after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [error]);

  const toggleSpeak = () => {
    setErrorMessage(""); // Clear any previous errors
    if (isSpeaking) {
      stopSpeaking();
    } else if (inputText.trim()) {
      speak(inputText);
    } else {
      setErrorMessage("Please enter text to speak");
    }
  };

  const toggleListening = () => {
    setErrorMessage(""); // Clear any previous errors
    if (isListening) {
      stopListening();
    } else {
      startListening();
      setRealtimeTranscript(""); // Clear transcript when starting new listening session
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
     Demo
      </h2>

      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      <div className="mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to speak"
          className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={toggleSpeak}
          className={`flex items-center justify-center w-16 h-16 rounded-full transition duration-300 ${
            isSpeaking
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSpeaking ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a5 5 0 001.42 7.072M2.758 2.758a9 9 0 0112.728 0"
              />
            )}
          </svg>
        </button>
        <button
          onClick={toggleListening}
          className={`flex items-center justify-center w-16 h-16 rounded-full transition duration-300 ${
            isListening
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-6 min-h-[100px] transition-all duration-300">
        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Realtime Transcript:
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {realtimeTranscript || "Start speaking to see the transcript"}
        </p>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-center">
        {isListening && <span className="text-green-500">Listening</span>}
        {isSpeaking && <span className="text-blue-500">Speaking</span>}
        {!isListening && !isSpeaking && <span>Idle</span>}
      </p>
    </div>
  );
};

export default Speech;
