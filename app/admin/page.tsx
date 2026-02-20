'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/lib/admin-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { getAdminCredentialsForDemo } from '@/lib/admin-auth';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const { isLoggedIn, login } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const demoCredentials = getAdminCredentialsForDemo();

  // Redirect if already logged in
  if (isLoggedIn) {
    router.push('/admin/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      setIsLoading(false);
      return;
    }

    if (login(email, password)) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password');
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f9ff] px-4 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <Image src="/logo.png" fill className="object-cover" alt="bg" />
      </div>

      <Card className="w-full max-w-sm sm:max-w-md shadow-2xl relative z-10 border-0">
        <CardHeader className="bg-[#0a1e3d] text-white rounded-t-xl text-center pb-8 pt-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 relative bg-white/10 rounded-full p-2">
              <Image src="/logo.png" alt="Admin" fill className="object-contain p-2" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription className="text-blue-200">
            Authorized Personnel Only
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 px-6 sm:px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-destructive/10 border border-destructive rounded-lg p-3 flex gap-2 animate-pulse">
                <AlertCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@franklin-aviation.com"
                disabled={isLoading}
                className="h-11 border-gray-200 focus:border-[#0a1e3d] focus:ring-[#0a1e3d]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={isLoading}
                className="h-11 border-gray-200 focus:border-[#0a1e3d] focus:ring-[#0a1e3d]"
              />
            </div>

            <Button type="submit" className="w-full h-11 bg-[#0a1e3d] hover:bg-[#0f2d5a] text-white font-semibold shadow-lg text-base" disabled={isLoading}>
              {isLoading ? 'Accessing...' : 'Secure Login'}
            </Button>
          </form>


        </CardContent>
      </Card>

      <div className="absolute bottom-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Franklin Aviation Aerospace. All rights reserved.
      </div>
    </div>
  );
}
