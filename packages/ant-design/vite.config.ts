import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@lib": resolve(__dirname, "./src/lib"),
    },
  },
})
