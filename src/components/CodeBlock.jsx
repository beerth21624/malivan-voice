import  { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from "prop-types";

SyntaxHighlighter.registerLanguage('javascript', js);

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-sm py-1 px-2 rounded transition duration-300"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
        padding: '1.5rem',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
      }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};


CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeBlock;