import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
export interface State {
    activeId: number;
    setActiveId: (activeId: number) => void;
}
