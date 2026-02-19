/**
 * Airbis Color System
 * Premium Navy Blue & White theme
 */

export const colors = {
  // Primary Navy Blue
  navy: {
    DEFAULT: '#001f3f',
    light: '#003d7a',
    lighter: '#336699',
    dark: '#000f1f',
  },
  
  // Neutral Colors
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Accent Colors
  accent: {
    blue: '#0066cc',
    green: '#28a745',
    red: '#dc3545',
    yellow: '#ffc107',
  },
  
  // Functional Colors
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#0066cc',
} as const

export const shadows = {
  soft: '0 2px 8px rgba(0, 31, 63, 0.1)',
  softLg: '0 4px 16px rgba(0, 31, 63, 0.15)',
  medium: '0 4px 12px rgba(0, 31, 63, 0.15)',
  lg: '0 10px 25px rgba(0, 31, 63, 0.2)',
} as const

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
} as const
