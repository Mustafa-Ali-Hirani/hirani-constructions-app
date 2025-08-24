import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- THIS IS THE NEW BRIDGE FOR VITE ---
  server: {
    proxy: {
      // Any request that starts with "/api" will be forwarded
      "/api": {
        // We forward it to our backend workshop
        target: "http://localhost:5000",
        // This is a necessary setting for the proxy to work correctly
        changeOrigin: true,
      },
    },
  },
});
