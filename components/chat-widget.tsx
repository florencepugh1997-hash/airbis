'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatWindow } from './chat-window';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#0a1e3d] hover:bg-[#0f2d5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center z-40 transition-all duration-300 hover:scale-110"
        title="Chat with us"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>
    </>
  );
}
