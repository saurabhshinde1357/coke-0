
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				coke: {
					red: '#E61D2A',
					black: '#000000',
					silver: '#C0C0C0',
					darkGray: '#1A1A1A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'can-fall': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
					'60%': { transform: 'translateY(20vh) rotate(360deg)', opacity: '1' },
					'100%': { transform: 'translateY(0) rotate(720deg)', opacity: '1' }
				},
				'bubble-rise': {
					'0%': { transform: 'translateY(100%) translateX(0)', opacity: '0' },
					'50%': { opacity: '0.8' },
					'100%': { transform: 'translateY(-100vh) translateX(20px)', opacity: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6', boxShadow: '0 0 5px rgba(230, 29, 42, 0.6), 0 0 10px rgba(230, 29, 42, 0.4)' },
					'50%': { opacity: '1', boxShadow: '0 0 15px rgba(230, 29, 42, 0.8), 0 0 20px rgba(230, 29, 42, 0.6)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'can-fall': 'can-fall 2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
				'bubble-rise': 'bubble-rise 8s linear infinite',
				'bubble-rise-slow': 'bubble-rise 12s linear infinite',
				'bubble-rise-fast': 'bubble-rise 6s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'shimmer': 'shimmer 3s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
