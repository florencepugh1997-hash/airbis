'use client'

import { Headphones, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export function SupportWidget() {
    const [hoveredButton, setHoveredButton] = useState<'support' | 'whatsapp' | null>(null)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/447529452581"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 group hover:scale-105"
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Chat on WhatsApp"
            >
                <MessageSquare size={24} />
                <span
                    className={`max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ${hoveredButton === 'whatsapp' ? 'max-w-[120px] pl-2' : ''
                        }`}
                >
                    WhatsApp Chat
                </span>
            </a>

            {/* Support/Email Button */}
            <a
                href="mailto:Kevinfeige7110@gmail.com"
                className="flex items-center gap-2 bg-[#0a1e3d] text-white p-4 rounded-full shadow-lg hover:bg-accent transition-all duration-300 group hover:scale-105"
                onMouseEnter={() => setHoveredButton('support')}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Contact Support"
            >
                <Headphones size={24} />
                <span
                    className={`max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ${hoveredButton === 'support' ? 'max-w-[100px] pl-2' : ''
                        }`}
                >
                    Email Support
                </span>
            </a>
        </div>
    )
}
