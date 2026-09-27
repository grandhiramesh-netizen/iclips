import type { Metadata } from "next";
import { Suspense } from "react";
import { fontVariables } from "@/app/fonts";
import { AppHeader } from "@/components/app-header";
import { Shell } from "@/components/shell";
import { MainColumn } from "@/components/main-column";
import { Sidebar, SidebarFallback } from "@/components/sidebar";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  applicationName: "iClips",
  title: {
    default: "iClips",
    template: "%s · iClips",
  },
  description: "Watch and share video clips.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="min-h-dvh bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Shell>
          <AppHeader />
          <Suspense fallback={<SidebarFallback />}>
            <Sidebar />
          </Suspense>
          <MainColumn>{children}</MainColumn>
        </Shell>
      </body>
    </html>
  );
}
