/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                canvas: {
                    default: '#0d1117',
                    subtle: '#161b22',
                    overlay: '#161b22',
                },
                border: {
                    default: '#30363d',
                    muted: '#21262d',
                },
                fg: {
                    default: '#c9d1d9',
                    muted: '#8b949e',
                    subtle: '#6e7681',
                },
                accent: {
                    fg: '#58a6ff',
                    emphasis: '#1f6feb',
                    muted: 'rgba(56,139,253,0.4)',
                    subtle: 'rgba(56,139,253,0.15)',
                },
                success: {
                    fg: '#3fb950',
                    emphasis: '#238636',
                },
                attention: {
                    fg: '#d29922',
                    subtle: 'rgba(187,128,9,0.15)',
                },
                danger: {
                    fg: '#f85149',
                },
                neutral: {
                    muted: 'rgba(110,118,129,0.4)',
                }
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
                mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
