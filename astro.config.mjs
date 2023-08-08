import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://creativesight.github.io",
  base: "/eldenlord/",
  root: "eldenlord",
  integrations: [tailwind()],
  experimental: {
    assets: true,
  },
});
