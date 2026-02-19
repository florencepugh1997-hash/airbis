'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat, ChatMessage } from '@/lib/chat-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send } from 'lucide-react';
import { ChatInput } from './chat-input';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const { conversations, currentConversationId, addConversation, addMessageToConversation, getCurrentConversation } = useChat();
  const [customerName, setCustomerName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentConversation = getCurrentConversation();

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentConversation?.messages]);

  const handleStartChat = () => {
    if (customerName.trim()) {
      const conversationId = `conv-${Date.now()}`;
      addConversation({
        id: conversationId,
        customerName: customerName,
        messages: [],
        createdAt: new Date(),
        isActive: true,
      });
      setIsStarted(true);
    }
  };

  const handleSendMessage = (message: string) => {
    if (currentConversationId) {
      const newMessage: ChatMessage = {
        id: `msg-${Date.now()}`,
        text: message,
        sender: 'customer',
        timestamp: new Date(),
        senderName: customerName,
      };
      addMessageToConversation(currentConversationId, newMessage);

      // Admin response removed to allow real live chat testing

    }
  };

  const handleReset = () => {
    setCustomerName('');
    setIsStarted(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 w-full max-w-sm h-96 md:h-[32rem] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0a1e3d] text-white px-5 py-4">
        <div>
          <h3 className="font-semibold text-base">Airbis Support</h3>
          <p className="text-xs text-blue-200">We typically reply in minutes</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {!isStarted ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={28} className="text-blue-500" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">Welcome to Airbis Support</p>
              <p className="text-gray-400 text-xs">Start a conversation with our team</p>
            </div>
          </div>
        ) : currentConversation && currentConversation.messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-sm text-center">
              Hello {customerName}! How can we assist you today?
            </p>
          </div>
        ) : (
          currentConversation?.messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${msg.sender === 'customer'
                  ? 'bg-[#0a1e3d] text-white rounded-br-md'
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                  }`}
              >
                <p className="text-xs font-semibold mb-1 opacity-70">{msg.senderName}</p>
                <p>{msg.text}</p>
                <p className="text-xs mt-1 opacity-50">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        {!isStarted ? (
          <div className="space-y-3">
            <Input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your name"
              className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleStartChat()}
            />
            <Button
              onClick={handleStartChat}
              className="w-full bg-[#0a1e3d] hover:bg-[#0f2d5a] text-white font-medium"
              disabled={!customerName.trim()}
            >
              Start Chat
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <ChatInput onSubmit={handleSendMessage} placeholder="Type your message..." />
            <Button variant="ghost" size="sm" onClick={handleReset} className="w-full text-xs text-gray-400 hover:text-gray-600">
              Start New Conversation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
