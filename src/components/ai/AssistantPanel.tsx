"use client";

import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { Trash2, X, Send, Mic } from 'lucide-react';

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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  // Auto-scroll to the latest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [prompt]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) return;
    onSendMessage(trimmedPrompt);
    setPrompt('');
  };

  const handleVoiceInput = () => {
    const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      setPrompt(transcript);
    };

    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div className="w-96 h-[600px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full transition-colors ${isLoading ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
          AI Assistant
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={onClearChat}
            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
            aria-label="Clear Chat"
          >
            <Trash2 size={18} />
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
            aria-label="Close Panel"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar">
        {messages.length === 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-8 flex flex-col items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
            <span>Hi! How can I help you today?</span>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className="transition-all duration-300 ease-out">
            <ChatBubble message={m} />
          </div>
        ))}
        <div ref={endRef} />
        {error && (
          <div className="text-red-600 dark:text-red-400 text-sm mt-2 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800/50">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={submit} className="p-4 bg-white/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
        <div className="relative flex items-end">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full p-3 pr-24 bg-gray-100 dark:bg-gray-700/50 border border-transparent rounded-xl resize-none max-h-40 focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-700 transition-all duration-200 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 no-scrollbar"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
          />
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`absolute right-14 bottom-2.5 p-2 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="Toggle Voice Input"
          >
            <Mic size={18} />
          </button>
          <button
            type="submit"
            className="absolute right-3 bottom-2.5 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!prompt.trim() || isLoading}
            aria-label="Send Message"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssistantPanel;
