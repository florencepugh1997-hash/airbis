'use client'

import { Headphones } from 'lucide-react'
import { useState } from 'react'

export function SupportWidget() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href="mailto:Kevinfeige7110@gmail.com"
                className="flex items-center gap-2 bg-[#0a1e3d] text-white p-4 rounded-full shadow-lg hover:bg-accent transition-all duration-300 group hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Contact Support"
            >
                <Headphones size={24} />
                <span
                    className={`max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ${isHovered ? 'max-w-[100px] pl-2' : ''
                        }`}
                >
                    Support
                </span>
            </a>
        </div>
    )
}
