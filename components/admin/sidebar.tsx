'use client';

import Link from 'next/link';
import { useAdmin } from '@/lib/admin-context';
import { Button } from '@/components/ui/button';
import { MessageSquare, LogOut, LayoutDashboard, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export function AdminSidebar() {
  const { logout, adminEmail } = useAdmin();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/admin');
  };

  const isActive = (path: string) => pathname === path;

  // Mobile Header & Toggle
  const MobileHeader = () => (
    <div className="md:hidden bg-primary text-primary-foreground p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2 font-bold text-xl">
        <div className="w-9 h-9 relative rounded-full overflow-hidden bg-white/10">
          <Image
            src="/logo.png"
            alt="Airbis Logo"
            fill
            className="object-cover"
          />
        </div>
        <span>Airbis Admin</span>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );

  return (
    <>
      <MobileHeader />

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 h-screen bg-primary text-primary-foreground flex flex-col z-50 transition-transform duration-300 ease-in-out
        w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:top-0
      `}>
        {/* Branding (Desktop) */}
        {/* Only show on desktop or when menu is open (but layout handles visibility) */}
        <div className="p-6 border-b border-primary/30 hidden md:block">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            Airbis Admin
          </h1>
          <p className="text-xs text-primary-foreground/70 mt-2 truncate" title={adminEmail || ''}>
            {adminEmail}
          </p>
        </div>

        {/* Branding (Mobile Drawer) */}
        <div className="p-6 border-b border-primary/30 md:hidden">
          <h1 className="text-xl font-bold">Menu</h1>
        </div>


        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          <Link href="/admin/dashboard" onClick={() => setIsOpen(false)}>
            <Button
              variant={isActive('/admin/dashboard') ? 'default' : 'ghost'}
              className={`w-full justify-start gap-2 ${isActive('/admin/dashboard')
                ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                : 'text-primary-foreground hover:bg-primary/80'
                }`}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/dashboard?tab=messages" onClick={() => setIsOpen(false)}>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-primary-foreground hover:bg-primary/80"
            >
              <MessageSquare size={18} />
              Messages
            </Button>
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-primary/30">
          <Button
            onClick={handleLogout}
            className="w-full gap-2 bg-destructive hover:bg-destructive/90"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
}
