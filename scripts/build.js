const { build } = require("esbuild");
const { filelocPlugin } = require("esbuild-plugin-fileloc"); // This plugins adds a support layer for __dirname og __filename

build({
	entryPoints: ["src/server/index.ts"],
	outfile: "./dist/server.js",
	loader: { ".ts": "ts" },
	sourcemap: "inline",
	platform: "node",
	target: "node16",
	bundle: true,
	minify: true,
	write: true,
	metafile: true,
	plugins: [filelocPlugin()],
})
	.then((result) => {
		console.log("[Server] Successfully built", result);
	})
	.catch((e) => {
		console.log(e);
		process.exit(1);
	});
