import "./globals.css";
import AppToast from "@/components/AppToast";
import { siteMetaData } from "@/data/metadata";
import { grotesk, sora } from "@/data/fonts";
import Header from "./Header/page";
import Footer from "./Footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = siteMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.variable} ${sora.variable} flex min-h-screen flex-col antialiased`}
      >
        <AppToast />
        <Header />
        <main className="flex-1">
          {children} <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
