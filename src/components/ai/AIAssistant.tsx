"use client";

import React, { useState } from 'react';
import AssistantPanel from './AssistantPanel';
import { useUser } from '@/firebase/provider';
import { MessageCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = async (prompt: string) => {
    if (!prompt) return;
    setError(null);
    const userMsg = { role: 'user', text: prompt };
    
    // Add user message and a placeholder for the model's response
    setMessages(m => [...m, userMsg, { role: 'model', text: '' }]);
    setIsLoading(true);

    try {
      const resp = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, history: messages, userId: user?.uid ?? null }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data.error || 'AI request failed.');
      }

      // Update the placeholder message with the actual response
      setMessages(currentMessages => {
          const newMessages = [...currentMessages];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text = data.text;
          }
          return newMessages;
      });

    } catch (e: any) {
      console.error(e);
      setError(e?.message ?? 'An error occurred');
      // Remove the placeholder model message on error
      setMessages(m => m.slice(0, m.length - 1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(s => !s)}
        className={`fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg z-50 transition-all duration-300 ease-in-out ${isOpen ? 'scale-90 rotate-180' : 'scale-100'}`}
        aria-label="Toggle AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <div className={`fixed bottom-20 right-6 z-40 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <AssistantPanel
          onClose={() => setIsOpen(false)}
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          onClearChat={handleClear}
          error={error}
        />
      </div>
    </>
  );
};

export default AIAssistant;
