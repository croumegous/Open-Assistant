// https://nextjs.org/docs/basic-features/layouts
import { Footer } from "./Footer";
import type { NextPage } from "next";
import { Header } from "src/components/Header";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export const getDefaultLayout = (page: React.ReactElement) => (
  <div className="grid grid-rows-[min-content_1fr_min-content] h-full justify-items-stretch">
    <Header />
    {page}
    <Footer />
  </div>
);

export const noLayout = (page: React.ReactElement) => page;
