export interface ChatMessage {
    id: string;
    text: string;
    sender: 'customer' | 'admin';
    timestamp: Date;
    senderName: string;
}

export interface ChatConversation {
    id: string;
    customerName: string;
    messages: ChatMessage[];
    createdAt: Date;
    isActive: boolean;
    lastMessageAt?: Date;
    unreadCount?: number;
}
