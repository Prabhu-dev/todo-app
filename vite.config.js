import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"todo-app",
    short_name:"todo",
    description:"Simple Todo Application With Local Storeage",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#ffffff',
  background_color:'#ffffff',
  display:"standalone",
  scope:'/',
  start_url:"/todo-app",
  orientation:'portrait'
  },
};

// https://vite.dev/config/
export default defineConfig({
  base: "/todo-app",
  plugins: [react(),VitePWA(manifestForPlugin)],
})
