import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "app/assets/basic")],
    additionalData: `
      @use "sass:map";
      @use "variables.scss" as *;
      @use "mixins.scss" as *;
      @use "extends.scss" as *;
    `,
  },
};

export default nextConfig;
