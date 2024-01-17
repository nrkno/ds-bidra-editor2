import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigpaths from "vite-tsconfig-paths";
import type { Config } from "./src/config";

const config: Config = {
	release: process.env.RELEASE || "dev",
	apiHost: "http://localhost:80",
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigpaths(), svelte({ hot: !process.env.VITEST })],
	define: {
		CONFIG_INPUT: JSON.stringify(config),
	},
});
