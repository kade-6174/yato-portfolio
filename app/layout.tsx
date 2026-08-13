import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yato | portfolio",
  description: "yatoのプロフィールと制作物をまとめたポートフォリオサイトです。",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
