'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/lib/admin-context';
import { AdminSidebar } from '@/components/admin/sidebar';
import { ChatList } from '@/components/admin/chat-list';
import { ChatPanel } from '@/components/admin/chat-panel';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { isLoggedIn } = useAdmin();
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/admin');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden md:p-0 pt-16">
        {/* Chat List - Hidden on mobile if chat selected */}
        <div className={`
          w-full md:w-80 bg-card border-r border-border md:flex flex-col
          ${selectedConversationId ? 'hidden md:flex' : 'flex'}
          h-full
        `}>
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Conversations</h2>
          </div>
          <div className="overflow-y-auto flex-1 p-4">
            <ChatList
              selectedConversationId={selectedConversationId}
              onSelectConversation={setSelectedConversationId}
            />
          </div>
        </div>

        {/* Chat Panel - Hidden on mobile if no chat selected */}
        <div className={`
          flex-1 overflow-hidden bg-white/50
          ${!selectedConversationId ? 'hidden md:block' : 'block fixed inset-0 z-50 md:static bg-white'}
        `}>
          {selectedConversationId && (
            <div className="md:hidden p-2 absolute top-2 left-2 z-50">
              <button
                onClick={() => setSelectedConversationId(null)}
                className="p-2 bg-gray-100 rounded-full shadow-md text-sm font-bold text-gray-700"
              >
                ← Back
              </button>
            </div>
          )}
          <ChatPanel conversationId={selectedConversationId} />
        </div>
      </div>
    </div>
  );
}
