import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1e3d] text-white mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 font-bold text-xl hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo2.jpeg"
                  alt="Franklin Aviation Logo"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">
                Franklin Aviation
              </span>
            </Link>
            <p className="text-sm text-blue-200/80 leading-relaxed">
              Premium aerospace procurement platform connecting buyers with certified aircraft components worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                About Us
              </Link>
              <Link href="/faq" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base">Support</h3>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                Contact Us
              </Link>
              <Link href="/shipping" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="text-sm text-blue-200/80 hover:text-blue-300 transition-colors">
                Returns
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-blue-200/80">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span>+44 7529 452581</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200/80">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span>franklinaviation490@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-blue-200/80">
                <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Cardiff CF24 3DG, The Business Centre, 61 Wellfield Road</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200/60">
            © {currentYear} Franklin Aviation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
