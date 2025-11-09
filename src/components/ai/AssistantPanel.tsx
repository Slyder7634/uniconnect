"use client";

import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';

interface Props {
  onClose: () => void;
  messages: any[];
  onSendMessage: (prompt: string) => void;
  isLoading: boolean;
  onClearChat: () => void;
  error: string | null;
}

const AssistantPanel: React.FC<Props> = ({ onClose, messages, onSendMessage, isLoading, onClearChat, error }) => {
  const [prompt, setPrompt] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim()) return;
    onSendMessage(prompt.trim());
    setPrompt('');
  };

  return (
    <div className="w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden backdrop-blur-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
          AI Assistant
        </h3>
        <div className="flex items-center gap-2">
          <button 
            onClick={onClearChat}
            className="text-sm text-red-500 hover:text-red-600 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            Clear
          </button>
          <button 
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700/50"
          >
            Close
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 scroll-smooth">
        {messages.length === 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-8">
            👋 Hi! How can I help you today?
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className="transition-all duration-300 ease-out transform">
            <ChatBubble message={m} />
          </div>
        ))}
        <div ref={endRef} />
        {error && (
          <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
            {error}
          </div>
        )}
      </div>

      <form onSubmit={submit} className="p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full p-3 pr-24 border border-gray-200 dark:border-gray-700 rounded-lg resize-none h-12 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all dark:bg-gray-800 dark:text-gray-100 placeholder-gray-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
          />
          <div className="absolute right-2 top-2">
            {isLoading ? (
              <button 
                type="button" 
                className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Stop
              </button>
            ) : (
              <button 
                type="submit" 
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
                disabled={!prompt.trim()}
              >
                Send
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssistantPanel;
