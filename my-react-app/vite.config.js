import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Pomodoro-App-React-JS/', // Replace 'your-repo-name' with your actual repository name
});
