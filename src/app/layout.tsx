import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Topbar, TopbarFallback } from "@/components/topbar";

export const metadata: Metadata = {
  title: {
    default: "aitoollife CRM",
    template: "%s | aitoollife CRM",
  },
  description: "A CRM for clinics and wellness businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-mist text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        <div className="lg:grid lg:min-h-screen lg:grid-cols-[15.5rem_minmax(0,1fr)]">
          <Sidebar />
          <div className="flex min-w-0 flex-col">
            <Suspense fallback={<TopbarFallback />}>
              <Topbar />
            </Suspense>
            <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-6 sm:px-8 sm:pt-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
