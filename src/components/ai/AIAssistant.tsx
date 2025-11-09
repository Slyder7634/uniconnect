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
    setMessages(m => [...m, userMsg]);
    setIsLoading(true);
    try {
      const resp = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, userId: user?.uid ?? null }),
      });
      if (!resp.ok) throw new Error('AI request failed');
      const data = await resp.json();
      const aiText = data.text ?? data.answer ?? JSON.stringify(data);
      setMessages(m => [...m, { role: 'model', text: aiText }]);
    } catch (e: any) {
      console.error(e);
      setError(e?.message ?? 'An error occurred');
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
