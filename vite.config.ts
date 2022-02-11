import vue from "@vitejs/plugin-vue";
import md from "vite-plugin-md";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { readFileSync } from "fs";
import telefunc from "telefunc/vite";

const config: UserConfig = {
  resolve: {
    alias: {
      "#": __dirname,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md(),
    ssr(),
    AutoImport({
      imports: ["vue"],
      dts: "auto-imports.d.ts",
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md", "ts"],
      dirs: ["components"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.ts$/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],

      dts: "components.d.ts",
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),
    telefunc(),
  ],
  clearScreen: false,
  server: {
    https: {
      key: readFileSync("./certs/voice-in.com+5-key.pem"),
      cert: readFileSync("./certs/voice-in.com+5.pem"),
    },
    port: 3000,
  },
};

export default config;
