import "./globals.css";
import AppToast from "@/components/AppToast";
import { siteMetaData } from "@/data/metadata";
import { cinzel, sora } from "@/data/fonts";
import Footer from "./footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatButton from "@/components/ChatButton";
import Header from "./header/page";

export const metadata = siteMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${cinzel.variable} ${sora.variable} flex min-h-screen flex-col antialiased`}
      >
        <AppToast />
        <Header />
        <main className="flex-1">
          {children} <SpeedInsights />
        </main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
