import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), reactRefresh()],
  alias: {
    "@": path.resolve(__dirname, "."),
  },
});
