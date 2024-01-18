import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigpaths from "vite-tsconfig-paths";
import type { Config } from "./src/config";

const config: Config = {
	release: process.env.RELEASE || "dev",
	apiHost: "/",
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigpaths(), svelte({ emitCss: false })],
	define: {
		CONFIG_INPUT: JSON.stringify(config),
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "forbidden.html"),
			},
		},
	},
});
