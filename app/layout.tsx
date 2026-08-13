import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yato — portfolio",
  description: "yatoの自己紹介と制作物をまとめたポートフォリオ。",
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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
