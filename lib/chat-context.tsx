'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'customer' | 'admin';
  timestamp: Date; // Note: Date objects need special handling with localStorage
  senderName: string;
}

export interface ChatConversation {
  id: string;
  customerName: string;
  messages: ChatMessage[];
  createdAt: Date;
  isActive: boolean;
}

interface ChatContextType {
  conversations: ChatConversation[];
  currentConversationId: string | null;
  addConversation: (conversation: ChatConversation) => void;
  addMessageToConversation: (conversationId: string, message: ChatMessage) => void;
  getCurrentConversation: () => ChatConversation | null;
  setCurrentConversation: (id: string) => void;
  getConversationById: (id: string) => ChatConversation | undefined;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const STORAGE_KEY = 'airbis_chat_conversations';

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const loadConversations = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          // Revive Date objects
          const revived = parsed.map((conv: any) => ({
            ...conv,
            createdAt: new Date(conv.createdAt),
            messages: conv.messages.map((msg: any) => ({
              ...msg,
              timestamp: new Date(msg.timestamp)
            }))
          }));
          setConversations(revived);
        } catch (error) {
          console.error('Failed to parse chat conversations', error);
        }
      }
    };

    loadConversations();

    // Listen for storage events (changes in other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        loadConversations();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

    // Poll for changes every 2 seconds as a fallback/simulate real-time
    // const interval = setInterval(loadConversations, 2000);
    // return () => {
    //   window.removeEventListener('storage', handleStorageChange);
    //   clearInterval(interval);
    // };
  }, []);

  // Save to localStorage whenever conversations change
  const saveConversations = (newConversations: ChatConversation[]) => {
    setConversations(newConversations);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConversations));
    // Dispatch a custom event for the current tab to update immediately if needed
    window.dispatchEvent(new Event('chat-updates'));
  };

  const addConversation = (conversation: ChatConversation) => {
    // check if exists
    if (conversations.some(c => c.id === conversation.id)) return;
    saveConversations([...conversations, conversation]);
    setCurrentConversationId(conversation.id);
  };

  const addMessageToConversation = (conversationId: string, message: ChatMessage) => {
    const updatedConversations = conversations.map(conv =>
      conv.id === conversationId
        ? { ...conv, messages: [...conv.messages, message] }
        : conv
    );
    saveConversations(updatedConversations);
  };

  const getCurrentConversation = () => {
    if (!currentConversationId) return null;
    return conversations.find(conv => conv.id === currentConversationId) || null;
  };

  const getConversationById = (id: string) => {
    return conversations.find(conv => conv.id === id);
  };

  const setCurrentConversation = (id: string) => {
    setCurrentConversationId(id);
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        currentConversationId,
        addConversation,
        addMessageToConversation,
        getCurrentConversation,
        setCurrentConversation,
        getConversationById,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
