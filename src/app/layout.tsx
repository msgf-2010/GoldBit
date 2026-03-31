import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider/ThemeProvider";
import "@/app/assets/styles/globals.scss";

export const metadata: Metadata = {
  title: {
    default: "GoldBit Solutions — Custom Software Development",
    template: "%s | GoldBit Solutions",
  },
  description:
    "GoldBit Solutions builds tailored software for small to mid-sized businesses. We design systems around your exact workflows — no templates, no compromises.",
  keywords: [
    "custom software development",
    "business software",
    "workflow automation",
    "operations software",
    "logistics software",
  ],
  authors: [{ name: "GoldBit Solutions LLC" }],
  creator: "GoldBit Solutions LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goldbitsolutions.com",
    siteName: "GoldBit Solutions",
    title: "GoldBit Solutions — Custom Software Development",
    description:
      "Software built around your business, not the other way around.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldBit Solutions — Custom Software Development",
    description:
      "Software built around your business, not the other way around.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
