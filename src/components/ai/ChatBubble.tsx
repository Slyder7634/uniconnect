"use client";

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  message: any;
}

const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-1">
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.4s]"></span>
    </div>
);

const ChatBubble: React.FC<Props> = ({ message }) => {
  const isModel = message?.role === 'model';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (isModel && message.text) {
      // Animate the text display for model messages
      let i = 0;
      setDisplayedText(''); // Reset on new message
      const intervalId = setInterval(() => {
        i++;
        setDisplayedText(message.text.substring(0, i));
        if (i >= message.text.length) {
          clearInterval(intervalId);
        }
      }, 20); // Typing speed in milliseconds

      return () => clearInterval(intervalId);
    } else {
      // For user messages, display text immediately
      setDisplayedText(message.text || '');
    }
  }, [message.text, isModel]);

  return (
    <div className={`my-2 flex ${isModel ? 'justify-start' : 'justify-end'} animate-fadeIn`}>
      <div 
        className={`
          group relative px-4 py-2 rounded-xl max-w-[85%] 
          ${isModel ? 
            'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-sm' : 
            'bg-indigo-600 text-white rounded-tr-sm'
          }
          shadow-sm hover:shadow-md transition-shadow duration-200
          transform transition-transform duration-200 hover:scale-[1.02]
        `}
      >
        <div className="whitespace-pre-wrap break-words text-sm prose dark:prose-invert min-h-[1.5rem]">
          {isModel && !message.text ? (
            <TypingIndicator />
          ) : (
            <ReactMarkdown>{displayedText}</ReactMarkdown>
          )}
        </div>
        <div className={`
          absolute -bottom-4 ${isModel ? 'left-0' : 'right-0'}
          text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200
        `}>
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
