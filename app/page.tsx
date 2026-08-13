"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main>
      <header>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#about">about</a>
          <span>/</span>
          <a href="#works">works</a>
          <span>/</span>
          <a href="https://x.com/yato_dev_" target="_blank" rel="noreferrer">x</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={darkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
          onClick={() => setDarkMode((value) => !value)}
        >
          {darkMode ? "light" : "dark"}
        </button>
      </header>

      <section className="intro" aria-labelledby="site-title">
        <h1 id="site-title">portfolio</h1>
        <p>yato&apos;s personal website</p>
      </section>

      <section id="about" aria-labelledby="about-title">
        <h2 id="about-title">01. about</h2>
        <p>兵庫県在住の高校3年生<br />カメラ、野鳥観察、Webアプリ開発などが好きな多趣味な人です。</p>
        <p>思いついたアイデアを、AIを使いながら少しずつWebサイトやアプリにしています。まだ勉強中ですが、作りたいものを増やしていきたいです。</p>
      </section>

      <section id="works" aria-labelledby="works-title">
        <h2 id="works-title">02. works</h2>
        <article>
          <h3><a href="https://tangodots.yato-lab.com/" target="_blank" rel="noreferrer">Tango Dots ↗</a></h3>
          <p>FSRSを使って、英単語の習熟度と復習タイミングを管理する単語帳Webアプリです。</p>
          <p className="meta"><a href="https://tangodots.yato-lab.com/" target="_blank" rel="noreferrer">website</a> / web app</p>
        </article>
      </section>

      <footer>© 2026 yato</footer>
    </main>
  );
}
