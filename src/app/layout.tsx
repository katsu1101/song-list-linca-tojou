// src/app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Suspense}            from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata = {
  title: "戸定梨香ちゃんの歌リスト",
  metadataBase: new URL("https://katsu1101.github.io/song-list-linca-tojou/"),
  description:
    "戸定梨香さんが配信で歌った最新の歌情報を更新。かわいいVTuber戸定梨香さんの歌声の魅力を堪能できるサイトです。",
  keywords: ["戸定梨香", "VTuber", "かわいい", "j-pop", "アニソン"],
  openGraph: {
    title: "戸定梨香ちゃんの歌リスト",
    description: "これは 戸定梨香ちゃんの歌リストアプリです",
    type: "website",
    url: "https://katsu1101.github.io/song-list-linca-tojou/",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@katsu1101",
    creator: "@katsu1101",
    title: "戸定梨香ちゃんの歌リスト",
    description: "これは 戸定梨香ちゃんの歌リストアプリです",
    images: ["og-image.png"],
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
    <head>
      {/* 基本メタタグ */}
      <meta charSet="UTF-8" />
      {/* AddToAny のスクリプトタグ */}
      <script defer src="https://static.addtoany.com/menu/page.js"></script>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="戸定梨香ちゃんの歌リスト"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FF0000" />

      {/* ファビコン・マニフェスト */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/manifest.json`} />

      {/* Open Graph / SNS 用 */}
      <meta property="og:site_name" content="戸定梨香ちゃんの歌リスト" />
      <meta property="og:locale" content="ja_JP" />
      <link
        rel="canonical"
        href="https://katsu1101.github.io/song-list-linca-tojou/"
      />

      {/* スタートアップ画像・ホーム画面用アイコン */}
      <link
        rel="apple-touch-startup-image"
        href={`${basePath}/apple-touch-icon.png`}
      />
      <link
        rel="shortcut icon"
        href={`${basePath}/android-chrome-192x192.png`}
      />

      {/* JSON-LD による構造化データ（クローラー向けにサイト情報を明示） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://katsu1101.github.io/song-list-linca-tojou/",
            "name": "戸定梨香ちゃんの歌リスト",
            "description":
              "戸定梨香さんが配信で歌った最新の歌情報を更新。かわいいVTuber戸定梨香さんの歌声の魅力を堪能できるサイトです。",
            "publisher": {
              "@type": "Person",
              "name": "かつき",
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": "https://katsu1101.github.io/song-list-linca-tojou/?s={search_term_string}",
                "query-input": "required name=search_term_string",
                "description": "通常の検索。ユーザーが入力したキーワードをそのまま検索します。"
              },
              {
                "@type": "SearchAction",
                "target": "https://katsu1101.github.io/song-list-linca-tojou/?s=%23{search_term_string}",
                "query-input": "required name=search_term_string",
                "description": "タグ検索。検索クエリの先頭にURLエンコードされた'#'（%23）を付与します。"
              }
            ]
          }),
        }}
      ></script>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Suspense>
        {children}
      </Suspense>
    </body>
    </html>
  );
}
