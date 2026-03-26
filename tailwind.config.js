/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {

      /* ---------------- FLOATING ANIMATIONS ---------------- */
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },

        slowPulse: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },

        glowPulse: {
          '0%,100%': { boxShadow: '0 0 0px rgba(34,197,94,0.2)' },
          '50%': { boxShadow: '0 0 18px rgba(34,197,94,0.5)' },
        },

        softScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },

        solidPulse: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.3)', opacity: '1' },
        },

        floatMini: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },

        /* ================= NEW RING PULSE ================= */

        pulseRing: {
          '0%': { transform: 'scale(0.6)', opacity: '1' },
          '60%': { transform: 'scale(3.5)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },

        pulseDot: {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',

        'slow-pulse': 'slowPulse 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'soft-scale': 'softScale 0.3s ease forwards',

        'solid-pulse': 'solidPulse 2s ease-in-out infinite',
        'float-mini': 'floatMini 4s ease-in-out infinite',

        /* NEW */
        'pulse-ring': 'pulseRing 1.25s cubic-bezier(0.215,0.61,0.355,1) infinite',
        'pulse-dot': 'pulseDot 1.25s cubic-bezier(0.455,0.03,0.515,0.955) infinite',
      },

      boxShadow: {
        'mentor': '0 15px 35px rgba(0,0,0,0.08)',
        'mentor-hover': '0 25px 50px rgba(0,0,0,0.15)',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }

    }
  },
  plugins: [],
}