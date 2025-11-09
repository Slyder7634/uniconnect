"use client";

import React from 'react';

interface Props {
  message: any;
}

const ChatBubble: React.FC<Props> = ({ message }) => {
  const isModel = message?.role === 'model';
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
        <div className="whitespace-pre-wrap break-words text-sm">
          {message?.text ?? (message?.parts && message.parts[0]?.text) ?? ''}
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
