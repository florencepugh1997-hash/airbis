'use client';

import { useChat } from '@/lib/chat-context';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface ChatListProps {
  selectedConversationId: string | null;
  onSelectConversation: (id: string) => void;
}

export function ChatList({ selectedConversationId, onSelectConversation }: ChatListProps) {
  const { conversations } = useChat();

  if (conversations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-4xl mb-3">💬</div>
        <p className="text-muted-foreground">No conversations yet</p>
        <p className="text-sm text-muted-foreground/70 mt-2">Customer conversations will appear here</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {conversations.map(conversation => (
        <Button
          key={conversation.id}
          variant={selectedConversationId === conversation.id ? 'default' : 'outline'}
          className={`h-auto text-left p-4 justify-start flex-col items-start gap-2 ${
            selectedConversationId === conversation.id
              ? 'bg-accent text-accent-foreground'
              : 'border border-border'
          }`}
          onClick={() => onSelectConversation(conversation.id)}
        >
          <div className="font-semibold text-sm">{conversation.customerName}</div>
          <div className="text-xs opacity-70">
            {conversation.messages.length} message{conversation.messages.length !== 1 ? 's' : ''}
            {' '}
            • {formatDistanceToNow(new Date(conversation.createdAt), { addSuffix: true })}
          </div>
          {conversation.messages.length > 0 && (
            <div className="text-xs line-clamp-1 opacity-70">
              {conversation.messages[conversation.messages.length - 1].text}
            </div>
          )}
        </Button>
      ))}
    </div>
  );
}
