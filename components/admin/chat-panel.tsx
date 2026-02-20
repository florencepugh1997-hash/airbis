'use client';

import { useChat, ChatMessage } from '@/lib/chat-context';
import { ChatInput } from '@/components/chat-input';
import { useRef, useEffect } from 'react';

interface ChatPanelProps {
  conversationId: string | null;
}

export function ChatPanel({ conversationId }: ChatPanelProps) {
  const { conversations, addMessageToConversation } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversation = conversations.find(c => c.id === conversationId);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation?.messages]);

  if (!conversationId || !conversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-4">👋</div>
          <p className="text-lg font-semibold text-muted-foreground">Select a conversation to start</p>
        </div>
      </div>
    );
  }

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      text: message,
      sender: 'admin',
      timestamp: new Date(),
      senderName: 'Franklin Aviation Support',
    };
    addMessageToConversation(conversationId, newMessage);
  };

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Header */}
      <div className="border-b border-border p-4">
        <h2 className="font-semibold text-lg">{conversation.customerName}</h2>
        <p className="text-sm text-muted-foreground">
          {conversation.messages.length} message{conversation.messages.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {conversation.messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground text-sm">No messages yet</p>
          </div>
        ) : (
          conversation.messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs rounded-lg px-4 py-2 text-sm ${msg.sender === 'admin'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground'
                  }`}
              >
                <p className="text-xs font-semibold mb-1 opacity-70">{msg.senderName}</p>
                <p className="break-words">{msg.text}</p>
                <p className="text-xs mt-1 opacity-60">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 bg-secondary/30">
        <ChatInput onSubmit={handleSendMessage} placeholder="Type your response..." />
      </div>
    </div>
  );
}
